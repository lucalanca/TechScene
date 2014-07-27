module.exports = {
    all: {
        files: ['<%= jshint.all %>'],
        tasks: ['jshint', 'nodeunit']
    },
    site: {
        files: ['Gruntfile.js', 'theme/**/*.scss', 'templates/**/*.hbs'],
        tasks: ['design']
    }
};
