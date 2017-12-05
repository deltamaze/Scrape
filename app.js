var ss = require('./scrapeService');

const targetUrl = `https://www.goodreads.com/list/show/1.Best_Books_Ever?page=`;
const startPageNumber = 1;
const scrapeToPageNumber = 100;

ss.ScrapeService.scrapeToCsv(`https://www.goodreads.com/list/show/1.Best_Books_Ever?page=`,startPageNumber,scrapeToPageNumber);



