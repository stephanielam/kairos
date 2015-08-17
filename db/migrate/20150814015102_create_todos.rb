class CreateTodos < ActiveRecord::Migration
  def change
    create_table :todos do |t|
      t.string :name
      t.date :completed
      t.integer :recurring_id

      t.timestamps null: false
    end
  end
end
