const PhotoApiUtil = {
  uploadPhoto (photo, success) {
		$.ajax({
			url: '/api/photos',
			type: 'POST',
			dataType: 'json',
			data: {photo: photo},
			success: function (resp) {
				success(resp);
			}
		});
	}  
};

module.exports = PhotoApiUtil;
