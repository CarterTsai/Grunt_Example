// References : https://github.com/gruntjs/grunt-contrib-concat/blob/master/README.md

module.exports = function(grunt){
    var appConfig = {
        dist: 'dist',
        app: '.'
    };
    grunt.initConfig({
        app : appConfig,
        pkg: grunt.file.readJSON('package.json'), 
       // copy: {
       //     dist: {
       //         files: [{
       //             expand: true,
        //            dot: true,
         //           cwd: '<%= app.app %>',
         //           dest: '<%= app.dist %>',
         //           src: ['js/{,*/}*.js']
         //       }]
         //   }
       // },
        htmlmin: {
            dist: {
               files: [{
                    expand: true,
                    cwd: '<%= app.app %>',
                    src: ['*.html'],
                    dest: '<%= app.dist %>'
                }]
            }
        },
        useminPrepare: { 
            html: 'index.html',
            options: {
                dest: '<%= app.dist %>'
            }
        },
        usemin: {
            html: ['dist/{,*/}*.html'],
            options: {
                assetsDirs: ['<%= app.dist %>'],
                debugInfo: true
            }
        }
    });
    
    require('load-grunt-tasks')(grunt);
    grunt.registerTask('build', [
        'useminPrepare',
        'concat',
        'uglify',
        'htmlmin',
        'usemin'
    ]);

};
