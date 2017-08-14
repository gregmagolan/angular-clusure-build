This repo is a test for building & bunding an Angular Universal application using the Google Closure Compiler.

It contains a minimal Hello World application with a single component that uses @angular/forms.

The browser code is built by ngc and optimized and bundled the Google Closure Compiler.

The server code is built and bundled using webpack.

Closure compiler bundling is based off of https://github.com/angular/closure-demo

Angular Universal configuration and build is based off of https://github.com/bleenco/angular-universal-seed

**The compressed JS size for an Angular 4.3.4 Hello World app is 44kb.**

This includes @angular/forms (which is why it is larger than the @angular/closure-demo).

```
35093 13 Aug 23:49 dist/browser.js.brotli
39500 13 Aug 23:48 dist/browser.js.gz
10887 13 Aug 23:49 dist/zone.min.js.brotli
11894 13 Aug 23:49 dist/zone.min.js.gz
```

# Try it

Install [brotli], which is a more modern compression algorithm than gzip. It gives a 13% smaller JS file.

On Mac, `brew install brotli`.

Requires Node >= 6.x since the `ngc` tool (and its deps) are now shipped as ES6 as well.

Requires Java installed to run the Closure Compiler. Zulu distribution is great: http://zulu.org/download-dev/.

``` shell
$ yarn install
$ yarn run build
$ yarn run serve
```

[brotli]: https://github.com/google/brotli

## Launch a source map explorer to see what's in the bundle

``` shell
$ yarn run explore:browser
```
