// Static properties and methods
// We can also assign a method to the class as a whole. Such methods are called static.

class Article {
  constructor(title, date) {
    this.title = title;
    this.date = date;
  }

  static compare(articleA, articleB) {
    return articleA.date - articleB.date;
  }
}

// usage
let articles = [
  new Article("HTML", new Date(2019, 1, 1)),
  new Article("CSS", new Date(2019, 2, 1)),
  new Article("JavaScript", new Date(2019, 11, 1)),
];

console.log(articles.sort(Article.compare));

console.log(articles[0].title);

// static methods are used to implement functions that belong to the class as a whole, but not to any particular object of it.


// Class checking: "instanceof"