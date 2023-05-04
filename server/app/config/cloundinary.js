const cloudinary = require('cloudinary').v2;
require('dotenv').config()
cloudinary.config({
    cloud_name: "dx8zwz2ph",
    api_key: "842454999886769",
    api_secret: "ltbkLU74d5bGcCigPnRXka5lJh0",
    secure: true
  });
module.exports = cloudinary;

  