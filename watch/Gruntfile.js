module.exports = function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'), 
        watch: {
            files: ['*.js'],
            tasks: ['shell'],
        },
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
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['watch']);

};

