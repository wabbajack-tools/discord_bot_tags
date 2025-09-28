function createNode(html_tag,text){
  const node = document.createElement(html_tag);
  const textnode = document.createTextNode(text);
  return textnode;
}

async function fetchYAMLAndProcess(url) {
    try {
        const response = await fetch(url);
        const text = await response.text();
        const lines = text.split('\n');
        let output = '';
        let markdown_body = document.getElementsByClassName("markdown-body")[0];

        lines.forEach(line => {
            line = line.trim();
            if (line.startsWith('#')) {
                const commentText = line.substring(1).trim();
                markdown_body.appendChild(this.createNode("h3",commentText);
            } else if (line.includes(':')) {
                const [key, value] = line.split(':').map(part => part.trim());
                if (value.startsWith('text:')) {
                    const url = value.substring(5).trim();
                    const href = url.replace(/^(https:\/\/raw\.githubusercontent\.com\/wabbajack-tools\/discord_bot_tags\/(refs\/heads\/main|main)\/)/, '');
                    output += `<a href="${href}">${key}</a>\n`;
                }
            }
        });
    } catch (error) {
        console.error('Error fetching or processing the YAML file:', error);
    }
}

fetchYAMLAndProcess('https://www.wabbajack.org/discord_bot_tags/tags.yaml');
