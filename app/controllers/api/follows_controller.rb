class Api::FollowsController < ApplicationController
	def create
		other_user = params[:id]
		Follow.create({follower_id: current_user.id, followed_id: other_user})
		@user = User.find(other_user)
		render '/api/users/show'
	end

	def destroy
		other_user = params[:id]
		follow = Follow.find_by({follower_id: current_user.id, followed_id: other_user})
		follow.delete
		@user = User.find(other_user)
		render '/api/users/show'
	end

	def index
		@index = []
		following = current_user.followings.map {|user| user.id}
		users = User.all.order('random()')
		users.each do |user|
			unless following.include?(user.id)
				profile = {profile: user, photos: user.photos.limit(3).select("id, url, poster_id")}
				@index << profile
			end
			break if @index.length > 4
		end
		render '/api/follows/index'
	end

end
