json.array! @comments do |comment|
	 json.id comment.id
	 json.poster_id comment.poster_id
	 json.poster ((comment.author.first_name || "") + " " + (comment.author.last_name || ""))
	 json.poster_pic comment.author.pic_url
	 json.photo_id comment.photo_id
	 json.body comment.body
	 json.created_at comment.created_at
end
