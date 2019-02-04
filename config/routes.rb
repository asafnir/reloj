Rails.application.routes.draw do
  namespace :api do
    post 'admin/token' => 'admin_token#create'
    get 'admins/current' => 'admins#current'
    get 'employees/:id/attendances' => 'employees#attendances'
    post 'employees/:id/attendances' => 'attendances#create'
    resources :admins, only: %i(create)
    resources :employees, only: %i(create index)
  end
end

