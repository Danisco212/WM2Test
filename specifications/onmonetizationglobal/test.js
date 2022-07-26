function run() {
    document.addEventListener('DOMContentLoaded', () => {
        const link = document.querySelector('link[rel="monetization"]') ||
            document.createElement("link");
            console.log(link.relList.supports("monetization"))
        if (link.relList.supports("monetization")) {
            addProgress("link tag found")
            addProgress("Test passed")
            document.querySelector('#title-header').addEventListener('monetization', handleMonetization)
        } else {
            addProgress("link tag not found")
            addProgress("Test failed")
        }
    })
}

function handleMonetization(event) {
    addProgress('Connection established...')
    addProgress("Payout started..")
}

function addProgress(content) {
    let progressText = document.createElement('p')
    progressText.innerHTML = content
    document.querySelector('body').appendChild(progressText)
}

run();