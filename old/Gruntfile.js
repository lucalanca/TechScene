/*
 * porto-tech-scene
 * 
 * Joao Figueiredo
 * https://github.com/lucalanca/porto-tech-scene
 * 
 * Copyright (c) 2014
 * Licensed under the MIT license.
 */

module.exports = function(grunt) {
'use strict';
  require('time-grunt')(grunt);
  require('load-grunt-tasks')(grunt, {pattern: ['grunt-*', 'assemble*', 'grunticon']});
  require('load-grunt-config')(grunt, {
    data: {
      pkg       : grunt.file.readJSON('package.json'),
      vendor    : grunt.file.readJSON('.bowerrc').directory,
      site      : grunt.file.readYAML('_config.yml'),
      bootstrap : '<%= vendor %>/bootstrap', 
    }
  });
};