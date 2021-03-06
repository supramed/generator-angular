'use strict';
var util = require('util');
var ScriptBase = require('../script-base.js');
var path = require('path');
var mkdir = require('mkdirp');


var Generator = module.exports = function Generator() {
    ScriptBase.apply(this, arguments);
};

util.inherits(Generator, ScriptBase);

Generator.prototype.createModuleFiles = function createModuleFiles() {
    var basePath = this.classedName;
    this.appTemplate('module', path.join(basePath, this.cameledName) + '.module');
    this.appTemplate('config', path.join(basePath, this.cameledName) + '.config');
    mkdir.sync(path.join(basePath,'components'));
    mkdir.sync(path.join(basePath,'services'));
    this.appTemplate('service', path.join(basePath, 'services', this.cameledName) + '.service');
    this.appTemplate('spec/service', path.join(basePath, 'services', this.cameledName) + '.spec');
    mkdir.sync(path.join(basePath,'dal'));
    this.appTemplate('dal', path.join(basePath, 'dal', this.cameledName) + '.dal');
};
