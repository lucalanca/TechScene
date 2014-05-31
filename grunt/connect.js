module.exports = {
  server: {
    options: {
      port: 8000,
      base: '<%= site.dest %>',
      keepalive: true,
      open: true
    }
  }
};
