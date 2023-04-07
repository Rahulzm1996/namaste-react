//package.json is configuration for npm
//package=dependency

//bundler - bundle,minified,cached,compressed,cleaned

//dependencies -
//1.dependency - used in production also
//2.dev-dependecy - required in development phase not needed in production

//difference between ~ and ^.

//1.0.0
//1 -> major verion, 0 -> minor, 0 -> patch

// ~version “Approximately equivalent to version”, will update you to all future patch versions, without incrementing the minor version. ~1.2.3 will use releases from 1.2.3 to <1.3.0.
//ex - 1.0.x

// ^version “Compatible with version”, will update you to all future minor/patch versions, without incrementing the major version. ^2.3.4 will use releases from 2.3.4 to <3.0.0.
//ex - 1.x.x

//package.json - configuartion for npm, it kepps track of what version of package is installed and keeps approx version
//package-lock.json - keeps excact version of packages

// "integrity": "sha512-5rMBpbNE72g6jZvkdR5gS2nyhwIXaJy8i65osOqs/+5b7zgf3eMKgjSsDrv6bhz3gzifsba6MBJiZdBckl+vnA==", -> its a hash,to verify whatever verion is running on local should work on production.

//Transitive dependency -  when we install parcel then there should be only one folder of parcel in node_modules, but we see a lots of folder, what are they? they are basically the packages on which parcel is dependent on and so on.

//npm - installs/download the packages.
//npx - it executes the package ex. npx parcel index.html

//browser scripts = they are normal js files which browsers understand but the App.js file is not a normal js file becase it includes import and export statement which browser doesn't understand hence in index.html we inport app.js as module in script.
