class Api::UsersController < ApplicationController

	def create
		@user = User.new(user_params)
		if @user.save
			login(@user)
			render "api/users/show"
		else
			@errors = @user.errors.full_messages
			render "api/shared/error", status: 422
		end
	end

	def show
		@user = current_user
		if @user
			render "api/users/show"
		else
			render json: nil, status: 404
		end
	end

	def update
		@user = current_user
		@user.update_columns(user_edit_params)
		render "api/users/show"
	end

	def profile
		@user = User.find(params[:id])
		render "api/users/show"
	end

	private

	def user_params
		params.require(:user).permit(:username, :password)
	end

	def user_edit_params
		params.require(:user).permit(:first_name, :last_name, :description, :pic_url)
	end

end
