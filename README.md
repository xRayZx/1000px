# 1000px

[1000px live][heroku]

[heroku]: http://www.1000px.us

1000px is a full-stack web application inspired by 500px. It utilizes Ruby on Rails on the backend, a PostgreSQL database, and React.js with a Flux architectural framework on the frontend. All JavaScript is written in ES6 syntax.

## Features & Implementation

### Single-Page App

1000px is truly a single-page; all content is delivered on one static page.  The root page listens to a `UserStore` and renders content based on a call to `UserStore.currentUser()`.  By using Jbuilder, sensitive information is filtered out of the frontend of the app.

```ruby
json.extract! user, :id, :pic_url, :first_name, :last_name, :description, :cover

json.followingCount user.followings.count
json.followerCount user.followers.count

if current_user
	json.following current_user.followings.map {|user| user.id}.include?(user.id)
end
```

### Photo Uploading, Rendering, and Editing
  On the backend, the database holds a photos table which contains columns for `id`, `poster_id`, `title`, `description`, and `url`. Photos are uploaded through a built in Cloudinary widget and stored on the Cloudinary CDN. Upon successful upload, Cloudinary returns an object with information about the image. The `path` is extracted from the returned object, and stored as the `url` in the photos table. Storing the `path` rather than the `full_url` allows the app to dynamically fetch the photos from the Cloudinary CDN with an options hash. Since high quality photos can easily exceed 10MB in size, this limits the bandwidth usage to only what's necessary.

  ```javascript
  CloudinaryUtil.image(this.props.photo.url,
     {width: size[this.props.size],
       crop: "limit",
       alt: this.props.photo.title,
     })
  ```

  All photos are listed through a `PhotoIndexItem` component. This component holds some poster information that is displayed when the mouse hovers over the photo. It also holds the click handler to show the `PhotoDetail` component for that photo.

  ![hover_credits]


  When a user is not logged in, the app renders the `Landing` component as the root. This component provides a preview of 25 random photos no users is logged in. Clicking on a photo pops the photo out into a modal with its details and comments. The user is also able to click on the poster of the photo to be redirected to their profile. The profile page component renders all photos uploaded by that user. This component is also rendered as a child of the root route, generating a direct URL to allow sharing the profile page through copy and pasting.

  Upon user login, the `Landing` component gets replaced with the `HomeFeed` component at the root route. The `HomeFeed` component makes an API call to the backend, which hits the  `PhotosController#home` method that returns a JSON object of all photos posted by users followed by the current user.

  ```ruby
  def home
    following = []
    if current_user
      following = current_user.followings.map {|acct| acct.id}
    end
    @photos = Photo.where(poster_id: following)
    render "api/photos/home"
  end
```

  Logged in users have the ability to upload photos and edit (or delete) them on the photo detail page. As mentioned earlier, clicking on the photo will pop the photo details out in a modal. The user can then click on the photo again to be redirected to that photo's detail page via the router, changing the URL. If the user is the owner of the photo, the edit button will be available.

  ![photo_detail_edit]


### Follows

   In addition to the user's personalized photo feed, the `HomeFeed` also renders a `FollowIndex` component which randomly shows 5 users the current user can follow, along with a sample of their photo uploads. When the `FollowIndex` mounts, it makes an API call to the `FollowsController#index` method which queries the database for 5 random users the current user can follow along with up to 5 of their most recent photos. The app utilizes a `FollowStore` on the frontend to store the JSON object returned by the backend, allowing the Follow components to render the data quickly.

  ```ruby
  def index
		@index = []
		following = current_user.followings.map {|user| user.id}
		users = User.where.not({id: following}).order('random()').limit(5)
		users.each do |user|
			unless user.id == current_user.id
				profile = {profile: user,
                    photos: user.photos.limit(5).select("url"),
                photoCount: user.photos.count}
				@index << profile
			end
		end
		render '/api/follows/index'
	end
  ```

![follow_index]


  The `FollowButton` component is rendered on the `FollowIndex` and on the `ProfilePage` component. These 2 components pass the user's `id` and `following` status as props to the `FollowButton` which is used to dynamically render the text for the button.

  Each profile also has a `FollowerIndex` and a `FollowingIndex` component which listens to the `FollowStore`. Clicking on "Followers" or "Following" will render the component as a modal, listing all the followers/followees of that user/profile.

  Here's the render method of the `FollowerIndex` component:

  ```javascript
  render () {
    let list = this.state.index.map((follower) => {
      return (
      <li className="follows-list" key={follower.id}>
        <img className="follow-pic" onClick={this.showProfile(follower.id)} src={CloudinaryUtil.image(follower.pic, {width: 40, gravity: 'face', crop: 'thumb'})}/>
        <div className="suggest-text">
          <span><strong onClick={this.showProfile(follower.id)}>{follower.name}</strong></span>
          <div>{follower.photoCount} Photos</div>
        </div>
      </li>
      );
    });
    return (
      <ul className="follows-list-container">
        <div className="follows-header">Followers</div>
        {list}
      </ul>
    )
  }
  ```

[hover_credits]: ./docs/hover_credits.png
[photo_detail_edit]: ./docs/photo_detail_edit.png
[follow_index]: ./docs/follow_index.png
