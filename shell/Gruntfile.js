module.exports = function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'), 
        shell: {
            show: {
                command: 'echo "Hello World" '
            },
            options:{
                stdout:true
            }
        }    
    });

    grunt.loadNpmTasks('grunt-shell');
    grunt.registerTask('default', ['shell']);
};

