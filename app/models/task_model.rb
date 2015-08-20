class TaskModel < ActiveRecord::Base
  has_many :task_instances

  scope :repeating, -> { where('repeat_times IS NOT NULL') }
end
