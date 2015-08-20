class TaskModel < ActiveRecord::Base
  has_many :task_instances
<<<<<<< HEAD
  validates :description, presence:true
=======

  scope :repeating, -> { where('repeat_times IS NOT NULL') }
>>>>>>> master
end
