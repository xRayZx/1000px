json.extract! user, :id, :pic_url, :first_name, :last_name, :description, :cover

json.following current_user.followings.map {|user| user.id}.include?(user.id)
