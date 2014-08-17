'use strict';

module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    express: {
      options: {
        cmd: process.argv[0],
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
          src: ['test/mocha/*.js']
      }
    },

    watch: {
      gruntfile: {
        files: ['Gruntfile.js']
      },
      scripts: {
        files: ['server.js','routes/*.js']
      }
    }/*,*/

/*
    shell: {
      mongo: {
        command: 'mongod',
        options: {
          async:true
          //http://stackoverflow.com/questions/17871833/start-mongodb-from-within-a-grunt-task
        }
      }
    }
    */
  });

  grunt.loadNpmTasks('grunt-express-server');
  grunt.loadNpmTasks('grunt-mocha-test');
  grunt.loadNpmTasks('grunt-contrib-watch');
  //grunt.loadNpmTasks('grunt-shell-spawn');

  grunt.registerTask('default', [
    //'shell',
    'express:dev',
    //'mochaTest',
    'watch'
    ]);
};