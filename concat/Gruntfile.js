// References : https://github.com/gruntjs/grunt-contrib-concat/blob/master/README.md

module.exports = function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'), 
        concat: {
            options: {
                stripBanners: true, // true: remove banner comment of src files
                separator: ';',
                banner: '/* <%= pkg.name %> - v<%= pkg.version %> - ' +
                        '<%= grunt.template.today("yyyy-mm-dd")%> */\n',
                footer: '/* footer */' 
            },
            one: {
                src: ['src/test.js'],
                dest: 'dist/built.js'
            },
            // dynamic name
            dynamic: { 
                src: ['src/test.js'],
                dest: 'dist/<%= pkg.name %>-<%= pkg.version %>.js'
            },
            dist:{
                src: ['src/test.js','src/test2.js'],
                dest: 'dist/built.js'
            },
            missing:{
                src: ['src/invaild.js'],
                dest: 'dist/buildt.js',
                nonull: true,
            },
            no_missing:{
                src: ['src/invaild.js'],
                dest: 'dist/buildt.js',            
            },
        }    
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.registerTask('default', ['concat:dist']);
    grunt.registerTask('one', ['concat:one']);
    grunt.registerTask('dynamic', ['concat:dynamic']);
    grunt.registerTask('miss', ['concat:missing']);
    grunt.registerTask('nomiss', ['concat:no_missing']);

};
