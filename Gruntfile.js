module.exports = function(grunt) {

	grunt.initConfig({

		connect: {
			server: {
				options: {
					port: 9001,
					base: 'www',
					open: true
				}
			}
		},

		sass: {
			options: {
				sourceMap: false,
				outputStyle: 'expanded'
			},
			dist: {
				files: {
				    'www/style.css': 'scss/build.scss'
				}
			}
		},

		autoprefixer: {
			dist: {
				files: {
					'www/style.css': 'www/style.css'
				},
				options: {
					browsers: ['last 2 versions']
				}
			}
		},

		watch: {
	        styles: {
                files: ['scss/*.scss'],
                tasks: ['sass', 'autoprefixer'],
                options: {
                    spawn: false
                }
            }
		}

	});

	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-autoprefixer');

	grunt.registerTask('default', ['connect:server','watch']);
};