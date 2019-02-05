Rails.application.routes.draw do
  namespace :api do
    post 'admin/token' => 'admin_token#create'
    post 'employee/token' => 'employee_token#create'
    get 'admins/current' => 'admins#current'
    get 'employees/current' => 'employees#current'
    get 'employees/:id/attendances' => 'employees#attendances'
    post 'employees/:id/attendances' => 'attendances#create'
    put 'employees/:id/attendances' => 'attendances#update'
    resources :admins, only: %i(create)
    resources :employees, only: %i(create index)
  end

  get '*path', to: "application#fallback_index_html", constraints: ->(request) do
    !request.xhr? && request.format.html?
  end

end

