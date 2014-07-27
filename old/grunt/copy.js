module.exports = {
    // Keep this target as a getting started point
    assets: {
        files: [
            {expand: true, cwd: '<%= bootstrap %>/dist/fonts', src: ['*.*'], dest: '<%= site.assets %>/fonts/'},
            {expand: true, cwd: '<%= bootstrap %>/dist/js',    src: ['*.*'], dest: '<%= site.assets %>/js/'},
            {expand: true, cwd: '<%= site.images %>',    src: ['*.*'], dest: '<%= site.assets %>/images/'},
            {expand: true, cwd: 'js', src: ['*.*'], dest: '<%= site.assets %>/js'},
            {expand: true, cwd: 'vendor', src: ['**/*.js'], dest: '<%= site.assets %>/js'},
            {expand: true, cwd: 'vendor/font-awesome/fonts', src: ['*.*'], dest: '<%= site.assets %>/fonts'}
        ]
    }
};

 