var ss = require('./scrapeService');

const targetUrl = `https://www.goodreads.com/list/show/1.Best_Books_Ever?page=`;
const scrapeToPageNumber = 100;
ss.ScrapeService.scrapeToCsv(`https://www.goodreads.com/list/show/1.Best_Books_Ever?page=`,scrapeToPageNumber);



