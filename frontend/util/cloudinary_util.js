const CloudinaryUtil = {
	openUploadWidget (setUrl) {
		cloudinary.openUploadWidget({
			cloud_name: "dlgyh9jw", upload_preset: "twwfu72j" },
			(error, result) => {
				setUrl(result[0]);
			}
		);
	}
}

module.exports = CloudinaryUtil;
