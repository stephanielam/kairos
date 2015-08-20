class TaskModel < ActiveRecord::Base
  has_many :task_instances
  validates :description, presence:true
end
