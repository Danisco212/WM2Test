function sayThanks() {
    addProgress('Thanks for your support')
}

function run() {
    const link = document.querySelector('link[rel="monetization"]') ||
        document.createElement("link");
    if (link.relList.supports("monetization")) {
        addProgress("link tag found")
        addProgress("Test passed")
        link.addEventListener('load', handleLoad)
    } else {
        addProgress("link tag not found")
        addProgress("Test failed")
    }
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

run();