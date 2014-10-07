/*
 * slush-meanjs
 * https://github.com/arvindr21/slush-meanjs
 *
 * Copyright (c) 2014, Arvind Ravulavaru
 * Licensed under the MIT license.
 */

'use strict';

var gulp = require('gulp'),
    g    = require('gulp-load-plugins')({lazy:false}),
    install = require('gulp-install'),
    conflict = require('gulp-conflict'),
    template = require('gulp-template'),
    rename = require('gulp-rename'),
    _ = require('underscore.string'),
    inflection = require('inflection'),
    inquirer = require('inquirer'),
    mkdirp = require('mkdirp'),
    express = require('express'),
    fs      = require('fs-extra');

// load generators
gulp = require('./generators/app')(gulp, g, install, conflict, template, rename, _, inflection, inquirer, mkdirp);
gulp = require('./generators/run')(gulp, g, install, conflict, template, rename, _, inflection, inquirer, mkdirp, express);
gulp = require('./generators/fileStructure')(gulp, g, install, conflict, template, rename, _, inflection, inquirer, mkdirp);
gulp = require('./generators/client')(gulp, g, install, conflict, template, rename, _, inflection, inquirer, mkdirp);
