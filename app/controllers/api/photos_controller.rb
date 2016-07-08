class Api::PhotosController < ApplicationController
	def index
		@photos = Photo.all
		render "api/photos/index"
	end

	def profile_index
		@photos = Photo.where(poster_id: params[:id])
		render "api/photos/index"
	end

	def home
		following = []
		if current_user
			following = current_user.followings.map {|acct| acct.id}
		end
		@photos = Photo.where(poster_id: following)
		render "api/photos/home"
	end

	def create
		@photo = Photo.new(photo_params)
		if @photo.save
			render "api/photos/show"
		else
			@errors = @photo.errors.full_messages
			render "api/shared/error", status: 422
		end
	end

	def show
		@photo = Photo.find(params[:id])
		if @photo
			render "api/photos/show"
		else
			render json: nil, status: 404
		end
	end

	def update
		@photo = Photo.find(params[:id])
		if @photo.poster === current_user
			@photo.update_columns(photo_params)
		end
		render "api/photos/show"
	end

	def destroy
		photo = Photo.find(params[:id])
		photo.delete
		@photos = Photo.where(poster_id: current_user.id)
		render "api/photos/index"
	end

	private
	def photo_params
		params.require(:photo).permit(:id, :title, :description, :url, :poster_id)
	end
end
