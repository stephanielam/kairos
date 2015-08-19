module TaskHelper
  class << self
    def sort_by_date(tasks, date)
      tasks.select {|task| task.task_day == date}
    end
  end
end
