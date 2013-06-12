module.exports = function(grunt) {
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.initConfig({
    watch: {
      compass: {
        files: ['sass/**/*.{scss,sass}'],
        tasks: ['compass:dev']
      },
      livereload: {
        files: ['css/*'],
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
    },

    uglify: {
      build: {
        files: {
          'js/build.js': ['js/*.js']
        }
      }
    },

    imagemin: {
      dist: {
        files: [{
          expand: true,
          src: 'img/{,*/}*.{png,jpg,jpeg}'
        }]
      }
    },

    svgmin: {
      dist: {
        files: [{
          expand: true,
          src: 'img/{,*/}*.svg'
        }]
      }
    }
  });

  grunt.registerTask('default', ['watch']);
  grunt.registerTask('dist', [
    'compass:dist',
    'uglify',
    'imagemin',
    'svgmin'
  ]);
};