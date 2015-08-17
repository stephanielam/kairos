class Api::TasksController < ApplicationController

  def index
    tasks = Task.all
    completions = Completion.all
    render json: tasks.to_json(include: :completions)
  end
  
end