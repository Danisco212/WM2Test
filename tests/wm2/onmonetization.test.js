const puppeteer = require('puppeteer');

describe('WM2 onmonetization test', () => {
   let browser;
  it('should launch browser', async () => {
    browser = await puppeteer.launch({headless: false, slowMo: 500});
    const page = await browser.newPage();
    await page.goto('http://localhost:5001');
      
  })

  it('should fire onmonetization callback', async () => {
    const page = await browser.newPage();
    await page.goto('http://localhost:5001/onmonetization')

    await page.evaluate(() => {
        const link = document.querySelector('link[rel="monetization"]');
        if(!link){
            throw "monetization link tag does not exist on this webpage"
        }
        link.addEventListener("monetization", event => {
            // See how much was sent and in what currency
            const { amount, assetCode, assetScale } = event;
            if(typeof amount !== 'bigint'){
                throw "The typeof amount should be Bigint"
            }
        });
    })

  })

  it('should close the browser', async () => {
    await browser.close();
  })
})