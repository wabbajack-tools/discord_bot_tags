## Sanity check errors

Sanity check errors are normally caused by one of three things :-

### System Locale

If your system locale (language) is set to any language not using Latin-script letters (like English does), set your system language to English or any other Latin-script language which you can understand, and the issue is likely fixed.

<https://support.microsoft.com/en-us/windows/manage-the-input-and-display-language-settings-in-windows-12a10cb4-8626-9b77-0ccb-5013e0c7c7a2>

### Insufficiant Drive space or a failing hard Drive

If your hard drive is failing with errors or you dont have enough free space to extract BSA's in order to patch the files within them, this can cause a sanity check

### A corrupt download zip / Mod files / Wabbajack File or Wabbajack cache

If all else fails or has been ruled out - a complete reset of wabbajack, the modlist and the offending download is the last resort.

1. Delete the Modlist .Wabbajack file (from your version downloaded mod lists folder E.G c:\Wabbajack\3.7.5.2\downloaded_mod_lists ) 
2. Delete the offending zip file ( from <resource download location> ) 
3. Delete offending mod folder (E.G from <Modlist install folder>\Mods) 
4. Reset your Wabbajack settings, start off by closing Wabbajack if it is open. Afterwards, press Windows + R on your keyboard and type in %localappdata%. You should see a Windows Explorer window pop up, find and delete the folder called Wabbajack inside.

Once you've done all of that, restart Wabbajack, Login from the settings menu and restart installation.