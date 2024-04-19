## How to add a tag

To add a new tag simply make a pull request that adds the following to the `tags.yaml` file where 

- `tag` is the name of the tag
- `text` is the markdown formatted text used for the embed
  - This markdown file is ideally added to this repository so other community members can propse changes to it via pull requests
  - Also make sure to try and keep it in fitting folder and in the worst case add a new folder.
- `image_url`(optional) is the image that will be added to the embed

```yaml
tag: 
  text: https://link.to.raw/tag.md
  image_url: https://link.to/image.png
```
*Setting an `image_url` is optional.*
