class TaskInstance < ActiveRecord::Base
  belongs_to :task_model

  scope :completed, -> { where('completed_at IS NOT NULL') }
end
