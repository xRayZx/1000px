class Follow < ActiveRecord::Base
	belongs_to :followee,
		class_name: 'User',
		foreign_key: :followed_id

	belongs_to :follower,
		class_name: 'User',
		foreign_key: :follower_id

	validates :followee, :follower, presence: true
	validates :follower, uniqueness: {scope: :followee}
end
