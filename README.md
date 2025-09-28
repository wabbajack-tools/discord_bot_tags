# Configuration Repository for the Wabbjack Support Bot

## Use of this repository

In this repository people can make pull requests for support commands for frequently used phrases and solutions.

## Currently supported tags:

*This list is automatically generated but only works when using the website view of this repository.*

[tags.yml](tags.yml)

<script>
async function fetchYAMLAndProcess(url) {
    try {
        const response = await fetch(url);
        const text = await response.text();
        const lines = text.split('\n');
        let output = '';

        lines.forEach(line => {
            line = line.trim();
            if (line.startsWith('#')) {
                const commentText = line.substring(1).trim();
                output += `<h3>${commentText}</h3>\n`;
            } else if (line.includes(':')) {
                const [key, value] = line.split(':').map(part => part.trim());
                if (value.startsWith('text:')) {
                    const url = value.substring(5).trim();
                    const href = url.replace(/^(https:\/\/raw\.githubusercontent\.com\/wabbajack-tools\/discord_bot_tags\/(refs\/heads\/main|main)\/)/, '');
                    output += `<a href="${href}">${key}</a>\n`;
                }
            }
        });

        document.getElementsByClassName("markdown-body") += output; // Append the output to the body
    } catch (error) {
        console.error('Error fetching or processing the YAML file:', error);
    }
}

fetchYAMLAndProcess('https://www.wabbajack.org/discord_bot_tags/tags.yaml');
</script>
