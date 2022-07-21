function sayThanks() {
    addProgress('Thanks for your support')
}

function run() {
    const link = document.querySelector('link[rel="monetization"]') ||
        document.createElement("link");
    if (link.relList.supports("monetization")) {
        // without the .contains logic it fails even if there is a monetization link, so the check in the documentation needs to be reworked
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
    // note: it doesnt specify what the error actually is, that might need to be changed
}

function addProgress(content) {
    let progressText = document.createElement('p')
    progressText.innerHTML = content
    document.querySelector('body').appendChild(progressText)
}

run();