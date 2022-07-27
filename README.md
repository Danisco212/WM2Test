# WM2 Manual Tests for new specification
General test for the WM2 new specifiation document.

## Description
This repo is created to test the specifications listed in the PR 
PR: https://github.com/WICG/webmonetization/pull/193
Specification: https://webmonetization-preview.netlify.app/specification.html

### Notes
1. The payment pointer is ripped from https://payment-pointers.herokuapp.com/uphold/production just for the purpose of testing.

2. These tests would not work without the coil extension

## Steps
1. For chrome, download the extension from https://chrome.google.com/webstore/detail/coildev/hcohoecolgmlofifjaobjhidpoaciknp. For firefox, download the addon from https://addons.mozilla.org/en-GB/firefox/addon/coilwm2preview/

2. In [specifications](/specifications/) select any of the options and run index.html in the browser to run the test.

3. The test result will be printed in the body of the webpage.

## Tests
1. link.relList.supports('monetization') should work at any point in document ready state
2. onerror event should be fired
3. onload event should be fired
4. onmonetization event should be fired on the link tag
5. onmonetization event should be fired on any html tag on the webpage
6. onmonetization event fired (Event bubbling)
7. link tag in body
8. link tag injected after DOM loaded
9. remove link tag while payout is happening
10. Restrict payment pointer url with CSP