// EDIT THIS FILE TO COMPLETE ASSIGNMENT QUESTION 1
import {test} from "@playwright/test"


const { chromium } = require("playwright");

async function sortHackerNewsArticles() {
  // launch browser
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();
  const fs = require('fs'); // Import the file system module

  // go to Hacker News
  await page.goto("https://news.ycombinator.com/newest");



  

    // Get the first 100 articles
    const articles = await page.$$eval('.athing', articles => articles.slice(0, 100));
  
    // Extract timestamps (assuming timestamps are present in a specific element)
    const timestamps = await page.$$eval('.athing .storylink .age', elements => elements.map(el => el.textContent));
  
    // Validate sorting (newest to oldest)
    let isSorted = true;
    for (let i = 1; i < timestamps.length; i++) {
      if (timestamps[i - 1] < timestamps[i]) {
        isSorted = false;
        break;
      }
    }
  
    if (isSorted) {
      console.log("The first 100 articles are sorted from newest to oldest!");

        // Save timestamps to a file
  try {
    fs.writeFileSync('why_qa_wolf.txt', timestamps.join('\n'), 'utf-8');
    console.log('Timestamps saved to playright.txt');
  } catch (err) {
    console.error('Error saving timestamps:', err);
  }
    } else {
      console.error("Sorting is incorrect. Articles are not in descending order.");
    }
  
    // Close browser resources
    await browser.close();


    test("Download files", async({page})=>{
await page.goto("http://")
const fileName= download[0].suggestedFilename()

await download[0].saveAs(fileName);

}
    }
  }
  
  sortHackerNewsArticles();


(async () => {
  await sortHackerNewsArticles();
})();
