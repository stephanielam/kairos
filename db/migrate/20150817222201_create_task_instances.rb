class CreateTaskInstances < ActiveRecord::Migration
  def change
    create_table :task_instances do |t|
      t.integer  :task_model_id
      t.datetime :starts_at, default: nil
      t.datetime :completed_at, default: nil

      t.timestamps null: false
    end
  end
end
