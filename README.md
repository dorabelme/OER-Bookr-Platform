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
  | PUT    | /:id | id, title, publisher, license | Updated book | Updates an existing book |
  | DELETE | /:id | id | 204 | Deletes an existing book |
    - #### Data Structure
    ```javascript
    {
      "id":1,
      "title":"Eloquent JavaScript, 3rd Edition: A Modern Introduction to Programming",
      "publisher":"William Pollock",
      "license":"",
      "access_link":"https://www.amazon.com/Eloquent-JavaScript-3rd-Introduction-Programming/dp/1593279507/ref=sr_1_5?crid=2WUA5IJAH5DLY&keywords=books+javascript&qid=1569177402&sprefix=books+javasc%2Caps%2C132&sr=8-5","thumbnail":"../../assets/eloquent_thumbnail.jpeg",
      "description":null,
      "reviews":[
        {
          "id":1,
          "review":"Very detailed and thorough, the explanations in this book helped me understand JS. Finding this resource was like taking a breath of fresh air.","stars":5
        }
      ],
      "authors":[
        {
          "id":1,
          "name":"Marijn Haverbeke"
        }
      ],
      "stars":5
    }
    ```

  ### /api/reviews<a name="/api/reviews"></a>
  | Method | Endpoint | Requires | Returns | Description |
  | ------ |:--------:|:--------:|:-----------:| -------:|
  | GET    | /    | nothing | Array of all reviews | Used to get all reviews |
  | POST   | /    | review, reviewer_id, book_id | New review | Adds a new review |
  | PUT    | /:id | id, review, reviewer_id, book_id | Updated review | Updates an existing review |
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

