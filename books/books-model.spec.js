const request = require('supertest');
const db = require('../database/dbConfig.js');
const Books = require('./books-model.js');


describe('books model', () => {
<<<<<<< HEAD
    beforeEach(async () => {
        await db('books').truncate();
    })

    describe('getBooks', () => {
        it('should return a empty array fron the books route', async () => {
            const books = await Books.getBooks();
            expect(books).toEqual([]);
        });
    });

    describe('getBooksExpanded', () => {

    });

    describe('getBooksById', () => {
        it('should return book at provided id', async () => {
            let testBook = {
                title: "The Guide",
                publisher: "opensatx",
                license: "n/a",
            }
            await Books.addBooks(testBook);

            let book = await Books.getBooksById(1);

            expect(book.id).toBe(1);
            expect(book.title).toBe("The Guide")
        });
    });

    describe('addBooks', () => {
        it('should add a book to db', async () => {
            let testBook = {
                title: "The Guide",
                publisher: "opensatx",
                license: "n/a",
            }
            await Books.addBooks(testBook);

            const books = await db('books');

            expect(books).toHaveLength(1);
        });

        it('should add provided book to db', async () => {
            let testBook = {
                title: "The Guide",
                publisher: "opensatx",
                license: "n/a",
            }
            let books = await Books.addBooks(testBook);
            expect(books.title).toBe("The Guide")

            testBook = {
                title: "The New Guide",
                publisher: "opensatx",
                license: "n/a",
            }
            books = await Books.addBooks(testBook);
            expect(books.title).toBe("The New Guide")
        });
    });

    describe('updateBooks', () => {
        it('should update a book at provided id', async () => {
            let testBook = {
                title: "The Guide",
                publisher: "opensatx",
                license: "n/a",
            }
            await Books.addBooks(testBook);

            let id = 1;
            let testChanges = {
                title: "The Updated Guide",
                publisher: "opensatx",
                license: "n/a",
            }
            const books = await Books.updateBooks(id, testChanges);

            expect(books.title).toBe("The Updated Guide");
        });
    });

    describe('removeBooks', () => {
        it('should remove a book at provided id', async () => {
            let testBook = {
                title: "The Guide",
                publisher: "opensatx",
                license: "n/a",
            }
            await Books.addBooks(testBook);

            let id = 1;
            await Books.removeBooks(id);

            const books = await db('books');
            expect(books).toEqual([]);
        });
    });
});
=======
  beforeEach(async () => {
    await db('books').truncate();
  })

  describe('getBooks', () => {
    it('should return a empty array fron the books route', async () => {
      const books = await Books.getBooks();
      expect(books).toEqual([]);
    });
  });

  describe('getBooksExpanded', () => {

  });

  describe('getBooksById', () => {
    it('should return book at provided id', async () => {
      let testBook = {
        title: "The Guide",
        publisher: "opensatx",
        license: "n/a",
      }
      await Books.addBooks(testBook);

      let book = await Books.getBooksById(1);

      expect(book.id).toBe(1);
      expect(book.title).toBe("The Guide")
    });
  });

  describe('addBooks', () => {
    it('should add a book to db', async () => {
      let testBook = {
        title: "The Guide",
        publisher: "opensatx",
        license: "n/a",
      }
      await Books.addBooks(testBook);

      const books = await db('books');

      expect(books).toHaveLength(1);
    });

    it('should add provided book to db', async () => {
      let testBook = {
        title: "The Guide",
        publisher: "opensatx",
        license: "n/a",
      }
      let books = await Books.addBooks(testBook);
      expect(books.title).toBe("The Guide")

      testBook = {
        title: "The New Guide",
        publisher: "opensatx",
        license: "n/a",
      }
      books = await Books.addBooks(testBook);
      expect(books.title).toBe("The New Guide")
    });
  });

  describe('updateBooks', () => {
    it('should update a book at provided id', async () => {
      let testBook = {
        title: "The Guide",
        publisher: "opensatx",
        license: "n/a",
      }
      await Books.addBooks(testBook);

      let id = 1;
      let testChanges = {
        title: "The Updated Guide",
        publisher: "opensatx",
        license: "n/a",
      }
      const books = await Books.updateBooks(id, testChanges);

      expect(books.title).toBe("The Updated Guide");
    });
  });

  describe('removeBooks', () => {
    it('should remove a book at provided id', async () => {
      let testBook = {
        title: "The Guide",
        publisher: "opensatx",
        license: "n/a",
      }
      await Books.addBooks(testBook);

      let id = 1;
      await Books.removeBooks(id);

      const books = await db('books');
      expect(books).toEqual([]);
    });
  });
});
>>>>>>> 02750341e5475e2838ab3981f31b2ed168071633
