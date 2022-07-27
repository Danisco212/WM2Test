function run() {
    document.addEventListener('DOMContentLoaded', () => {
        const link = document.querySelector('link[rel="monetization"]') ||
            document.createElement("link");
        link.addEventListener('load', handleLoad)
        link.addEventListener('monetization', handleMonetization)
    })
}

function handleMonetization(event) {
    addProgress("Payment sent...")
    const { amount, assetCode, assetScale } = event;
    try {
        addProgress(`Browser sent ${assetCode}${amount / (10 * assetScale)}.`);
    } catch (error) {
        addProgress(error)
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