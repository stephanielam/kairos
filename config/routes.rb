Rails.application.routes.draw do
  root to: "home#show"

  namespace :api do
    get '/braindump' => 'task_models#braindump'
    get '/progress' => 'task_models#progress'
    get '/calendar/:date_to_format' => 'task_instances#calendar'
    resources :task_models, only: [:index, :create, :show, :update, :destroy]
    resources :task_instances, only: [:index, :create, :show, :update, :destroy]
  end
end
