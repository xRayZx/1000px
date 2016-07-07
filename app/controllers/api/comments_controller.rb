class Api::CommentsController < ApplicationController
	def create
		comment = Comment.create(comment_params)
		@comments = comment.photo.comments
		render 'api/comments/index'
	end

	def index
		photo = Photo.find(params[:id])
		@comments = photo.comments
		render 'api/comments/index'
	end

	private
	def comment_params
		params.require(:comment).permit(:poster_id, :photo_id, :body)
	end
end
