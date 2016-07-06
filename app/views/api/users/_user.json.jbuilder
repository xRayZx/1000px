json.extract! user, :id, :pic_url, :first_name, :last_name, :description, :cover

json.followingCount user.followings.count
json.followerCount user.followers.count

if current_user
	json.following current_user.followings.map {|user| user.id}.include?(user.id)
end
