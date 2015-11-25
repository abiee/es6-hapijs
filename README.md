Another boring Hapijs Boilerplate
======================
Simple Hapi.js project to build RESTful API's. The main goal of this project is to be built on top of native ES6, it also adds compatibility to ES5 with Babel.

What's inside
----------------
Batteries included:
 - Hapi.js
 - gulp
 - Lab
 - Babel

Note: This project is based on Node v5.x, so that Babel is used only for compatibility reasons to older Node versions. 

Setup
-----
Clone the repository and install the dependencies.

    $ git clone https://github.com/abiee/es6-hapi.git my-project
    $ cd my-project
    $ npm install
    $ gulp serve

Do not forget to install globally gulp if not installed yet.

Build for older Node versions
-----
If you want to build the project run.

    $ gulp build

A dist folder will appear with all source scripts transpiled to ES5.

Testing
---------
Two options exists to run tests, the first one is for development process and aims to practice Test Driven Development.

    $ gulp tdd

The other option to just run tests once.
    
    $ gulp test

Contribution
---------------
If you have ideas or find an error feel free to submit a PR.

Licence
-------
Licensed under the MIT license.
