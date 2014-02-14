angularKarma
=======

Sample application using AngularJs, Grunt, and Karma

# Purpose

To demonstrate how to test AngularJs applications.

# Requirements

* Install Node.js
* In the command window install the following npms globally karma, grunt-cli, bower:
```
> npm install -g karma, grunt-cli, bower
```

# Install
* Install the project dependencies.  From the project directory type the following in the command line:

```
> npm install
```
* Install the bower packages. Again, from the project directory type the following in the command line
```
> bower install
```

# Run
* Grunt will serve the page.  It will watch for any changes, run linting, tests, and reserve the page
```
> grunt serve
```

# Continiuous Test
If you just want to run continuous linting and tests through karma type the following in the command line:
```
> grunt watch
```