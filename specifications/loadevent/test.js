function run(){
    const link = document.querySelector('link[rel="monetization"]') ||
            document.createElement("link");
    link.addEventListener('load', handleLoad)
}

function handleLoad(event) {
    addProgress('Connection established...')
    addProgress(JSON.stringify(event))
    // note: it doesnt specify what the error actually is, that might need to be changed
}

function addProgress(content) {
    let progressText = document.createElement('p')
    progressText.innerHTML = content
    document.querySelector('body').appendChild(progressText)
}

run();