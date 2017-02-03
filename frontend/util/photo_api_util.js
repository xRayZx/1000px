export const fetchAllPhotos = (success) => {
	$.ajax({
		url: '/api/photos',
		type: 'GET',
		dataType: 'json',
		success: function (resp) {
			success(resp);
		}
	});
};

export const fetchProfilePhotos = (profileId, success) => {
	$.ajax({
		url: `/api/profile_photos/${profileId}`,
		type: 'GET',
		dataType: 'json',
		success: function (resp) {
			success(resp);
		}
	});
};

export const fetchHomeFeed = (success) => {
	$.ajax({
		url: '/api/home_photos',
		type: 'GET',
		dataType: 'json',
		success: function (resp) {
			success(resp);
		}
	});
};

export const uploadPhoto = (photo, success) => {
	$.ajax({
		url: '/api/photos',
		type: 'POST',
		dataType: 'json',
		data: {photo: photo},
		success: function (resp) {
			success(resp);
		}
	});
};

export const fetchPhoto = (photoId, success) => {
	$.ajax({
		url: `/api/photos/${photoId}`,
		type: 'GET',
		dataType: 'json',
		success: function (resp) {
			success(resp);
		}
	});
};

export const updatePhoto = (photo, success) => {
	$.ajax({
		url: `/api/photos/${photo.id}`,
		type: 'PATCH',
		dataType: 'json',
		data: {photo: photo},
		success: function (resp) {
			success(resp);
		}
	})
};

export const deletePhoto = (photoId, success) => {
	$.ajax({
		url: `/api/photos/${photoId}`,
		type: 'DELETE',
		dataType: 'json',
		success: function (resp) {
			success(resp);
		}
	});
};
