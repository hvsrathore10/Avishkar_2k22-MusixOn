const dotenv = require('dotenv'); //.env import
dotenv.config();

//cloud-commands and setup
const cloudinary = require('cloudinary').v2;

cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET
});

const image = './images/github_img.jpeg';

cloudinary.uploader.upload(image)
  .then(result => {
    console.log(result);
  })
  .catch(error => {
    console.error('Error uploading image:', error);
  });
