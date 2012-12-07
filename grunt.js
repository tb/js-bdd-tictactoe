/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jasmine : {
      src : ['libs/**/*.js', 'src/**/*.js'],
      helpers : 'spec/**/*_helper.js',
      specs : 'spec/**/*_spec.js'
    },
    lint: {
      files: ['grunt.js', 'src/**/*.js'] // , 'spec/**/*.js'
    },
    watch: {
      files: '<config:lint.files>',
      tasks: 'build lint'
    },
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        boss: true,
        eqnull: true,
        browser: true
      },
      globals: {
        jQuery: true,
        _: true,
        alert: true,
        console: true
      }
    },
    concat: {
      dist: {
          src : ['libs/jquery/*.js', 'libs/underscore/*.js', 'libs/other/*.js', 'src/**/*.js'],
          dest: 'dist/application.js'
      }
    },
    min: {
      dist: {
          src : ['libs/jquery/*.js', 'libs/underscore/*.js', 'libs/other/*.js', 'src/**/*.js'],
          dest: 'dist/application.js'
      }
    }
  });

  grunt.loadNpmTasks('grunt-jasmine-runner');

  // Default task.
  grunt.registerTask('default', 'lint jasmine');

  grunt.registerTask('build', 'concat:dist');
};
