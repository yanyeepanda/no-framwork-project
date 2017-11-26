module.exports = (grunt) ->
  grunt.initConfig
    sass:
      build:
        files:
          "build/main.css": "app/main.scss"

    coffee:
      build:
        files:
          "build/main.js": "app/main.coffee"

    copy:
      main:
        src: "app/index.html"
        dest: "build/index.html"

  grunt.loadNpmTasks("grunt-contrib-coffee")
  grunt.loadNpmTasks('grunt-contrib-copy')
  grunt.loadNpmTasks("grunt-sass")

  grunt.registerTask("default", ["sass:build", "coffee:build", "copy:main"])
