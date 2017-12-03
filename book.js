class Book {
  constructor(title,rating,numOfReviews) {
    this.title = title;
    this.rating = rating;
    this.numOfReviews = numOfReviews;
  }
  static formatTextIntoBook (title,miniRatings,removeCommasFromTitle =false)
  {
      // .trim() remove any leading trailing spaces
      // .replace() remove comma's as to not interfere with csv output
      
      title = title.trim();
      if(removeCommasFromTitle)
      {
        title = title.replace(/,/g,'') ;
      }
      miniRatings = miniRatings.trim();
      let rating = miniRatings.split("avg")[0].trim();
      let numOfReviews = miniRatings.split("—")[1].split("ratings")[0].trim();
      return new Book(title,rating,numOfReviews);
  }
}
exports.Book = Book;