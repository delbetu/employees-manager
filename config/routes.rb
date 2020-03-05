Rails.application.routes.draw do
  resources :employees, only: :create do
    resources :entries, only: :index
  end
  get 'home/index'
  get 'home/timestamp'

  root 'home#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end

