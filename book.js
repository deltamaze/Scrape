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
      
      let numOfReviews = miniRatings.split("—")[1].split("ratings")[0].trim();
      // for some reason, if a rating is exactly x.0 
      // it triggers tooltip text, which messed with how string is parsed.
      let rating = miniRatings.split("avg")[0];
      rating = rating.replace('did not like it','') ;
      rating = rating.replace('it was ok','') ;
      rating = rating.replace('really liked it','') ;
      rating = rating.replace('liked it','') ;
      rating = rating.replace('it was amazing','') ;
      rating = rating.trim();
      

      if(removeCommas)
      {
        title = title.replace(/,/g,'') ;
        numOfReviews = numOfReviews.replace(/,/g,'') ;
      }
      return new Book(title,rating,numOfReviews);
  }
}
exports.Book = Book;
