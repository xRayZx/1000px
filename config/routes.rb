Rails.application.routes.draw do
  root "static_pages#root"
  
  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create, :show]
    resource :session, only: [:create, :destroy, :show]
		resources :photos, except: [:new, :edit]
		get 'my_photos', :to => 'photos#my_index'
  end
end
