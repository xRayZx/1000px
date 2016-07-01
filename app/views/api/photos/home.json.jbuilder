json.array! @photos do |photo|
	json.id photo.id
	json.title photo.title
	json.description photo.description
	json.poster_id photo.poster_id
	json.url photo.url
	json.created_at photo.created_at
	json.poster ((photo.poster.first_name || "")  + " " + (photo.poster.last_name || "")).squish
	json.poster_pic photo.poster.pic_url
end
