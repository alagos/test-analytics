Rails.application.routes.draw do
  root 'search#index'

  resources :analytics, only: [:index, :create] do
    collection do
      delete '/', action: :destroy_all
    end
  end
end
