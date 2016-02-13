'use strict';
var chalk = require('chalk');
var conventionalGithubReleaser = require('conventional-github-releaser');
var plur = require('plur');

var DESC = 'Make a new GitHub release from git metadata';

module.exports = function(grunt) {
  grunt.registerMultiTask('conventionalGithubReleaser', DESC, function() {
    var tally = {
      successes: 0,
      fails: 0
    };

    var done = this.async();
    var opts = this.options();

    var auth = opts.auth;
    var changelogOpts = opts.changelogOpts;
    changelogOpts.debug = grunt.log.debug;
    changelogOpts.warn = grunt.verbose.writeln;
    var context = opts.context;
    var gitRawCommitsOpts = opts.gitRawCommitsOpts;
    var parserOpts = opts.parserOpts;
    var writerOpts = opts.writerOpts;

    conventionalGithubReleaser(auth, changelogOpts, context, gitRawCommitsOpts, parserOpts, writerOpts, function(err, data) {
      if (err) {
        done(err);
        return;
      }

      data.forEach(function(releaseData) {
        if (releaseData.state === 'fulfilled') {
          tally.successes++;
        } else {
          tally.fails++;
        }
      });

      if (tally.successes) {
        grunt.log.write('Generated ' + chalk.cyan(tally.successes.toString()) + plur(' release', tally.successes));
      }

      if (tally.fails) {
        grunt.log.write((tally.successes ? ', ' : '') + chalk.red(tally.fails.toString()) + plur(' release', tally.fails) + ' failed');
      }

      grunt.log.writeln();
      done();
    });
  });
};
