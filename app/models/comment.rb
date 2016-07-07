class Comment < ActiveRecord::Base
	validates :poster_id, :photo_id, :body, presence: true

	belongs_to :author,
		class_name: 'User',
		foreign_key: :poster_id

	belongs_to :photo,
		class_name: 'Photo',
		foreign_key: :photo_id
end
