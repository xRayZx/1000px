class CreateComments < ActiveRecord::Migration
  def change
    create_table :comments do |t|
			t.integer :poster_id, null: false
			t.integer :photo_id, null: false
			t.text :body, null: false

      t.timestamps null: false
    end

		add_index :comments, :photo_id
		add_index :comments, :poster_id
  end
end
