var cheerio = require('cheerio');
var request = require('request');
var book = require('./book');
var fs = require('fs');

let books = []
class ScrapeService {
  static writeToCsv() {
    var writeStream = fs.createWriteStream('books.csv');
    writeStream.on('error', function (err) {
      if (err) {
        console.log('Some error occured - file either not saved or corrupted file saved.'+err.toString());
      }
    });
    books.forEach(function (book) { writeStream.write(book.toCsv()); });
    writeStream.end();
    console.log("App finished executing. books.csv saved");
  }
  static scrapeToCsv(baseUrl,startPageNumber,endPageNum) {
    let parsedBook = this.scrape(baseUrl,startPageNumber,endPageNum, this.scrape,this.writeToCsv);
  }

  static scrape(baseUrl,currentPage,endPageNum, scrapeCallBack,writeFileCallback) {

    let targetUrl = baseUrl + currentPage.toString();
    console.log("Starting Scrape for: "+targetUrl);
    request(targetUrl, function (error, response, html) {
      if (!error) {
        let $ = cheerio.load(html);
        $('tr').each(function () {
          let rawTitle = $(this).find('.bookTitle').first().text();
          // minirating
          let rawMiniRatings = $(this).find('.minirating').first().text();
          // come back here, add to array
          books.push(book.Book.formatTextIntoBook(rawTitle, rawMiniRatings, true));

        });
        // Make sure the callback is a function​
        if (currentPage < endPageNum ) {
          //wait 10 seconds before loading next page, to appear less suspicious 
          var start = new Date().getTime();
          var end = start;
          while(end < start + 10000) {
            end = new Date().getTime();
         }
          // scrape the next page
          scrapeCallBack(baseUrl,currentPage+1,endPageNum, scrapeCallBack,writeFileCallback);
        }
        if (currentPage === endPageNum) {
          writeFileCallback();
        }
      }
      if(error)
      {
        console.log('Some error occured - unable to load website.');
      }
    });
  }
}

exports.ScrapeService = ScrapeService;