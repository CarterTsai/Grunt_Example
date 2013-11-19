module.exports = function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'), 
        sprite: {
            all: {
                src: './images/my-icon/*.png',
                destImg: 'dest/images/all.png',
                destCSS: 'dest/css/sprite.css',
                algorithm: 'binary-tree',
               // cssTemplate: 'css/main.css',
                cssVarMap: function(sprite) {
                console.log(sprite)
                    sprite.name = 'example-'+sprite.name;
                }
            },
        }    
    });

    grunt.loadNpmTasks('grunt-spritesmith');
    grunt.registerTask('default', ['sprite']);
};

