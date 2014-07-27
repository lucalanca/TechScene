module.exports = {
    myIcons: {
        files: [{
            expand: true,
            cwd: 'images/icons',
            src: ['*.svg', '*.png'],
            dest: "_gh_pages/assets/icons"
        }],
        options: {
            colors: ["#979797"]
        }
    }
};