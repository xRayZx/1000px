const PhotoApiUtil = {
	fetchAllPhotos (success) {
		$.ajax({
			url: '/api/photos',
			type: 'GET',
			dataType: 'json',
			success: function (resp) {
				success(resp);
			}
		});
	},
	fetchProfilePhotos (profileId, success) {
		$.ajax({
			url: `/api/profile_photos/${profileId}`,
			type: 'GET',
			dataType: 'json',
			success: function (resp) {
				success(resp);
			}
		});
	},
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
