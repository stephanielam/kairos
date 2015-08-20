class TaskModel < ActiveRecord::Base
  has_many :task_instances

<<<<<<< HEAD
  # validates :id, presence: true, uniqueness: true
  # validates :description, presence:true, length: { in: 2..50 } 
=======
  # validates :description, presence:true, length: { in: 1..50 }
>>>>>>> master
  # validates :repeat_times, numericality: true

  scope :repeating, -> { where('repeat_times IS NOT NULL') }

end
