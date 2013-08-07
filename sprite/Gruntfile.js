module.exports = function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'), 
        sprite: {
            all: {
                src: './images/my-icon/*.png',
                destImg: 'dest/images/all.png',
                destCSS: 'dest/css/sprite.css'
            },
        }    
    });

    grunt.loadNpmTasks('grunt-spritesmith');
    grunt.registerTask('default', ['sprite']);
};

