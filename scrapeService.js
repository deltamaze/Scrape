var cheerio = require('cheerio');
var request = require('request');
var book = require('./book');
var fs = require('fs');

class ScrapeService {
  static scrapeToCsv(targetUrl) {
    let parsedBook = this.scrape(targetUrl);
  }
  static scrape(targetUrl) {
    console.log(targetUrl);
    request(targetUrl, function (error, response, html) {
      if (!error) {
        let $ = cheerio.load(html);
        $('tr').each(function () {
          let rawTitle = $(this).find('.bookTitle').first().text();
          // minirating
          let rawMiniRatings = $(this).find('.minirating').first().text();
          // come back here, add to array
          return book.Book.formatTextIntoBook(rawTitle, rawMiniRatings, true);

        });
      }
    });
  }
}

exports.ScrapeService = ScrapeService;