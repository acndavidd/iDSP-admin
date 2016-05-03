/**
 * This file is auto generated by sequelize-pg-generator.
 * @module path/to/model
 * @author Özüm Eldoğan
 */

/*jslint node: true, stupid: true, nomen: true */
"use strict";

var Sequelize           = require('sequelize'),
    fs                  = require('fs'),
    path                = require('path'),
    util                = require('util'),
    models              = {},
    relationships       = {},
    modelsPath          = '',
    definitionDir       = 'definition-files',
    definitionDirCustom = definitionDir + '-custom',
    debug               = false,
    debugFD             = '',
    sequelize           = null;

/**
 * Requires given npm module file and defines sequelize module according to exported object from that module.
 * @private
 * @param {string} file - Location of the npm module file which contains model definition.
 */
function defineModel(file) {
    var object      = require(file),
        options     = object.options || {},
        modelName   = object.modelName;

    if (debug) {
        fs.writeSync(debugFD, 'var ' + modelName + ' = Sequelize.define("' + modelName + '",\n' + util.inspect(object.attributes) + ',\n' + util.inspect(options, {depth: null}) + ');\n\n\n');
    }

    models[modelName] = sequelize.define(modelName, object.attributes, options);
    if (object.relations !== undefined) {
        relationships[modelName] = object.relations;
    }
}


/**
 * Define 'hasMany' and 'belongsTo' relations.
 * @private
 * @param {string} modelName - Name of the model
 * @param {string} relationType - Type of the relation 'hasMany' or 'belongsTo'
 * @param {string} targetModelName - Name of the target model which this relation related to.
 * @param {Object} options - Sequelize options of relation.
 */
function defineRelation(modelName, relationType, targetModelName, options) {
    if (debug) {
        fs.writeSync(debugFD, modelName + '.' + relationType + '(' + targetModelName + ', ' + util.inspect(options, {depth: null}) + ');\n\n');
    }

    models[modelName][relationType](models[targetModelName], options); // account.hasMany(contact, {...})
}


/**
 * Generates list of definition files by looking given modelsPath directory. It traverses 'definition-files'
 * and 'definition-files-custom' directories to generate the list. Files in 'definition-files' will be skipped
 * if a file with same name is found in 'definition-files-custom' directory.
 * @private
 * @returns {Array}
 * @example
 * var list = getFileList('../model'); // ['./definition-files-custom/public_cart.js', './definition-files/public_account.js]
 */
function getFileList() {
    var i, file, isOverridden = {}, files = [], customFiles, baseFiles;
    baseFiles = fs.readdirSync(path.join(modelsPath, definitionDir));
    customFiles = fs.readdirSync(path.join(modelsPath, definitionDirCustom));

    for (i = 0; i < customFiles.length; i = i + 1) {
        file = customFiles[i];
        if (file.match(/\.js$/)) {
            isOverridden[file] = true;
            files.push('./' + path.join(definitionDirCustom, file));
        }
    }

    for (i = 0; i < baseFiles.length; i = i + 1) {
        file = baseFiles[i];
        if (!isOverridden[file] && file.match(/\.js$/)) {
            files.push('./' + path.join(definitionDir, file));
        }
    }
    return files;
}


/**
 * Iterates all relations and executes given callback on them. Callback is passed
 * ({string} modelName, {string} relationType, {string} targetModelName, {Object} relationOptions)
 * @private
 * @param {function} callback - Callback function.
 * @returns {Array}
 */
function processAllRelations(callback) {
    var i, modelName, relation, relations, result = [];
    for (modelName in relationships) {
        if (relationships.hasOwnProperty(modelName)) {
            relations = relationships[modelName];
            for (i = 0; i < relations.length; i = i + 1) {
                relation = relations[i];
                result.push(callback(modelName, relation.type, relation.model, relation.details));
            }
        }
    }
    return result;
}


/**
 * Initializes models.
 * @private
 */
function init() {
    var debugFile = path.join(__dirname, 'debug.js');

    if (debug) {
        if (fs.existsSync(debugFile)) { fs.unlinkSync(debugFile); }
        debugFD = fs.openSync(debugFile, 'a');
    }

    getFileList(modelsPath).forEach(defineModel);
    processAllRelations(defineRelation);

    console.log("proses define relation");

    if (debug) {
        fs.closeSync(debugFD);
    }
}

module.exports = {};

/**
 * Sets up sequelize models based on model files in given directory for given database details.
 * @param {string} database - Name of the database to connect
 * @param {string} username - Username of the database
 * @param {string} password - Password of the database
 * @param {Object} obj - Object to pass new Sequelize() function. See Sequelize for details.
 * @example
 * var orm = require('../model');
 * orm.setup('path/to/model', 'database', 'user', 'password', {
     *     host: '127.0.0.1',
     *     logging: false,
     *     native: true
     * });
 */
module.exports.setup = function (database, username, password, obj) {
    if (typeof obj !== 'object') { obj = {}; }
    if (obj.dialect === undefined || obj.dialect === null) { obj.dialect = 'postgres'; }

    if (arguments.length === 2) {
        sequelize = new Sequelize(database, username);
    } else if (arguments.length === 3) {
        sequelize = new Sequelize(database, username, password);
    } else if (arguments.length === 4) {
        sequelize = new Sequelize(database, username, password, obj);
    }
    modelsPath = __dirname;
    init();
};

/**
 * Returns requested model with given name.
 * @param {string} name - Model name
 * @returns {object} - Sequelize model
 */
module.exports.model = function (name) {
    return models[name];
};

/**
 * Returns Sequelize object.
 * @returns {Sequelize} - Sequelize object
 */
module.exports.Sequelize = function () {
    return Sequelize;
};

/**
 * Returns sequelize instance.
 * @returns {Sequelize} - sequelize instance
 */
module.exports.sequelize = function () {
    return sequelize;
};
