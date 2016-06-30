class Api::PhotosController < ApplicationController
	def index
		@photos = Photo.all
		render "api/photos/index"
	end

	def my_index
		@photos = Photo.where(poster: current_user)
		render "api/photos/index"
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

	end

	def destroy

	end

	private
	def photo_params
		params.require(:photo).permit(:title, :description, :url, :poster_id)
	end
end
