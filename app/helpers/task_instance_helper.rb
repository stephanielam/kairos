module TaskInstanceHelper
  class << self
    def filter_by_date(task_instances, date_to_format)
      task_instances.select {|task_instance| task_instance.starts_at.strftime("%F") == date_to_format}
    end
  end
end
