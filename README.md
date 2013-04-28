spaceapps-york-offthegrid
=========================
Ensure you have MySQL, PHP5 and PHP5-MySQL running under a web server. (Tested on Apache)

To build, create a new MySQL database and run the scripts in database/create followed by database/data. Edit your local copy of backend/private/connection to add you connection details for the database you have created (don't recommit this file if you don't want your login being published.

Copy the contents of backend/private to a level above the root web directory of your server, and the contents of public to the root web directory. Also copy the contents of Web Client to the root web directory.

You should now have a working copy at rootwebpath/index.html
