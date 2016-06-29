class CreatePhotos < ActiveRecord::Migration
  def change
    create_table :photos do |t|
      t.text :title, null: false
      t.text :description
      t.integer :poster_id, null: false
			t.text :url, null: false

      t.timestamps null: false
    end

		add_index :photos, :poster_id
  end
end
