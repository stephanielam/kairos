class CreateTasks < ActiveRecord::Migration
  def change
    create_table :tasks do |t|
      t.string :description
      t.datetime :starts_at
      t.integer  "repeat_times", default: nil
      
      t.timestamps null: false
    end
  end
end
