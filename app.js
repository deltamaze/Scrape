var ss = require('./scrapeService');

const baseUrl = `https://www.goodreads.com/list/show/1.Best_Books_Ever?page=`;
const startingPageNumber = 1;
const maxPageNumber = 1;
let currentPage = startingPageNumber;
while (currentPage <= maxPageNumber) {
  const targetUrl = baseUrl + currentPage.toString();
  ss.ScrapeService.scrapeToCsv(targetUrl);
  currentPage++;
}

