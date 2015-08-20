class TaskInstance < ActiveRecord::Base
  belongs_to :task_model

  # validates :id, presence: true, uniqueness: true
  # validates :task_model_id, presence: true

  scope :completed, -> { where('completed_at IS NOT NULL') }
  scope :scheduled, -> { where('starts_at IS NOT NULL') }
end
