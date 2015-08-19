class Api::TaskInstancesController < ApplicationController

  def index
    task_instances = TaskInstance.all
    render json: task_instances.to_json
  end

  def calendar
    task_instances = TaskModel.find_by_sql(
      "SELECT task_models.id, date(starts_at) AS task_instance_day, description, CAST(strftime('%H', starts_at) AS INT) AS start_time " +
      "FROM task_models " +
      "LEFT OUTER JOIN task_instances ON task_instances.task_model_id = task_instances.id " +
      "WHERE (starts_at IS NOT NULL) " +
      "GROUP BY tasks.id"
    )
    task_instances = TaskInstanceHelper.sort_by_date(task_instances, params[:date_to_format])
    render json: task_instances.to_json
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

    def task_instance_params
      params.require(:task_instance).permit(:task_model_id, :starts_at, :completed_at)
    end

  end
