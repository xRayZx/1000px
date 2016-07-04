json.array! @photos do |photo|
	json.id photo.id
	json.poster_id photo.poster_id
	json.url photo.url
	json.poster ((photo.poster.first_name || "")  + " " + (photo.poster.last_name || "")).squish
	json.poster_pic photo.poster.pic_url
end
