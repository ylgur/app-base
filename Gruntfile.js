module.exports = function(grunt) {
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.initConfig({
    watch: {
      compass: {
        files: ['./dev/sass/**/*.{scss,sass}'],
        tasks: ['compass:dev']
      },
      livereload: {
        files: [
          './public/js/*',
          './public/css/*'
        ],
        options: {
          livereload: true
        }
      }
    },

    compass: {
      dev: {
        options: {
          config: './dev/config.rb',
          force: true,
          cssDir: './public/css'
        }
      },

      dist: {
        options: {
          config: './dev/config.rb',
          force: true,
          outputStyle: 'compressed'
        }
      }
    },

    nodemon: {
      dev: {
        options: {
          file: 'server.js',
          logConcurrentOutput: true
        }
      }
    },

    watchify: {
      dev: {
        src: './dev/js/**/*.js',
        dest: './public/js/main.js'
      }
    },

    concurrent: {
      server: ['watchify:dev:keepalive', 'watch', 'nodemon'],
      options: {
        logConcurrentOutput: true
      }
    },

    uglify: {
      build: {
        files: {
          './public/js/main.js': ['./public/js/*.js']
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

  grunt.registerTask('default', [
    'concurrent:server'
  ]);

  grunt.registerTask('dist', [
    'compass:dist',
    'uglify',
    'imagemin',
    'svgmin'
  ]);
};