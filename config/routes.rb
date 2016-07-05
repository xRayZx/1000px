Rails.application.routes.draw do
  root "static_pages#root"
  
  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create, :show, :update]
		get 'user/:id', :to => 'users#profile'
		get 'follow/:id', :to => 'follows#status'
		post 'follow/:id', :to => 'follows#create'
		delete 'follow/:id', :to => 'follows#destroy'
    resource :session, only: [:create, :destroy, :show]
		resources :photos, except: [:new, :edit]
		get 'profile_photos/:id', :to => 'photos#profile_index'
		get 'home_photos', :to => 'photos#home'
  end
end
