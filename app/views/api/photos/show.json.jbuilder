json.extract! @photo, :id, :title, :description, :poster_id, :url, :created_at 

json.poster ((@photo.poster.first_name || '') + " " + (@photo.poster.last_name || '')).squish
json.poster_pic @photo.poster.pic_url
