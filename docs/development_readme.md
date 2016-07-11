# 1000px

[Heroku link][heroku] **Note:** This should be a link to your production site

[heroku]: https://www.1000px.us

## Minimum Viable Product

1000px is a web application inspired by 500px that will be build using Ruby on Rails and React.js.  By the end of Week 9, this app will, at a minimum, satisfy the following criteria:

- [x] Hosting on Heroku
- [x] New account creation, login, and guest/demo login
- [x] A production README, replacing this README (**NB**: check out the [sample production README](docs/production_readme.md) -- you'll write this later)
- [x] Upload Photos
  - [x] Integrate Cloudinary for uploading
  - [x] Photo detail page has description and poster information
  - [x] Ability to edit description
- [x] Follows
  - [x] Users can follow and be followed by many users
  - [x] Dynamic follow/unfollow button on profile page
- [x] Home Feed
  - [x] Displays all photos of the current user's followees
  - [x] Clicking on photo brings up Photo detail page
  - [x] Clicking on poster renders the user profile page
- [x] Profile Page
  - [x] Has profile edit form
  - [x] Has a profile picture and description
  - [x] Index of all photos uploaded by this user
  - [ ] Has option to show the user's followers and followees

## Design Docs
* [View Wireframes][views]
* [React Components][components]
* [Flux Cycles][flux-cycles]
* [API endpoints][api-endpoints]
* [DB schema][schema]

[views]: docs/views.md
[components]: docs/components.md
[flux-cycles]: docs/flux-cycles.md
[api-endpoints]: docs/api-endpoints.md
[schema]: docs/schema.md

## Implementation Timeline

### Phase 1: Backend setup and Front End User Authentication (1.5 day, W1 Tu 10pm)

**Objective:** Functioning rails project with Authentication

- [x] create new project
- [x] create `User` model
- [x] back-end authentication
- [x] front-end authentication
- [x] user signup/signin pages
- [x] blank landing page after signin

### Phase 2: Photos Model, API, and basic APIUtil (2 days, W1 Th 6pm)

**Objective:** Photos can be uploaded, displayed, edited and destroyed through the API.

- [x] create `Photo` model
- [x] seed the database with a small amount of test data
- [x] CRUD API for photos (`Cloudinary`)
- [x] jBuilder views for photos
- [x] setup Webpack & Flux scaffold
- [x] setup `APIUtil` to interact with the API
- [x] test out API interaction in the console.

### Phase 3: Flux Architecture and Router (2 days, W1 Sat 6pm)

**Objective:** Photos can be uploaded, displayed, edited and destroyed with the user interface.

- [x] setup the flux loop with skeleton files
- [x] setup React Router
- implement each photo component, building out the flux loop as needed.
  - [x] `PhotosIndex`
  - [x] `PhotoIndexItem`
  - [x] `PhotoDetail`
  - [x] `CloudinaryWidget`

### Phase 4: User Profile Page (1 day, W2 Sun 6pm)

**Objective:** Each users show page will have their uploaded pictures and user details

- [x] setup flux loop with skeleton files
- [x] setup React Router
- implement each photo component, building out the flux loop as needed.
  - [x] `PhotoIndex`
  - [x] `PhotoIndexItem`
  - [x] `PhotoDetail`

### Phase 5: Start Styling (0.5 days, W2 M 12pm)

**Objective:** Existing pages (including signup/signin) will look good.

- [x] create a basic style guide
- [x] position elements on the page
- [x] add basic colors & styles

### Phase 6: Follows (1.5 day, W2 W 6pm)

**Objective:** User has many followers and a followee belongs to many users.

- [x] create `Follow` model
- build out API, Flux loop, and components for:
  - [x] creating followee/follower associations
  - [x] implement follows component, building out the flux loop as needed
    - [x] `FollowsIndex`
  - [x] display followers on profile page
- Use CSS to style new views

### Phase 7: Home Feed (1 day, W2 Th 6pm)

**Objective:** Display all photos uploaded by users followed by the current user.

- [x] create a photo index based off the `Follows` join table.
- [x] implement photo components
  - [x] `PhotosIndex`
  - [x] `PhotoIndexItem`
  - [x] `PhotoDetail`

### Phase 8: Styling Cleanup and Seeding (1 day, W2 F 6pm)

**objective:** Make the site feel more cohesive and awesome.

- [x] Get feedback on my UI from others
- [x] Refactor HTML classes & CSS rules
- [x] Add modals, transitions, and other styling flourishes.

### Bonus Features (TBD)
- [ ] Tags
- [ ] Search
- [ ] Discover
- [ ] Notifications
- [x] Comments
- [ ] Likes

[phase-one]: docs/phases/phase1.md
[phase-two]: docs/phases/phase2.md
[phase-three]: docs/phases/phase3.md
[phase-four]: docs/phases/phase4.md
[phase-five]: docs/phases/phase5.md
