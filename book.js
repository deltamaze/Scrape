class Book {
  constructor(title,rating,numOfReviews) {
    this.title = title;
    this.rating = rating;
    this.numOfReviews = numOfReviews;
  }
  toCsv(){
    return this.title + ', '+this.rating + ', '+this.numOfReviews + '\r\n';
  }
  static formatTextIntoBook (title,miniRatings,removeCommas =false)
  {
      // .trim() remove any leading trailing spaces
      // .replace() remove comma's as to not interfere with csv output
      
      title = title.trim();
      
      miniRatings = miniRatings.trim();
      let rating = miniRatings.split("avg")[0].trim();
      let numOfReviews = miniRatings.split("—")[1].split("ratings")[0].trim();
      if(removeCommas)
      {
        title = title.replace(/,/g,'') ;
        numOfReviews = numOfReviews.replace(/,/g,'') ;
      }
      return new Book(title,rating,numOfReviews);
  }
}
exports.Book = Book;