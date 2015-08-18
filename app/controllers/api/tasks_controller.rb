class Api::TasksController < ApplicationController

  def index
    tasks = Task.all
    render json: tasks.to_json(include: :completions)
  end

  def braindump
    tasks = Task.where('starts_at IS NULL')
    render json: tasks.to_json(include: :completions)
  end

  def progress
    tasks = Task.where("starts_at IS NOT NULL")
    render json: tasks.to_json(include: :completions)
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
    params.require(:task).permit(:description, :starts_at, :repeat_times, :repeats_every)
  end





  
end