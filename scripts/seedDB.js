const mongoose = require("mongoose");
const db = require("../models");

// Set up promises with mongoose
mongoose.Promise = global.Promise;
// Connect to the Mongo DB
mongoose.connect( process.env.MONGODB_URI || "mongodb://localhost/nytreact",  {
    useMongoClient: true
  }
);

const articleSeed = [
  {
    title: "Title 1",
    date: new Date(Date.now()),
    url: 'http://www.yahoo.com'
  },
  {
    title: "Title 2",
    author: "William Golding",
    url: 'http://www.yahoo.com'
  },
  {
    title: "Title 3",
    date: new Date(Date.now()),
    url: 'http://www.yahoo.com'
  }
];

db.Article
  .remove({})
  .then(() => db.Article.collection.insertMany(articleSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });