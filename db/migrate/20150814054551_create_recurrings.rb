class CreateRecurrings < ActiveRecord::Migration
  def change
    create_table :recurrings do |t|
      t.integer  :times

      t.timestamps null: false
    end
  end
end
