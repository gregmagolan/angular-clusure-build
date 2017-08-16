This repo is a test for building & bunding an Angular Universal application using the Google Closure Compiler. It contains a minimal Hello World application with a single component that uses @angular/forms.

The browser code is built by ngc and optimized and bundled the Google Closure Compiler. The server code is built using Bazel.

Closure compiler bundling is based off of https://github.com/angular/closure-demo

Angular Universal configuration and build is based off of https://github.com/bleenco/angular-universal-seed

Bazel build configuration is based off of https://github.com/alexeagle/angular-bazel-example

**The compressed JS size for an Angular 4.3.0 Hello World app is 44kb.**

This includes @angular/forms (which is why it is larger than the @angular/closure-demo).

```
35028 16 Aug 00:55 dist/browser.js.brotli
39476 16 Aug 00:55 dist/browser.js.gz
10887 16 Aug 00:55 dist/zone.min.js.brotli
11894 16 Aug 00:55 dist/zone.min.js.gz
```

# Try it

Install [brotli], which is a more modern compression algorithm than gzip. It gives a 13% smaller JS file. On Mac, `brew install brotli`.

Requires Node >= 6.x since the `ngc` tool (and its deps) are now shipped as ES6 as well.

Requires Java installed to run the Closure Compiler. Zulu distribution is great: http://zulu.org/download-dev/.

``` shell
$ yarn install
$ yarn run build
$ yarn run serve
```

[brotli]: https://github.com/google/brotli

# Launch a source map explorer to see what's in the browser bundle

``` shell
$ yarn run explore
```
