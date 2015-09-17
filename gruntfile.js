module.exports = function (grunt) {
    require('load-grunt-tasks')(grunt);
    
    grunt.initConfig({
	    nodemon: {
            dev: {
                script: './index.js'
            }
        }
    });

    grunt.registerTask('default', ['nodemon']);
};
