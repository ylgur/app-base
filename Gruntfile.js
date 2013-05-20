module.exports = function(grunt) {
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.initConfig({
    watch: {
      compass: {
        files: ['sass/**/*.{scss,sass}'],
        tasks: ['compass']
      },
      livereload: {
        files: ['css/*'],
        options: {
          livereload: true
        }
      }
    },

   compass: {
      dist: {
        options: {
          config: 'config.rb',
          force: true
        }
      }
    }
  });

  grunt.registerTask('default', ['watch']);
};