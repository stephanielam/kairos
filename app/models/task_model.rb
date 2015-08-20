class TaskModel < ActiveRecord::Base
  has_many :task_instances

  # validates :description, presence:true, length: { in: 1..50 }
  # validates :repeat_times, numericality: true

  scope :repeating, -> { where('repeat_times IS NOT NULL') }

end
