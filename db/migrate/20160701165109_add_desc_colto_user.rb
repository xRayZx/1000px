class AddDescColtoUser < ActiveRecord::Migration
  def change
		add_column :users, :description, :text
		add_column :users, :cover, :text
  end
end
