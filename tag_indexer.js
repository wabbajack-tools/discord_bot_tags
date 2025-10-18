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
    if (line.startsWith('text:') || line.startsWith('image:')) {
        const url = line.substring(5).trim();
        const href = url.replace(/^(https:\/\/raw\.githubusercontent\.com\/wabbajack-tools\/discord_bot_tags\/(refs\/heads\/main|main)\/)/, '');
        return href;
    }
    return null;
}

function mdUrl(title,url){
    return `[${title}](${url})`;
}

function mdImage(alt_text,url){
    return `![${alt_text}](${url})`;
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
            } else if (line.includes('text:')) {
                href = extractData(line);
                if (!readOnly) appendReadMe(`${mdUrl(title,href)}  \n`);
            } else if (line.includes('image:')) {
                image = extractData(line);
                if (href && image){
                    
                }
            }
        });
    } catch (error) {
        console.error('Error fetching or processing the YAML file:', error);
    }
}

fetchYAMLAndProcess('./tags.yaml');
