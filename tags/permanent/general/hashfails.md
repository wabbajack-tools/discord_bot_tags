## Hash Fails 

Hashes for BSA or TEMP_BSA_FILES failures are usually caused by running out of Drive space (especially if your primary drive or install drive is fairly low on free space) while it's unzipping and/or patching. You should generally make sure you have 30gb more than the list requires free on both drives.

Most users can generally brute force it through by running the install over and over and over until it succeeds. Especially if it's failing on different files every time. You may need to tick "overwrite install" after you restart the install

If you are getting consistent fails on the same files or the hash fail mentions a "SHA1" fail or you have retried 10+ times already you can try the following releases to see if they work better for you..

1. Try the current beta from ⁠bleeding-edge-testing  (unzip it somewhere
   run wabbajack from inside that folder and choose the same folders as you currently do)
2. Downgrading wabbajack to [3.6.1.1](https://github.com/wabbajack-tools/wabbajack/releases/download/3.6.1.1/3.6.1.1.zip)
   Get that zip file. Unzip it somewhere(a folder called 3.6.1.1 inside where your currently running wabbajack from is a good idea)
   Run wabbajack from inside that folder and choose the same folders as you currently do.

### UNDER NO CIRCUMSTANCES SHOULD YOU DELETE ANY PART OF THE MODLIST 
