# OER-BE
This server is hosted at: https://oer-bookr.herokuapp.com

## Dependencies
- dependencies:
    "axios": "^0.19.0",
    "bcryptjs": "^2.4.3",
    "cors": "^2.8.5",
    "express": "^4.17.1",
    "helmet": "^3.20.0",
    "jsonwebtoken": "^8.5.1",
    "knex": "^0.19.2",
    "knex-cleaner": "^1.3.0",
    "pg": "^7.12.1",
    "sqlite3": "^4.1.0"

- devDependencies
    "cross-env": "^5.2.0",
    "jest": "^24.9.0",
    "nodemon": "^1.19.1",
    "supertest": "^4.0.2"


## Endpoints
- [/api/auth](#/api/auth)
- [/api/books](#/api/books)
- [/api/reviews](#/api/reviews)
- [/api/users](#/api/users)
- [/api/wishlist](#/api/wishlist)

  ### /api/auth<a name="/api/auth"></a>
  | Method | Endpoint | Requires | Returns | Description |
  | ------ |:--------:|:--------:|:-----------:| -------:|
  | POST   | /login    | username, password | message: 'You are logged in', token, user_id | Used to login |
  | POST   | /register | name, username, password | 201 | Used to register |

  ### /api/books<a name="/api/books"></a>
  | Method | Endpoint | Requires | Returns | Description |
  | ------ |:--------:|:--------:|:-----------:| -------:|
  | GET    | /    | nothing | Array of all books | Used to get all books |
  | GET    | /:id | id | Single book | Get a single book |
  | POST   | /    | title, publisher, license, authors | New book | Adds a new book |
  | PUT    | /:id | id, title, publisher, license | Updated book | Updates an existing book |
  | DELETE | /:id | id | 204 | Deletes an existing book |
    - #### Data Structure
    ```javascript
     {
    "id": 1,
    "title": "Prealgebra",
    "publisher": "OpenStax",
    "license": "License v4.0",
    "access_link": "https://openstax.org/details/books/prealgebra",
    "thumbnail": "https://d3bxy9euw4e147.cloudfront.net/oscms-prodcms/media/documents/prealgebra_1.svg",
    "description": "Prealgebra is designed to meet scope and sequence requirements for a one-semester prealgebra course. The book’s organization makes it easy to adapt to a variety of course syllabi. The text introduces the fundamental concepts of algebra while addressing the needs of students with diverse backgrounds and learning styles. Each topic builds upon previously developed material to demonstrate the cohesiveness and structure of mathematics.",
    "tag": "Math",
    "reviews": [
      {
        "id": 1,
        "review": "Very detailed and thorough, the explanations in this book helped me understand JS. Finding this resource was like taking a breath of fresh air.",
        "stars": 5,
        "username": "admin",
        "name": "Henry Blevins"
      }
    ],
    "authors": [
      {
        "id": 1,
        "name": "Lynn Marecek"
      },
      {
        "id": 2,
        "name": "MaryAnne Anthony-Smith"
      }
    ],
    "stars": 5
  }
    ```

  ### /api/reviews<a name="/api/reviews"></a>
  | Method | Endpoint | Requires | Returns | Description |
  | ------ |:--------:|:--------:|:-----------:| -------:|
  | GET    | /    | nothing | Array of all reviews | Used to get all reviews |
  | POST   | /    | review, reviewer_id, book_id, stars | 201 | Adds a new review |
  | PUT    | /:id | id, review, reviewer_id, book_id, stars | Updated review | Updates an existing review |
  | DELETE | /:id | id | 204 | Deletes an existing review |
    - #### Data Structure
    ```javascript
    {
      id: 0,
      review: "",
      stars: 3,
      reviewer_id: 1,
      book_id: 2,
    }
    ```

  ### /api/users<a name="/api/users"></a>
  | Method | Endpoint | Requires | Returns | Description |
  | ------ |:--------:|:--------:|:-----------:| -------:|
  | GET    | /    | nothing | Array of all users | Used to get all users |
  | GET | /:id | id | Single user | Get a single user with its wishlist |
    - ### Data Structure
    ```javascript
    {
      id: 0,
      name: "John Doe",
      username: "jdoe1",
    }
    ```

  ### /api/wishlist<a name="/api/wishlist"></a>
  | Method | Endpoint | Requires | Returns | Description |
  | ------ |:--------:|:--------:|:-----------:| -------:|
  | GET    | /    | nothing     | Array of all users and their wishlist | Used to get all wishlists |
  | POST   | /    | book_id, user_id | 201 | Adds a new item |
  | DELETE | /:id | id | 204 | Deletes an existing item |
    - ### Data Structure
        ```javascript
         {
        id: 1,
        book_id: 1,
        user_id: 1
    }
        ```