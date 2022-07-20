const puppeteer = require('puppeteer');

describe('WM2 onload test', () => {
   let browser;
  it('should launch browser', async () => {
    browser = await puppeteer.launch({headless: false, slowMo: 100});
    const page = await browser.newPage();
    await page.goto('http://localhost:5001');
      
  })

  it('should fire load callback', async () => {
    const page = await browser.newPage();
    await page.goto('http://localhost:5001/onload')

    await page.evaluate(() => {
        const link = document.querySelector('link[rel="monetization"]');
        if(!link){
            throw "monetization link tag does not exist on this webpage"
        }
        link.addEventListener("load", error => {
            console.log("Connection successfully established", error)
        })
    })

  })

  it('should close the browser', async () => {
    await browser.close();
  })
})