Rails.application.routes.draw do
  resources :attendances
  namespace :api do
    post 'admin/token' => 'admin_token#create'
    get 'admins/current' => 'admins#current'
    resources :admins, only: %i(create)
    resources :employees, only: %i(create index)
  end
end

