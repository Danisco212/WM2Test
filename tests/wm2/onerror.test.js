const puppeteer = require('puppeteer');

describe('WM2 onerror test', () => {
   let browser;
   const EXTENSION_PATH = '../../dist/'
  it('should launch browser', async () => {
    // browser = await puppeteer.launch({headless: false, slowMo: 100, args: [
    //   `--disable-extensions-except=${EXTENSION_PATH}`,
    //   `--load-extension=${EXTENSION_PATH}`
    // ]});
    browser = await puppeteer.launch({headless: false, slowMo: 100});
    const page = await browser.newPage();
    await page.goto('http://localhost:5001');
      
  })

  test('should fire error callback', async () => {
    const page = await browser.newPage();
    await page.goto('http://localhost:5001/onerror')

    const errorCallback = error => {
      console.log("there was an error in payment", error)
    }

    await page.evaluate(() => {
        const link = document.querySelector('link[rel="monetization"]');
        if(!link){
            throw "monetization link tag does not exist on this webpage"
        }
        link.addEventListener("error", errorCallback)
    })

    setTimeout(() => {
      expect(errorCallback).toHaveBeenCalled()
    }, 2000)
  })

  it('should fire error callback', async () => {
    const page = await browser.newPage();
    await page.goto('http://localhost:5001/onerror')

    await page.evaluate(() => {
        const link = document.querySelector('link[rel="monetization"]');
        if(!link){
            throw "monetization link tag does not exist on this webpage"
        }
        const errorCallback = error => {
          console.log("there was an error in payment", error)
        }
        link.addEventListener("error", errorCallback)
    })

  })

  it('should close the browser', async () => {
    await browser.close();
  })
})