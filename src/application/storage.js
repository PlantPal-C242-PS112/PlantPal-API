const { Storage } = require('@google-cloud/storage');

const storage = new Storage({
  keyFilename: './cloud-storage-key.json',
  projectId: '454827052627',
});
const bucketName = 'plantpal-assets';
const bucket = storage.bucket(bucketName);

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
}

const deleteFile = async (url) => {
  const filename = url.split('/').pop();
  const folder = url.split('/')[4];
  const file = bucket.file(`${folder}/${filename}`);

  await file.delete();
}

module.exports = { uploadFile, deleteFile };