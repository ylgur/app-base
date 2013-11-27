module.exports = function(grunt) {
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.initConfig({
    watch: {
      compass: {
        files: ['./public/sass/**/*.{scss,sass}'],
        tasks: ['compass:dev']
      },
      livereload: {
        files: ['./public/css/*'],
        options: {
          livereload: true
        }
      }
    },

   compass: {
      dev: {
        options: {
          config: './public/config.rb',
          force: true
        }
      },

      dist: {
        options: {
          config: './public/config.rb',
          force: true,
          outputStyle: 'compressed'
        }
      }
    },

    uglify: {
      build: {
        files: {
          './public/js/build.js': ['./public/js/*.js']
        }
      }
    },

    imagemin: {
      dist: {
        files: [{
          expand: true,
          src: './public/img/{,*/}*.{png,jpg,jpeg}'
        }]
      }
    },

    svgmin: {
      dist: {
        files: [{
          expand: true,
          src: './public/img/{,*/}*.svg'
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