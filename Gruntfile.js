'use strict';

module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-express-server');
  grunt.loadNpmTasks('grunt-mocha-test');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-shell-spawn');

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    mochaTest: {
      test: {
        options: {
          reporter: 'spec'
        },
        src: ['test/mocha/*.js']
      }
    },

    watch: {
      gruntfile: {
        files: ['Gruntfile.js']
      },
      scripts: {
        files: ['server.js','routes/*.js'],
        tasks: ['mochaTest']
      },
    },
  });


  grunt.registerTask('default', [
    'mochaTest',
    'watch'
    ]);
};