Rails.application.routes.draw do
  namespace :v1 do
    scope controller: :auth do
      post :login
    end

    resources :users, only: [:create]
  end
end
