module.exports = function(grunt) {
	grunt.initConfig({
		uncss: {
		dist: {
			files: {
				'css/style.css': ['index.html'] // куда положить готовый css файл
			}
        },
        options: {
            ignore: ['.btn-group',
                    '.bootstrap-select',
                    '.selector' ,
                    '.open',
                    '.dropup',
                    '.btn',
                    '.dropdown-toggle',
                    '.btn-default',
                    '.bs-caret',
                    '.dropdown-menu open',
                    '.bs-searchbox',
                    '.dropdown-menu',
                    '.inner',
                    '.selected',
                    '.hidden',
                    '.left'],
            stylesheets: ['build/stylesheet.min.css','build/add_style.css'] //откуда брать файл css
			}
		}
	});
	grunt.loadNpmTasks('grunt-uncss');
	grunt.registerTask('default', 'uncss');
}