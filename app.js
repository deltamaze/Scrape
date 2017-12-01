class ScrapeService {
  static scrape(targetUrl){
    console.log(targetUrl);
    request(targetUrl, function (error, response, html) {
            if (!error) {
                let $ = cheerio.load(html);
                $('tr').each(function() {
                  let title = '';
                  let rating = 0;
                  let numOfReviews = 0;
                  console.log($( this ).find('.bookTitle').first().text());
                  // console.log($( this ).text());
                  // var data = $( this )//.children('.bookTitle');
                  //  console.log(data.text());
                    // const data = $(this).text();
                    // console.log(data);
                 
                });
            }
        });
  }
}
class Book {
  constructor(title,rating,numOfReviews) {
    this.title = title;
    this.rating = rating;
    this.numOfReviews = numOfReviews;
  }
}

var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');

const baseUrl = `https://www.goodreads.com/list/show/1.Best_Books_Ever?page=`;
const startingPageNumber = 1;
const maxPageNumber = 1;
let currentPage = startingPageNumber;
while (currentPage <= maxPageNumber) {
  const targetUrl = baseUrl + currentPage.toString();
  ScrapeService.scrape(targetUrl);
  currentPage++;
}

