## Hash Fails 

Hashes for BSA or TEMP_BSA_FILES failures is generally hardware related, and staff cannot unfortunatly wave a magic wand and resolve it for you.

These are the things which we know Can cause the issue:-
1. running out of harddrive space, either on the install drive or the system drive  (especially if your primary system drive or install drive is fairly low on free space) while it's unzipping and/or patching. You should generally make sure you have **30GB** more than the list requires free on both drives.
2. Over or Underclocking your CPU (Specifically amd overclocking on auto, but Intel cpu's may also have the same issue) - hash fail will normally mention **"SHA1"** if this is the case
3. Hard drive failing / Bad sectors
4. Installing to a external drive
5. Rarely- This can occur if the wabbajack file was built using corrupt file(s) (but this would affect everyone installing the list)

## How to fix a hash fail
* Check you have 30gb  free space on your system drive, Make sure you have enough free space on the install drive for both the downloads, install space and a extra 30gb if running wabbajack from this drive as well.
* You can also try removing any overclocking you have enabled and see if that resolves the fails.
* Check the install drive for errors (windows has a tool you can use to check this)
* Check the modlist discord to see if anyone else is reporting issues with the file that you are having problems with
* Avoid installing on external drives - these are generally not recommended as they are slow.
* Most users can generally 'brute force' the install to sucess through by running the install over and over until it succeeds, especially if it's failing on different files every time.

### UNDER NO CIRCUMSTANCES SHOULD YOU DELETE ANY PART OF THE MODLIST. Its not a problem with your files. its a problem extracting / patching them.
