json.array! @index do |user|
	json.id user[:profile].id
	json.name ((user[:profile].first_name || '') + " " + (user[:profile].last_name || ''))
	json.pic user[:profile].pic_url
	json.photos user[:photos], :id, :url, :poster_id
end
