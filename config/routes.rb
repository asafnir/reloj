Rails.application.routes.draw do

  namespace :api do
    post 'user/token' => 'user_token#create' 
    get 'users/current' => 'users#current'
    post 'employees' => 'users#create_employee'
    get 'employees' => 'users#employees'
    post 'employees/:id/attendances' => 'attendances#create'
    put 'employees/:id/attendances' => 'attendances#update'
    get 'employees/:id/attendances' => 'attendances#list'
    resources :users, only: %i(create)
  end

  get '*path', to: "application#fallback_index_html", constraints: ->(request) do
    !request.xhr? && request.format.html?
  end

end

