/*jslint node: true */
"use strict";
/*------------------------------------------------------------------------------------

DO NOT EDIT THIS FILE !!! It is generated automatically and will be overwritten.

To modify this model:
1. Create 'Role.js' file in 'definition-files-custom' directory located in this file's parent directory.
2. Copy the code below and paste it into 'Role.js'.
3. Use utility methods to easily access orm properties.

"use strict";
var orm     = require('model\index.js'),
    model   = require('./Role.js'),
    util    = require('../utils.js')(model),
    Seq     = orm.Sequelize();

module.exports = model;

// Some utility methods:
util.getRelation("userRoleIdFkeys").onDelete = 'CASCADE'; 
util.getAttribute("roleId").comment = 'This is the comment'; 

------------------------------------------------------------------------------------*/
var orm = require('../index.js'),
    Seq = orm.Sequelize();
module.exports = {
    modelName: "public.role",
    options: {
        tableName: "Role",
        schema: "public",
        timestamps: false
    },
    attributes: {
        "roleId": {
            type: Seq.INTEGER,
            field: "roleId",
            primaryKey: true,
            allowNull: false,
            unique: "Role_pkey"
        },
        "roleName": {
            type: Seq.STRING(200),
            field: "roleName"
        }
    },
    relations: [{
        type: "hasMany",
        model: "public.user",
        schema: "public",
        table: "User",
        source: "generator",
        details: {
            as: "userRoleIdFkeys",
            foreignKey: "roleId",
            onDelete: "NO ACTION",
            onUpdate: "NO ACTION"
        }
    }, {
        type: "belongsToMany",
        model: "public.user",
        schema: "public",
        table: "User",
        source: "generator",
        details: {
            as: "relatedUserRoleIdFkeyCreatedBies",
            foreignKey: "roleId",
            otherKey: "createdBy",
            through: "User",
            onDelete: "NO ACTION",
            onUpdate: "NO ACTION"
        }
    }, {
        type: "belongsToMany",
        model: "public.user",
        schema: "public",
        table: "User",
        source: "generator",
        details: {
            as: "relatedUserRoleIdFkeyUpdatedBies",
            foreignKey: "roleId",
            otherKey: "updatedBy",
            through: "User",
            onDelete: "NO ACTION",
            onUpdate: "NO ACTION"
        }
    }]
};