
/* This file contain references to the vendor libraries we're using in this project.
This is used by webpack in the production build only*. A separate bundle for vendor code is useful 
since it's unlikely to change as often as the application's code. So all the libraries we reference here 
 will be wrtten
to vendor.js so they can be cashed untill one of them changes. So basically, this avoids customers
 having to download a huge JS anytime a line of code changes. They only have to download vendor.js when 
 a vendor library changes which should be less frequent. Any files which aren't referenced here will be
 undled in main.js for production */

 /* eslint-disable no-unused-vars */

 
 import fetch from 'whatwg-fetch';