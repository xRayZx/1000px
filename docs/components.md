## Component Hierarchy

**Bolded** components are associated with routes.

(:exclamation: Remember, the bolded components are created by their
associated routes, so the nesting of your bolded components must
_**exactly**_ match the nesting of your routes.)

* **App**
  * **Landing**
    * PhotoIndex
      * PhotoIndexItem
  * **HomeFeed**
    * PhotoIndex
      * PhotoIndexItem
  * **ProfilePage**
    * ProfileEditForm
    * Follows
    * **PhotoIndex**
      * PhotoIndexItem
        * **PhotoDetail**
          * PhotoLikes
          * PhotoComments
            * PhotoCommentsIndex
              * PhotoCommentsForm
              * PhotoCommentsDetail

### Bonus
* **App**
  * Search
  * SearchIndex
  * Tags

## Routes

* **component:** `App` **path:** `/`
  * **component:** `ProfilePage` **path:** `users/:userid`
    * **component:** `PhotoIndex` **path:** `users/:userid/photos`
      * **component:** `PhotoDetail` **path:** `photo/:photoId`
