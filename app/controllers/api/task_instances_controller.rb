class Api::TaskInstancesController < ApplicationController

  def index
    task_instances = TaskModel.find(params[:task_model_id]).task_instances
    render json: task_instances.to_json
  end

  def calendar
    scheduled_task_instances = TaskInstance.includes(:task_model).scheduled
    scheduled_task_instances_on_date = TaskInstanceHelper.filter_by_date(scheduled_task_instances, params[:date_to_format])
    calendar = []
    scheduled_task_instances_on_date.each do |task_instance|
      task_instance_object = {
        task_model_id: task_instance.task_model.id,
        task_instance_id: task_instance.id,
        description: task_instance.task_model.description,
        task_instance_day: task_instance.starts_at.strftime("%F")
      }
      calendar.push(task_instance_object)
    end
    render json: calendar.to_json
  end

  def create
    task = TaskInstance.new(task_instance_params)
    if task.save
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
    if task.update(task_instance_params)
      render json: task
    else
      render json: TaskInstance.errors, status: :unprocessable_entity
    end
  end

  def destroy
    task = TaskInstance.find(params[:id])
    task.destroy
    head :no_content
  end

  private

  def task_instance_params
    params.require(:task_instance).permit(:task_model_id, :starts_at, :completed_at)
  end

end
