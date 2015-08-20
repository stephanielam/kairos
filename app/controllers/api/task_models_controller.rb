class Api::TaskModelsController < ApplicationController

  def index
    task_models = TaskModel.all
    render json: task_models.to_json(include: :task_instances)
  end

  def braindump
    task_models = TaskModel.find_by_sql(
      "SELECT task_models.id, task_instances.id AS task_instance_id, description " +
      "FROM task_models " +
      "LEFT OUTER JOIN task_instances ON task_instances.task_model_id = task_models.id " +
      "WHERE repeat_times IS NULL AND starts_at IS NULL AND completed_at IS NUll " +
      "GROUP BY task_models.id"
    )
    render json: task_models.to_json
  end

  def progress
    repeating_task_models = TaskModel.includes(:task_instances).repeating
    progress = []
    repeating_task_models.each do |task_model|
      task_model_object = {
        id: task_model.id,
        description: task_model.description
      }
      completed_tasks_count = task_model.task_instances.completed.count
      task_model_object[:percent] = (completed_tasks_count.to_f / task_model.repeat_times.to_f * 100.0).to_i
      progress.push(task_model_object)
    end
    render json: progress.to_json
  end

  def create
    task = TaskModel.new(task_model_params)
    # instance = TaskInstance.new(task_model_id: task.id)
    if task.save
      render json: task
    else
      render json: get_resource.errors, status: :unprocessable_entity
    end
  end

  def show
    task = TaskModel.find(params[:id])
    render json: task
  end

  def update
    task = TaskModel.find(params[:id])
    if task.update(task_model_params)
      render json: task
    else
    render json: task.errors, status: :unprocessable_entity
    end
  end

  def destroy
    task = TaskModel.find(params[:id])
    task.destroy
    head :no_content
  end

  private

  def task_model_params
    params.require(:task_model).permit(:description, :repeat_times)
  end

end
