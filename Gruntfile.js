'use strict';

module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    express: {
      options: {
        cmd: process.argv[0],
        port: 3000
      },
      dev: {
        options: {
          script: 'server.js'
        }
      }
    },

    mochaTest: {
      test: {
        options: {
          reporter: 'spec'
        },
          src: ['test/**/*.js']
      }
    },

    watch: {
      gruntfile: {
        files: ['Gruntfile.js']
      },
      scripts: {
        files: ['**/*.js']
      }
    }
  });

  grunt.loadNpmTasks('grunt-express-server');
  grunt.loadNpmTasks('grunt-mocha-test');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', [
    'express:dev',
    'mochaTest',
    'watch'
    ]);
};