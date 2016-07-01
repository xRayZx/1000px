// const Cloudinary = require('cloudinary');
const React = require('react');
const Cloudinary = require('react-cloudinary');
const config = Cloudinary.cloudinaryConfig;
const CloudinaryImage = Cloudinary.CloudinaryImage;

config({
	cloud_name: 'dlgyh9jw',
	api_key: '957169367787634',
	api_secret: 'tXQCDWdQxNl6nImpPa-hoBUkyKg'
});

const CloudinaryUtil = {
	openUploadWidget (setUrl) {
		cloudinary.openUploadWidget({
			cloud_name: "dlgyh9jw", upload_preset: "twwfu72j" },
			(error, result) => {
				setUrl(result[0]);
			}
		);
	},
	image (photoName, options) {
		return (
			<CloudinaryImage className="img-idx" publicId={photoName} options={options}/>
		);
	}
}

module.exports = CloudinaryUtil;
