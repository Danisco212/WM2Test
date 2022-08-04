function run(){
    const link = document.querySelector('link[rel="bitcoin"]') ||
            document.createElement("link");
    link.addEventListener('load', handleLoad)
    link.addEventListener('monetization', handleMonetization)

    setTimeout(() => {
        changeRel();
    }, 3000)
}

function changeRel () {
    const link = document.querySelector('link[rel="bitcoin"]') ||
            document.createElement("link");
    link.rel= "monetization"
    link.addEventListener('load', handleLoad)
    link.addEventListener('monetization', handleMonetization)
}

function handleMonetization(event){
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