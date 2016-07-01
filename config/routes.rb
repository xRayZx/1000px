Rails.application.routes.draw do
  root "static_pages#root"
  
  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create, :show]
    resource :session, only: [:create, :destroy, :show]
		resources :photos, except: [:new, :edit]
		get 'user/:id', :to => 'users#profile'
		get 'profile_photos/:id', :to => 'photos#profile_index'
		get 'home_photos', :to => 'photos#home'
  end
end
