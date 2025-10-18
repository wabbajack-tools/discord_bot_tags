const fs = require('fs');


const readMeFile = "./README.md";

const readOnly = true;

function appendReadMe(line){
    fs.appendFile(readMeFile, line, (err) => {
        if (err) {
            console.log(err);
        }
    });
}

function appendFile(filePath,line){
    fs.appendFile(filePath, line, (err) => {
        if (err) {
            console.log(err);
        }
    });
}

function extractData(line){
    line = line.trim();
    if (line.startsWith("content:")) {
        const url = line.substring(8).trim();
        const href = url.replace(/^(https:\/\/raw\.githubusercontent\.com\/wabbajack-tools\/discord_bot_tags\/(refs\/heads\/main|main)\/)/, '');
        return href;
    }
    if (line.startsWith("image_url:")) {
        const url = line.substring(10).trim();
        const href = url.replace(/^(https:\/\/raw\.githubusercontent\.com\/wabbajack-tools\/discord_bot_tags\/(refs\/heads\/main|main)\/)/, '');
        return href;
    }
    return null;
}

function mdUrl(title,url){
    return `[${title}](${url})`;
}

function mdImage(alt_text,url){
    return `\n![${alt_text}](${url})`;
}

function appendImageAndLog(href,image){
    imageLine = mdImage("image",image);
    console.log(`Adding:\n${imageLine}\nTo:${href}`);
    appendFile(href,imageLine);
}

function fetchYAMLAndProcess(path) {
    try {
        const text = fs.readFileSync(path);
        const lines = text.toString().split('\n');
        let title = "";
        let href = null;
        let image = null;

        lines.forEach(line => {
            if (line.trim().startsWith('#')) {
                const commentText = line.substring(1).trim();
                if (!readOnly) appendReadMe(`\n### ${commentText}\n\n`);
            } else if (line.includes(':') && !line.startsWith(" ")) {
                title = line.trim().replace(":","");
                href = null;
                image = null;     
            } else if (line.includes('content:')) {
                href = extractData(line);
                if (!readOnly) appendReadMe(`${mdUrl(title,href)}  \n`);
                if (href && image){
                    appendImageAndLog(href,image);
                }
            } else if (line.includes('image_url:')) {
                image = extractData(line);
                if (href && image){
                    appendImageAndLog(href,image);
                }
            }
        });
    } catch (error) {
        console.error('Error fetching or processing the YAML file:', error);
    }
}

fetchYAMLAndProcess('./tags.yaml');
