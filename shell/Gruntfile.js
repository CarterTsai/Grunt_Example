module.exports = function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'), 
        shell: {
            show: {
                command: 'echo "Hello World" '
            },
            multi: {
                command: [
                    'echo cmd 1',
                    'echo cmd 2'
                ].join('&&')
            },
            options:{
                stdout:true
            }
        }    
    });

    grunt.loadNpmTasks('grunt-shell');
    grunt.registerTask('default', ['shell']);
};

