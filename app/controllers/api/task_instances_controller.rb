class Api::TaskInstancesController < ApplicationController

  def index
    task_instances = TaskModel.find(params[:task_model_id]).task_instances
    render json: task_instances.to_json
  end

  def calendar
    task_instances = TaskModel.find_by_sql(
      "SELECT task_models.id, task_instances.id AS task_instance_id, date(starts_at) AS task_instance_day, description, CAST(strftime('%H', starts_at) AS INT) AS start_time " +
      "FROM task_models " +
      "LEFT OUTER JOIN task_instances ON task_instances.task_model_id = task_instances.id " +
      "WHERE (starts_at IS NOT NULL) " +
      "GROUP BY task_models.id"
    )
    task_instances = TaskInstanceHelper.sort_by_date(task_instances, params[:date_to_format])
    render json: task_instances.to_json
  end

  def create
    task = TaskInstance.new(task_params)
    if TaskInstance.save
      render json: task
    else
      render json: get_resource.errors, status: :unprocessable_entity
    end
  end

  def show
    task = TaskInstance.find(params[:id])
    render json: task
  end

  def update
    task = TaskInstance.find(params[:id])
    if TaskInstance.update(task_params)
      render json: task
    else
    render json: TaskInstance.errors, status: :unprocessable_entity
    end
  end

  def destroy
    task = TaskInstance.find(params[:id])
    TaskInstance.destroy
    head :no_content
  end

  private

  def task_instance_params
    params.require(:task_instance).permit(:task_model_id, :starts_at, :completed_at)
  end

end
