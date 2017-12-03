class Book {
  static formatTextIntoBook (title,miniRatings)
  {
      title = title.trim()
      miniRatings = miniRatings.trim();
      console.log(title,miniRatings)
  }
  constructor(title,rating,numOfReviews) {
    this.title = title;
    this.rating = rating;
    this.numOfReviews = numOfReviews;
  }
  
}
exports.Book = Book;