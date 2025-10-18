# How to add a tag

To add a new tag simply make a pull request to this repository editing the [`tags.yaml`](https://github.com/wabbajack-tools/discord_bot_tags/blob/main/_data/tags.yaml) file by adding a new tag like in the code-block below:

```yaml
tag_sections:
  - name: 'Tutorial Tags' # Category/Chapter of Tags the tag is part of. Don't make a new one if a ma
    tags:
      - name: tag_name # must not contain special characters or whitespace characters with the exception of '_'
        summary: "this is an example tag" # This summary will be shown in the overview and in the bot embed that links to the fully rendered response page.
        content: 'tags/permanent/general/tag_name.md'
        triggers: ["Example Trigger", "Different Valid Example Trigger"] # List of log triggers for the tag bot to respond to with this tag.
      other_tag:
        # ... other_tag info
      # ... more tags
  # ... more sections
```

So the added tag in this case would be:

```yaml
- name: tag_name # must not contain special characters or whitespace characters with the exception of '_'
  summary: "this is an example tag" # This summary will be shown in the overview and in the bot embed that links to the fully rendered response page.
  content: 'tags/permanent/general/tag_name.md'
  triggers: ["Example Trigger", "Different Valid Example Trigger"] # List of log triggers for the tag bot to respond to with this tag.
```
