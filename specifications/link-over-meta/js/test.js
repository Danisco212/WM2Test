function addProgress(content) {
    let progressText = document.createElement('p')
    progressText.innerHTML = content
    document.querySelector('body').appendChild(progressText)
}

function run(timeBetween = 0) {
    addProgress("checking for link tag...")
    setTimeout(() => {
        const link = document.querySelector('link[rel="monetization"]') ||
            document.createElement("link");

        if (link.relList.supports("monetization") || link.relList.contains("monetization")) {
            // without the .contains logic it fails even if there is a monetization link, so the check in the documentation needs to be reworked
            addProgress("link tag found")
            setTimeout(() => {
                addProgress("Test passed")
            }, timeBetween / 2)
        } else {
            addProgress("link tag not found")
            setTimeout(() => {
                addProgress("Test failed")
            }, timeBetween / 2)
        }
    }, timeBetween);
}

run(2000);