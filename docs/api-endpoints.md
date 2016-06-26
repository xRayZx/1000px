# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

### Users

- `GET /users/new`
- `POST /users`
- `PATCH /users`

### Session

- `GET /session/new`
- `POST /session`
- `DELETE /session`

## JSON API

### Photos

- `GET /api/photos`
  - Photos index/search
  - accepts `tag_name` query param to list photos by tag
- `POST /api/photos`
- `GET /api/photos/:id`
- `PATCH /api/photos/:id`
- `DELETE /api/photos/:id`

### Follows

- `GET /api/follows`
- `POST /api/follows`
- `DELETE /api/follows/:followid`

### Likes

- `GET /api/photos/:id/likes`
- `POST /api/photos/:id/likes`
- `DELETE /api/likes/:likeid`

### Tags

- A photo's tags will be included in the photo show template
- `GET /api/tags`
  - includes query param for typeahead suggestions
- `POST /api/photos/:photo_id/tags`: add tag to photo by name
  - if photo doesn't already exist, it will be created
- `DELETE /api/photos/:photo_id/tags/:tag_name`: remove tag from photo by name
