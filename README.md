#  [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Coverage Status][coveralls-image]][coveralls-url]

> Make a new GitHub release using [conventional-github-releaser](https://github.com/stevemao/conventional-github-releaser)

*Issues with the output should be reported on the `conventional-github-releaser` [issue tracker](https://github.com/stevemao/conventional-github-releaser/issues).*


## Install

```
$ npm install --save-dev grunt-conventional-github-releaser
```


## Usage

```js
grunt.loadNpmTasks('grunt-conventional-github-releaser');

grunt.initConfig({
  conventionalGithubReleaser: {
    options: {
      auth: {
        // your auth object goes here
      }
      changelogOpts: {
        // conventional-github-releaser options go here
        preset: 'angular'
      },
      context: {
        // context goes here
      },
      gitRawCommitsOpts: {
        // git-raw-commits options go here
      },
      parserOpts: {
        // conventional-commits-parser options go here
      },
      writerOpts: {
        // conventional-github-releaser-writer options go here
      }
    },
    release: {}
  }
});

grunt.registerTask('default', ['conventionalGithubReleaser']);
```


## API

See the [conventional-github-releaser](https://github.com/stevemao/conventional-github-releaser) docs.

There are some changes:

### changelogOpts

#### warn

It is `grunt.verbose.writeln`.


## License

MIT


[npm-image]: https://badge.fury.io/js/grunt-conventional-github-releaser.svg
[npm-url]: https://npmjs.org/package/grunt-conventional-github-releaser
[travis-image]: https://travis-ci.org/stevemao/grunt-conventional-github-releaser.svg?branch=master
[travis-url]: https://travis-ci.org/stevemao/grunt-conventional-github-releaser
[daviddm-image]: https://david-dm.org/stevemao/grunt-conventional-github-releaser.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/stevemao/grunt-conventional-github-releaser
[coveralls-image]: https://coveralls.io/repos/github/stevemao/grunt-conventional-github-releaser/badge.svg
[coveralls-url]: https://coveralls.io/r/stevemao/grunt-conventional-github-releaser
