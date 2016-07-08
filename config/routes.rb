Rails.application.routes.draw do
  root "static_pages#root"
  
  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create, :show, :update]
		get 'user/:id', :to => 'users#profile'
		get 'follow', :to => 'follows#index'
		get 'follow/:id', :to => 'follows#status'
		post 'follow/:id', :to => 'follows#create'
		delete 'follow/:id', :to => 'follows#destroy'
		get 'followers/:id', :to => 'follows#followers'
		get 'following/:id', :to => 'follows#followings'
    resource :session, only: [:create, :destroy, :show]
		resources :photos, except: [:new, :edit]
		get 'photos/:id/comments', :to => 'comments#index'
		post 'photos/:id/comments', :to => 'comments#create'
		get 'profile_photos/:id', :to => 'photos#profile_index'
		get 'home_photos', :to => 'photos#home'
  end
end
