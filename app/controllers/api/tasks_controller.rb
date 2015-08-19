class Api::TasksController < ApplicationController

  def index
    tasks = Task.all
    render json: tasks.to_json(include: :completions)
  end

  def braindump
    tasks = Task.select('tasks.id, description').joins('LEFT OUTER JOIN completions ON completions.task_id = tasks.id').where('starts_at IS NULL AND completed_at IS NULL')
    render json: tasks.to_json
  end

  def progress
    tasks = Task.find_by_sql("SELECT tasks.id, description, (CAST(COUNT(tasks.id) AS FLOAT) / CAST(tasks.repeat_times AS FLOAT) * 100) AS percent FROM tasks LEFT OUTER JOIN completions ON completions.task_id = tasks.id WHERE (repeat_times IS NOT NULL) GROUP BY tasks.id")
    render json: tasks.to_json
  end

  def calendar
    tasks = Task.find_by_sql("SELECT tasks.id, date(starts_at) AS task_day, description, strftime('%H', starts_at) AS start_time FROM tasks LEFT OUTER JOIN completions ON completions.task_id = tasks.id WHERE (starts_at IS NOT NULL) GROUP BY tasks.id")

    render json: tasks.to_json
  end

  def create
    task = Task.new(task_params)
    if task.save
      render json: task
    else
      render json: get_resource.errors, status: :unprocessable_entity
    end
  end

  def show
    task = Task.find(params[:id])
    render json: task
  end

  def update
    task = Task.find(params[:id])
    if task.update(task_params)
      render json: task
    else
    render json: task.errors, status: :unprocessable_entity
    end
  end

  def destroy
    task = Task.find(params[:id])
    task.destroy
    head :no_content
  end

  private

  def task_params
    params.require(:task).permit(:description, :starts_at, :repeat_times)
  end

end
