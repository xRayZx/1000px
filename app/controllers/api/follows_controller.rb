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
			unless user.id == current_user.id || following.include?(user.id) 
				profile = {profile: user,
										photos: user.photos.limit(5).select("id, url, poster_id"),
										photoCount: user.photos.count}
				@index << profile
			end
			break if @index.length > 4
		end
		render '/api/follows/index'
	end

	def followers
		user = User.find(params[:id])
		followers = user.followers
		@index = followers.map do |follower|
			{id: follower.id, 
		 	 	name: (follower.first_name + " " + follower.last_name),
		  	pic: follower.pic_url,
				photoCount: follower.photos.count
			}
		end
		render '/api/follows/list'
	end

	def followings
		user = User.find(params[:id])
		followings = user.followings
		@index = followings.map do |following|
			{id: following.id, 
		 	 	name: (following.first_name + " " + following.last_name),
		  	pic: following.pic_url,
				photoCount: following.photos.count
			}
		end
		render '/api/follows/list'
	end
end
