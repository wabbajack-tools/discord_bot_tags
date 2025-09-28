function createCustomNode(html_tag,text){
  const node = document.createElement(html_tag);
  const textNode = document.createTextNode(text);
  node.appendChild(textNode);
  return node;
}

function extractHref(line){
    line = line.trim();
    if (line.startsWith('text:')) {
        const url = value.substring(5).trim();
        const href = url.replace(/^(https:\/\/raw\.githubusercontent\.com\/wabbajack-tools\/discord_bot_tags\/(refs\/heads\/main|main)\/)/, '');
        return href;
    }
    return null;
}

async function fetchYAMLAndProcess(url) {
    try {
        const response = await fetch(url);
        const text = await response.text();
        const lines = text.split('\n');
        let markdown_body = document.getElementsByClassName("markdown-body")[0];
        let title = "";
        let href = null;

        lines.forEach(line => {
            if (line.trim().startsWith('#')) {
                const commentText = line.substring(1).trim();
                markdown_body.appendChild(this.createNode("h3",commentText));
            } else if (line.includes(':') && !line.startsWith(" ")) {
                title = line.trim().replace(":","");                
            } else if (line.includes(':') && line.startsWith(" ")) {
                href = extractHref(line);
                if (href){
                    let a = createCustomNode('a',title);
                    a.title = title;
                    a.href = href;
                    let p = createCustomNode('p');
                    p.appendChild(a);
                    markdown_body.appendChild(p);
                    href = null;
                }
            }
        });
    } catch (error) {
        console.error('Error fetching or processing the YAML file:', error);
    }
}

fetchYAMLAndProcess('https://www.wabbajack.org/discord_bot_tags/tags.yaml');
