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

	def status
		other_user = params[:id]
		follow = Follow.find_by({follower_id: current_user.id, followed_id: other_user})
		@user = User.find(other_user)
		render '/api/users/show'
	end
end
