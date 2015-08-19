class TaskModel < ActiveRecord::Base
  has_many :task_instances
end
