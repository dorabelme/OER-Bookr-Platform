# OER-BE
This server is hosted at: https://oer-bookr.herokuapp.com

## Dependencies

## Endpoints
- [/api/auth](#/api/auth)
- [/api/books](#/api/books)
- [/api/reviews](#/api/reviews)
- [/api/users](#/api/users)
- [/api/wishlist](#/api/wishlist)

  ### /api/auth<a name="/api/auth"></a>
  | Method | Endpoint | Requires | Returns | Description |
  | ------ |:--------:|:--------:|:-----------:| -------:|
  | POST   | /login    | username, password | message: 'You are logged in', token | Used to login |
  | POST   | /register | name, username, password | 201 | Used to register |

  ### /api/books<a name="/api/books"></a>
  | Method | Endpoint | Requires | Returns | Description |
  | ------ |:--------:|:--------:|:-----------:| -------:|
  | GET    | /    | nothing | Array of all books | Used to get all books |
  | POST   | /    | title, publisher, license, authors | New book | Adds a new book |
  | PUT    | /:id | title, publisher, license | Updated book | Updates an existing book |
  | DELETE | /:id | id | 204 | Deletes an existing book |
    - #### Data Structure
    ```javascript
    {
      id: 0,
      title: "",
      publisher: "",
      license: "",
      access_link: "",
      thumbnail: "",
      description: "",
      tag: "",
   }
    ```

  ### /api/reviews<a name="/api/reviews"></a>
  | Method | Endpoint | Requires | Returns | Description |
  | ------ |:--------:|:--------:|:-----------:| -------:|
  | GET    | /    | nothing | Array of all reviews | Used to get all reviews |
  | POST   | /    | TBD | New review | Adds a new review |
  | PUT    | /:id | id | Updated review | Updates an existing review |
  | DELETE | /:id | id | 204 | Deletes an existing review |
    - #### Data Structure
    ```javascript
    {
      id: 0,
      review: "",
      stars: 3,
      reviewer_id: "",
      book_id: "",
    }
    ```

  ### /api/users<a name="/api/users"></a>
  | Method | Endpoint | Requires | Returns | Description |
  | ------ |:--------:|:--------:|:-----------:| -------:|
  | GET    | /    | nothing | Array of all users | Used to get all users |
  | GET | /:id | id | Single user | Get a single user |
    - ### Data Structure
    ```javascript
    {
      id: 0,
      name: "John Doe",
      username: "jdoe1",
      password: "BadPassword
    }
    ```

  ### /api/wishlist<a name="/api/wishlist"></a>
  | Method | Endpoint | Requires | Returns | Description |
  | ------ |:--------:|:--------:|:-----------:| -------:|
  | GET    | /:id     | id       | User wishlist | Used to a single users wishlist |

