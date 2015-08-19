module TaskInstanceHelper
  class << self
    def sort_by_date(task_instances, date_to_format)
      task_instances.select {|task_instance| task_instance.task_instance_day == date_to_format}
    end
  end
end
