// References : https://github.com/gruntjs/grunt-contrib-concat/blob/master/README.md

module.exports = function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify : {
            dist: {
              options: {

              },
              files: {
                'output.min.js': ['gameCtrl.js']
              }
            } 
        } 
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.registerTask('default', ['uglify:dist']);

};
