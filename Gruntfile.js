module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    requirejs: {
      mainJS: {
        options: {
          baseUrl: "public/js/app",
          paths: {
            "mainScript": "init/main_script"
          },
          wrap: true,
          name: "../libs/almond",
          preserveLicenseComments: false,
          optimize: "uglify",
          mainConfigFile: "public/js/app/config/config.js",
          include: ["mainScript"],
          out: "public/js/app/init/main_script.min.js"
        }
      },
      mainCSS: {
        options: {
          optimizeCss: "standard",
          cssIn: "./public/css/main_style.css",
          out: "./public/css/main_style.min.css"
        }
      }
    },
    jshint: {
      files: ['Gruntfile.js', 'public/js/app/**/*.js', '!public/js/app/**/*min.js'],
      options: {
        globals: {
          jQuery: true,
          console: false,
          module: true,
          document: true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-requirejs');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.registerTask('test', ['jshint']);
  grunt.registerTask('build', ['requirejs:mainJS', 'requirejs:mainCSS']);
  grunt.registerTask('default', ['test', 'build']);

};
