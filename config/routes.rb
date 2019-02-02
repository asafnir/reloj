Rails.application.routes.draw do
  namespace :api do
    post 'admin/token' => 'admin_token#create'
    get 'admins/current' => 'admins#current'
    resources :admins, only: %i(create)
  end
end
