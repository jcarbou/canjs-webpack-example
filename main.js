require('./src/component.js');

var DefineMap = require("can-define/map/map");
var stache = require("can-stache");

var template = stache(require('raw-loader!./main.stache'));

document.body.appendChild(template());
