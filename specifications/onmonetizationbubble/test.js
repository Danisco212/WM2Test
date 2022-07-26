function sayThanks(number) {
    addProgress('Thanks for your support (asset #' + number + ')')
}

function run() {
    // document.addEventListener('DOMContentLoaded', () => {
        const link = document.querySelector('link[rel="monetization"]') ||
            document.createElement("link");
        if (link.relList.supports("monetization")) {
            addProgress("link tag found")
            addProgress("Test 1 passed")
            link.addEventListener('load', handleLoad)
            document.querySelector("#title-header").addEventListener('monetization', sayThanks)
        } else {
            addProgress("link tag not found")
            addProgress("Test 1 failed")
        }
    // })
}

function showError(number){
    addProgress('Unable to connect to link tag number '+ number)
}

function handleLoad(event) {
    addProgress('Connection established...')
    addProgress("Payout started..")
}

function addProgress(content) {
    let progressText = document.createElement('p')
    progressText.innerHTML = content
    document.querySelector('body').appendChild(progressText)
}

window.addEventListener('load', run)