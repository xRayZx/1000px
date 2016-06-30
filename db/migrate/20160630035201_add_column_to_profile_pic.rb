class AddColumnToProfilePic < ActiveRecord::Migration
  def change
		add_column :users, :pic_url, :text
  end
end
