## Sanity Check Errors

A sanity check error means that Wabbajack encountered an unexpected result while validating or processing files. The cause depends on the specific error and the operation that failed.

**Troubleshooting:**

1. Check the exact error message and identify the affected file or operation.
2. Ensure sufficient free space is available on both the installation and system drives.
3. Check for possible file corruption or storage errors if extraction or verification repeatedly fails.
4. If a downloaded archive, mod file, or modlist `.wabbajack` file is confirmed to be corrupted, delete only the affected file and allow Wabbajack to download or recreate it. Modlist `.wabbajack` files are stored in the `downloaded_mod_lists` folder within Wabbajack's version-specific directory.
5. If the error involves unusual characters in filenames, check your Windows system locale. To change it:
   - Press `Win + R`, enter `intl.cpl`, and press Enter.
   - Select **Administrative → Change system locale**.
   - Temporarily select **English (United States)** and uncheck **Beta: Use Unicode UTF-8 for worldwide language support**.
   - Restart Windows and retry the installation.
   - Restore your original settings after installation. See [Microsoft's guidance on regional settings](https://support.microsoft.com/en-us/servicing/os/windows/2019/02/apps-using-legacy-crts-don-t-work-properly-with-certain-regional-settings).
6. Restart Wabbajack and resume using the same installation and downloads directories.

If the error persists, upload your `Wabbajack.current.log` to the appropriate support channel.

**Do not delete your entire Wabbajack cache, downloaded archives, or existing installation unless specifically instructed to do so. Only remove individual files confirmed to be corrupted.**
