const { Storage } = require('@google-cloud/storage');

const storage = new Storage({
  keyFilename: './service-account-key.json',
  projectId: '454827052627',
});
const bucketName = 'plantpal-assets';
const bucket = storage.bucket(bucketName);

const saveBucket = storage.bucket('plantpal-save');

const uploadFile = async (file, folder) => {
  const hashName = `${Date.now()}_${Math.floor(Math.random() * 1000)}`;
  file.originalname = hashName + file.originalname;

  const blob = bucket.file(`${folder}/${file.originalname}`);
  const blobStream = blob.createWriteStream({
    resumable: false,
    metadata: {
      contentType: file.mimetype,
    },
  });

  await new Promise((resolve, reject) => {
    blobStream.on("error", reject);
    blobStream.on("finish", resolve);
    blobStream.end(file.buffer);
  });

  return `https://storage.googleapis.com/${bucketName}/${blob.name}`;
};

const deleteFile = async (url) => {
  const filename = url.split('/').pop();
  const folder = url.split('/')[4];
  const file = bucket.file(`${folder}/${filename}`);

  await file.delete();
};

const uploadPredictedImage = async (file, classNameFile) => {
  const hashName = `${Date.now()}_${Math.floor(Math.random() * 1000)}`;
  file.originalname = hashName + file.originalname;

  const blob = bucket.file(`diagnosis/${classNameFile}/${file.originalname}`);
  const blobStream = blob.createWriteStream({
    resumable: false,
    metadata: {
      contentType: file.mimetype,
    },
  });

  await new Promise((resolve, reject) => {
    blobStream.on("error", reject);
    blobStream.on("finish", resolve);
    blobStream.end(file.buffer);
  });

  return `https://storage.googleapis.com/${bucketName}/${blob.name}`;
}

module.exports = {
  uploadFile,
  deleteFile,
  uploadPredictedImage,
  saveBucket,
  bucket
};