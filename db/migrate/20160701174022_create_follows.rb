class CreateFollows < ActiveRecord::Migration
  def change
    create_table :follows do |t|
			t.integer :follower_id, null: false
			t.integer :followed_id, null: false
      t.timestamps null: false
    end
		add_index :follows, [:follower_id, :followed_id], unique: true
  end
end
