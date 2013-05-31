module.exports = function(grunt) {
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.initConfig({
    watch: {
      compass: {
        files: ['sass/**/*.{scss,sass}'],
        tasks: ['compass:dev']
      },
      livereload: {
        files: ['css/*', 'sass/**/*.{scss,sass}'],
        options: {
          livereload: true
        }
      }
    },

   compass: {
      dev: {
        options: {
          config: 'config.rb',
          force: true
        }
      },

      dist: {
        options: {
          config: 'config.rb',
          force: true,
          outputStyle: 'compressed'
        }
      }
    }
  });

  grunt.registerTask('default', ['watch']);
  grunt.registerTask('dist', ['compass:dist']);
};