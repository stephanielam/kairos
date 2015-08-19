class CreateTaskModels < ActiveRecord::Migration
  def change
    create_table :task_models do |t|
      t.string   :description
      t.integer  :repeat_times, default: nil

      t.timestamps null: false
    end
  end
end
