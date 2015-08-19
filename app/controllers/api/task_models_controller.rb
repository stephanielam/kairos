class Api::TaskModelsController < ApplicationController

  def index
    task_models = TaskModel.all
    render json: task_models.to_json(include: :task_instances)
  end

  def braindump
    task_models = TaskModel.find_by_sql(
      "SELECT task_models.id, description " +
      "FROM task_models " +
      "LEFT OUTER JOIN task_instances ON task_instances.task_model_id = task_models.id " +
      "WHERE repeat_times IS NULL AND starts_at IS NULL AND completed_at IS NUll " +
      "GROUP BY task_models.id"
    )
    render json: task_models.to_json
  end
 # * 100) AS percent
  def progress
    task_models = TaskModel.find_by_sql(
      "SELECT task_models.id, description, " +
      "(CAST(COUNT(task_instances.task_model_id) AS FLOAT)), CAST(task_models.repeat_times AS FLOAT) " +
      "FROM task_models " +
      "LEFT OUTER JOIN task_instances ON task_instances.task_model_id = task_models.id " +
      "WHERE repeat_times IS NOT NULL " +
      "GROUP BY task_models.id"
    )
    render json: task_models.to_json
  end

  # def create
  #   task = Task.new(task_params)
  #   if task.save
  #     render json: task
  #   else
  #     render json: get_resource.errors, status: :unprocessable_entity
  #   end
  # end
  #
  # def show
  #   task = Task.find(params[:id])
  #   render json: task
  # end
  #
  # def update
  #   task = Task.find(params[:id])
  #   if task.update(task_params)
  #     render json: task
  #   else
  #   render json: task.errors, status: :unprocessable_entity
  #   end
  # end
  #
  # def destroy
  #   task = Task.find(params[:id])
  #   task.destroy
  #   head :no_content
  # end

  private

  def task_model_params
    params.require(:task_model).permit(:description, :repeat_times)
  end

end
