require 'pry'
class TodosController < ApplicationController
  def index
    @todos = Todo.all
    @recurrings = Recurring.all
  end

  def new
    @todo = Todo.new
  end

  def edit
  end

  def create
    Todo.create(name: params[:name])
    redirect_to '/'
  end

end
