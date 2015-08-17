class CreateCompletions < ActiveRecord::Migration
  def change
    create_table :completions do |t|
      t.integer :task_id
      t.datetime :completed_at

      t.timestamps null: false
    end
  end
end
