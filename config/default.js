/*jslint node: true, nomen: true*/
"use strict";

var path = require('path');

module.exports = {
    "sequelize-pg-generator": {
        "database": {
            "host": "127.0.0.1",
            "port": 5432,
            "user": "user",
            "password": "password",
            "database": "",
            "schema": ["public"]
        },
        "template": {
            "engine": "swig",
            "extension": "html",
            "folder": path.join(__dirname, '..', 'template', 'default')
        },
        "output": {
            "log": true,
            "folder": "./src/infraestructure/model",
            "beautify": true,
            "indent": 2,
            "preserveNewLines": false,
            "warning": true
        },
        "generate": {
            "stripFirstTableFromHasMany": true,
            "addTableNameToManyToMany": false,
            "addRelationNameToManyToMany": true,
            "stripFirstTableNameFromManyToMany": true,
            "hasManyThrough": false,
            "belongsToMany": true,
            "prefixForBelongsTo": "related",
            "useSchemaName": false,
            "modelCamelCase": true,
            "relationAccessorCamelCase": true,
            "columnAccessorCamelCase": false,
            "columnDefault": false,
            "columnDescription": true,
            "columnAutoIncrement": true,
            "tableDescription": true,
            "dataTypeVariable": "DataTypes",
            "skipTable": []
        },
        "tableOptions": {
            "timestamps": false
        }
    }
};
