# Flux Cycles

Flux loops are organized by data type. Under each data type, there may
be sub-categories, and each action is listed with the sequence of events
that result from its invocation, ending with the API or store. Finally,
store listeners are listed at the end.

You should be able to use this document trace an **action** starting
with where it was invoked, through the **API**/**store** involved, and
finally to the **components** that update as a result. This is important
because once you start implementing your flux loops, that's precisely
what you'll need to do.


## Photo Cycles

### Photos API Request Actions

* `fetchAllPhotos`
  0. invoked from `PhotosIndex` `didMount`/`willReceiveProps`
  0. `GET /api/photos` is called.
  0. `receiveAllPhotos` is set as the callback.

* `uploadPhoto`
  0. invoked from upload button `onClick`
  0. `POST /api/photos` is called.
  0. `receiveSinglePhoto` is set as the callback.

* `fetchSinglePhoto`
  0. invoked from `PhotoDetail` `didMount`/`willReceiveProps`
  0. `GET /api/photos/:id` is called.
  0. `receiveSinglePhoto` is set as the callback.

* `updatePhoto`
  0. invoked from `PhotoForm` `onSubmit`
  0. `POST /api/notes` is called.
  0. `receiveSinglePhoto` is set as the callback.

* `destroyPhoto`
  0. invoked from delete photo button `onClick`
  0. `DELETE /api/photos/:id` is called.
  0. `removePhoto` is set as the callback.

### Photos API Response Actions

* `receiveAllPhotos`
  0. invoked from an API callback.
  0. `Photo` store updates `_photos` and emits change.

* `receiveSinglePhoto`
  0. invoked from an API callback.
  0. `Photo` store updates `_photos[id]` and emits change.

* `removePhoto`
  0. invoked from an API callback.
  0. `Photo` store removes `_photos[id]` and emits change.

### Store Listeners

* `PhotosIndex` component listens to `Photo` store.
* `PhotoDetail` component listens to `Photo` store.


## Users Cycles

### Users API Request Actions

* `fetchAllUsers`
  0. invoked from `UsersIndex` `didMount`/`willReceiveProps`
  0. `GET /api/users` is called.
  0. `receiveAllUsers` is set as the callback.

* `fetchSingleUser`
  0. invoked from `ProfilePage` `didMount`/`willReceiveProps`
  0. `GET /api/user/:id` is called.
  0. `receiveSingleUser` is set as the callback.

* `updateUser`
  0. invoked from `ProfileEditForm` `onSubmit`
  0. `POST /api/user` is called.
  0. `receiveSingleUser` is set as the callback.

### Users API Response Actions

* `receiveAllUsers`
  0. invoked from an API callback.
  0. `User` store updates `_users` and emits change.

* `receiveSingleUser`
  0. invoked from an API callback.
  0. `User` store updates `_users[id]` and emits change.

### Store Listeners

* `UsersIndex` component listens to `User` store.
