## Hash Failures

Hash failures involving `BSA` or `TEMP_BSA_FILES` indicate that Wabbajack could not successfully verify a file during extraction, processing, or patching. Several factors can cause this, including insufficient disk space, unstable hardware, storage errors, or corrupted source files. A hash failure alone does not identify the underlying cause.

**Troubleshooting:**

1. Ensure your installation drive and Windows system drive have sufficient free space. Temporary extraction and patching may require additional space beyond the modlist's stated requirements. We recommend approximately 15% additional free space. For example, a modlist requiring 150 GB of installation space should have at least 172.5 GB available, in addition to the space required for downloads.
2. If your CPU or RAM is overclocked or undervolted, temporarily restore default settings to rule out instability.
3. Check your storage drive for errors and review its health if failures persist.
4. Check the modlist's support channels for reports of the same error.
5. Restart the installation using your existing installation and downloads directories.
6. Avoid installing modlists on external drives, particularly older or unreliable ones, as they can cause file corruption during extraction and patching. An internal SSD is recommended. If using an external drive is unavoidable, repeatedly restarting the installation may eventually succeed, although this is not a reliable solution.

**Do not delete your existing installation or download files when troubleshooting these hash failures.**
