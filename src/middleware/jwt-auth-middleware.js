const jwt = require('jsonwebtoken');
const { ResponseError } = require('../error/response-error');

// Middleware untuk verifikasi JWT
const jwtMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;

  // Cek apakah header Authorization ada dan berisi token
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'No token provided' });
  }

  // Ambil token dari header
  const token = authHeader.split(' ')[1];

  try {
    // Verifikasi token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // Simpan informasi pengguna dari token ke req.user
    next(); // Lanjutkan ke handler berikutnya
  } catch (error) {
    throw new ResponseError(401, 'Invalid token');
  }
};

module.exports = jwtMiddleware;