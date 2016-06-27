# 1000px

[Heroku link][heroku] **Note:** This should be a link to your production site

[heroku]: http://www.herokuapp.com

## Minimum Viable Product

1000px is a web application inspired by 500px that will be build using Ruby on Rails and React.js.  By the end of Week 9, this app will, at a minimum, satisfy the following criteria:

- [ ] Hosting on Heroku
- [ ] New account creation, login, and guest/demo login
- [ ] A production README, replacing this README (**NB**: check out the [sample production README](docs/production_readme.md) -- you'll write this later)
- [ ] Upload Photos
  - [ ] Integrate Cloudinary for uploading
  - [ ] Photo detail page has description and poster information
  - [ ] Ability to edit description
- [ ] Follows
  - [ ] Users can follow and be followed by many users
  - [ ] Dynamic follow/unfollow button on profile page
- [ ] Home Feed
  - [ ] Displays all photos of the current user's followees
  - [ ] Clicking on photo brings up Photo detail page
  - [ ] Clicking on poster renders the user profile page
- [ ] Profile Page
  - [ ] Has profile edit form
  - [ ] Has a profile picture and description
  - [ ] Index of all photos uploaded by this user
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
- [ ] create `User` model
- [ ] back-end authentication
- [ ] front-end authentication
- [ ] user signup/signin pages
- [ ] blank landing page after signin

### Phase 2: Photos Model, API, and basic APIUtil (2 days, W1 Th 6pm)

**Objective:** Photos can be uploaded, displayed, edited and destroyed through the API.

- [ ] create `Photo` model
- [ ] seed the database with a small amount of test data
- [ ] CRUD API for photos (`Cloudinary`)
- [ ] jBuilder views for photos
- [ ] setup Webpack & Flux scaffold
- [ ] setup `APIUtil` to interact with the API
- [ ] test out API interaction in the console.

### Phase 3: Flux Architecture and Router (2 days, W1 Sat 6pm)

**Objective:** Photos can be uploaded, displayed, edited and destroyed with the user interface.

- [ ] setup the flux loop with skeleton files
- [ ] setup React Router
- implement each photo component, building out the flux loop as needed.
  - [ ] `PhotosIndex`
  - [ ] `PhotoIndexItem`
  - [ ] `PhotoDetail`
  - [ ] `CloudinaryWidget`

### Phase 4: User Profile Page (1 day, W2 Sun 6pm)

**Objective:** Each users show page will have their uploaded pictures and user details

- [ ] setup flux loop with skeleton files
- [ ] setup React Router
- implement each photo component, building out the flux loop as needed.
  - [ ] `PhotoIndex`
  - [ ] `PhotoIndexItem`
  - [ ] `PhotoDetail`

### Phase 5: Start Styling (0.5 days, W2 M 12pm)

**Objective:** Existing pages (including signup/signin) will look good.

- [ ] create a basic style guide
- [ ] position elements on the page
- [ ] add basic colors & styles

### Phase 6: Follows (1.5 day, W2 W 6pm)

**Objective:** User has many followers and a followee belongs to many users.

- [ ] create `Follow` model
- build out API, Flux loop, and components for:
  - [ ] creating followee/follower associations
  - [ ] implement follows component, building out the flux loop as needed
    - [ ] `FollowsIndex`
  - [ ] display followers on profile page
- Use CSS to style new views

### Phase 7: Home Feed (1 day, W2 Th 6pm)

**Objective:** Display all photos uploaded by users followed by the current user.

- [ ] create a photo index based off the `Follows` join table.
- [ ] implement photo components
  - [ ] `PhotosIndex`
  - [ ] `PhotoIndexItem`
  - [ ] `PhotoDetail`

### Phase 8: Styling Cleanup and Seeding (1 day, W2 F 6pm)

**objective:** Make the site feel more cohesive and awesome.

- [ ] Get feedback on my UI from others
- [ ] Refactor HTML classes & CSS rules
- [ ] Add modals, transitions, and other styling flourishes.

### Bonus Features (TBD)
- [ ] Tags
- [ ] Search
- [ ] Discover
- [ ] Notifications
- [ ] Comments
- [ ] Likes

[phase-one]: docs/phases/phase1.md
[phase-two]: docs/phases/phase2.md
[phase-three]: docs/phases/phase3.md
[phase-four]: docs/phases/phase4.md
[phase-five]: docs/phases/phase5.md
