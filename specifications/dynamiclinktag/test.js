function sayThanks(number) {
    addProgress('Thanks for your support (asset #' + number + ')')
}

function injectTag() {
    const link = document.createElement('link')
    link.href = 'https://ilp.uphold.com/6g88h2R66PN3'
    link.rel = 'monetization'
    document.body.appendChild(link)
}

function run() {
    injectTag()
    const link = document.querySelector('link[rel="monetization"]') ||
        document.createElement("link");
    if (link.relList.supports("monetization")) {
        addProgress("link tag found")
        addProgress("Test 1 passed")
        link.addEventListener('load', handleLoad)
    } else {
        addProgress("link tag not found")
        addProgress("Test 1 failed")
    }
}

function showError(number) {
    addProgress('Unable to connect to link tag number ' + number)
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