const swaggerAutogen = require('swagger-autogen')()

const doc = {
  info: {
    title: 'Food API',
    description: 'Simple POS sytem API',
  },
  host: 'localhost:8000',
  schemes: ['http'],
  securityDefinitions: {
    apiKeyAuth: {
      type: 'apiKey',
      in: 'header', // can be 'header', 'query' or 'cookie'
      name: 'Authorization', // name of the header, query parameter or cookie
      description: 'Copy and paste token from data using "Berear token" using /auth/sign-up or /auth/login"'
    },
  },
  definitions: {
    LOG_IN: {
      $email: 'admin@mail.ru',
      $password: '123456'
    },
    SIGN_UP: {
      $email: 'admin@mail.ru',
      $password: '43678yrwiuehruweytr8y348',
      firstName: 'Admin',
      lastName: 'Admin',
      lang: 'uz',
      image: '',
      phone: '+998995558877',
      address: 'HelloCity',
    },
    BOOK: {
      $title: "The Adventures of Tom Sawyer",
      description: "The Adventures of Tom Sawyer is an 1876 novel by Mark Twain about a boy growing up along the Mississippi River. It is set in the 1840s in the town of St. Petersburg, ",
      $author: "60f0224792ce9f6d804c994f",
      country: "United States of America",
      files: "File",
      language: "English",
      link: "https://en.wikipedia.org/wiki/The_Adventures_of_Tom_Sawyer",
      pages: 274,
      year: 1876,
      rate: 4,
      price: 10.92,
      category: "classic | biography | science",
      isPublished: true,
    },
    BOOKID_RESPONSE: {
      "success": true,
      "payload": {
        "book": {
          "description": "The Adventures of Tom Sawyer is an 1876 novel by Mark Twain about a boy growing up along the Mississippi River. It is set in the 1840s in the town of St. Petersburg, which is based on Hannibal, Missouri, where Twain lived as a boy.In the novel, Tom Sawyer has several adventures, often with his friend Huckleberry Finn. Originally a commercial failure, the book ended up being the best selling of any of Twain's works during his lifetime. Though overshadowed by its sequel, Adventures of Huckleberry Finn, the book is considered by many to be a masterpiece of American literature. It was one of the first novels to be written on a typewriter",
          "country": "United States of America",
          "language": "English",
          "link": "https://en.wikipedia.org/wiki/The_Adventures_of_Tom_Sawyer",
          "pages": "274",
          "year": "1876",
          "views": 8,
          "rate": 4,
          "price": 10.92,
          "category": "classic",
          "isPublished": true,
          "updatedAt": "2021-07-16T06:03:41.046Z",
          "_id": "60f1213f7160764c30b0badc",
          "author": {
            "lastName": "Twain",
            "date_of_birth": "1835-01-01T00:00:00.000Z",
            "date_of_death": "1910-01-01T00:00:00.000Z",
            "_id": "60f0224792ce9f6d804c994f",
            "firstName": "Mark",
            "__v": 0
          },
          "title": "Tom Sawyer",
          "imageLink": "\\uploads\\qeEWzntk5mJaVHuN4z6hY.jpg",
          "pdfLink": "\\uploads\\qeEWzntk5mJaVHuN4z6hY.jpg",
          "__v": 0
        },
        "comment": [
          {
            "createdAt": "2021-07-19T11:33:05.081Z",
            "_id": "60f563ac6d822a2968084124",
            "text": "Mark twainni kitoblarini sevib o'qiyman",
            "bookId": "60f1213f7160764c30b0badc",
            "user": {
              "firstName": "Sanjarbek",
              "lastName": "Abduraimov"
            },
            "__v": 0
          }
        ]
      }
    },
    BOOK_RESPONSE: {
      success: true,
      payload: {
        description: "The Adventures of Tom Sawyer is an 1876 novel by Mark Twain about a boy growing up along the Mississippi River.It is set in the 1840s in the town of St.Petersburg, which is based on Hannibal, Missouri, where Twain lived as a boy.In the novel, Tom Sawyer has several adventures, often with his friend Huckleberry Finn.Originally a commercial failure, the book ended up being the best selling of any of Twain's works during his lifetime. Though overshadowed by its sequel, Adventures of Huckleberry Finn, the book is considered by many to be a masterpiece of American literature. It was one of the first novels to be written on a typewriter",
        country: "United States of America",
        language: "English",
        link: "https://en.wikipedia.org/wiki/The_Adventures_of_Tom_Sawyer",
        pages: 274,
        year: 1876,
        views: 0,
        rate: 4,
        price: 10.92,
        category: "classic",
        isPublished: true,
        updatedAt: "2021-07-20T12:08:45.465Z",
        _id: "60f6d4c9834f817ad01c9b14",
        author: {
          lastName: "Twain",
          date_of_birth: "1835-01-01T00:00:00.000Z",
          date_of_death: "1910-01-01T00:00:00.000Z",
          updatedAt: "2021-07-15T11:55:39.590Z",
          _id: "60f0224792ce9f6d804c994f",
          firstName: "Mark",
          __v: 0
        },
        title: "The Adventures of Tom Sawyer",
        imageLink: "\\uploads\\RBGQ9C3-u26J_E5EtrSXN.jpg",
        pdfLink: "\\uploads\\RBGQ9C3-u26J_E5EtrSXN.pdf",
      }
    },
    AUTH_RESPONSE: {
      token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGVkYTFkZmNjMDAyZTY2OGM1ZDQ5NjMiLCJpYXQiOjE2MjYxODYyMDcsImV4cCI6MTYyNjIyMjIwN30.whBHL9YH-TYUHwAySlexSxkQKCAKxI6g603qwweZuEQ",
      user: {
        email: 'admin@mail.ru',
        password: '43678yrwiuehruweytr8y348',
        firstName: 'Admin',
        lastName: 'Admin',
        lang: 'uz',
        image: '',
        phone: '+998995558877',
        address: 'HelloCity',
        createdAt: "2021-07-13T14:23:25.696Z",
        updatedAt: "2021-07-13T14:23:25.696Z",
        _id: "60eda1dfcc002e668c5d4963"
      },
      success: true
    },

    USER: {
      $email: 'admin@mail.ru',
      $password: '123456',
      firstName: '',
      lastName: '',
      lang: '',
      image: '',
      phone: '',
      address: ''
    },
    USER_RESPONSE: {
      "success": true,
      "user": {
        "firstName": "Sanjar",
        "lastName": "Abduraimov",
        "phone": "+998990134034",
        "shelf": [
          "60f1213f7160764c30b0badc"
        ],
        "lang": "uz",
        "image": "",
        "createdAt": "2021-07-14T11:14:17.118Z",
        "updatedAt": "2021-07-23T07:47:05.982Z",
        "isAdmin": false,
        "_id": "60eec7f0492070afeccc0c5c",
        "email": "sanjar@gmail.com",
        "__v": 0
      }
    },
    SHELF: { $bookId: "werfgnsbxjj65wd656" },
    SHELF_RESPONSE: {
      "success": true,
      "payload": {
        "description": "The Adventures of Tom Sawyer is an 1876 novel by Mark Twain about a boy growing up along the Mississippi River. It is set in the 1840s in the town of St. Petersburg, which is based on Hannibal, Missouri, where Twain lived as a boy.In the novel, Tom Sawyer has several adventures, often with his friend Huckleberry Finn. Originally a commercial failure, the book ended up being the best selling of any of Twain's works during his lifetime. Though overshadowed by its sequel, Adventures of Huckleberry Finn, the book is considered by many to be a masterpiece of American literature. It was one of the first novels to be written on a typewriter",
        "country": "United States of America",
        "language": "English",
        "link": "https://en.wikipedia.org/wiki/The_Adventures_of_Tom_Sawyer",
        "pages": "274",
        "year": "1876",
        "views": 8,
        "rate": 4,
        "price": 10.92,
        "category": "classic",
        "isPublished": true,
        "isFeatured": false,
        "updatedAt": "2021-07-16T06:03:41.046Z",
        "_id": "60f1213f7160764c30b0badc",
        "author": {
          "lastName": "Twain",
          "date_of_birth": "1835-01-01T00:00:00.000Z",
          "date_of_death": "1910-01-01T00:00:00.000Z",
          "createdAt": "2021-07-15T11:55:39.590Z",
          "updatedAt": "2021-07-15T11:55:39.590Z",
          "_id": "60f0224792ce9f6d804c994f",
          "firstName": "Mark",
          "__v": 0
        },
        "title": "Tom Sawyer",
        "imageLink": "\\uploads\\qeEWzntk5mJaVHuN4z6hY.jpg",
        "__v": 0
      }
    },
    AUTHOR__BOOKS: {
      "success": true,
      "payload": [
        {
          "description": "The Adventures of Tom Sawyer is an 1876 novel by Mark Twain about a boy growing up along the Mississippi River. It is set in the 1840s in the town of St. Petersburg, which is based on Hannibal, Missouri, where Twain lived as a boy.In the novel, Tom Sawyer has several adventures, often with his friend Huckleberry Finn. Originally a commercial failure, the book ended up being the best selling of any of Twain's works during his lifetime. Though overshadowed by its sequel, Adventures of Huckleberry Finn, the book is considered by many to be a masterpiece of American literature. It was one of the first novels to be written on a typewriter",
          "country": "United States of America",
          "language": "English",
          "link": "https://en.wikipedia.org/wiki/The_Adventures_of_Tom_Sawyer",
          "pages": "274",
          "year": "1876",
          "views": 8,
          "rate": 4,
          "price": 10.92,
          "category": "classic",
          "isPublished": true,
          "isFeatured": false,
          "updatedAt": "2021-07-16T06:03:41.046Z",
          "_id": "60f1213f7160764c30b0badc",
          "author": {
            "lastName": "Twain",
            "date_of_birth": "1835-01-01T00:00:00.000Z",
            "date_of_death": "1910-01-01T00:00:00.000Z",
            "_id": "60f0224792ce9f6d804c994f",
            "firstName": "Mark",
            "__v": 0
          },
          "title": "Tom Sawyer",
          "imageLink": "\\uploads\\qeEWzntk5mJaVHuN4z6hY.jpg",
          "user": "60eec7f0492070afeccc0c5c",
          "__v": 0
        }
      ]
    },
    AUTHOR: {
      $firstName: 'William',
      $lastName: 'Shekspare',
      date_of_birth: '2021-07-13T14:23:25.696Z',
      date_of_death: '2021-07-13T14:23:25.696Z',
      createdAt: '2021-07-13T14:23:25.696Z',
      updatedAt: '2021-07-13T14:23:25.696Z',
      user: 'userId',
    },
    PAGINATION: {
      totalDocs: 8,
      limit: 10,
      totalPages: 1,
      page: 1,
      pagingCounter: 1,
      hasPrevPage: false,
      hasNextPage: false,
      prevPage: 1,
      nextPage: 3
    },
    COMMENT: {
      $text: "William Shakespeare kitoblarini sevib o'qiyman",
      $bookId: 's54s8jm659fih9hi56pk',
    },
    COMMENT_RESPONSE: {
      "success": true,
      "payload": {
        "createdAt": "2021-07-22T09:27:32.826Z",
        "_id": "60f9409d34b2e2e9e4249288",
        "text": "shu saviali drajada yozilgan kitob",
        "bookId": "60f1213f7160764c30b0badc",
        "user": "60eec8f63bb78ca298d2f341",
        "__v": 0
      }
    }
  }
}

const outputFile = './config/swagger_output.json';
const endpointsFiles = ['./routes/index'];

swaggerAutogen(outputFile, endpointsFiles, doc);