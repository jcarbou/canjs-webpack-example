var canViewModel = require("can-view-model");
var Component = require("can-component");
var DefineMap = require("can-define/map/map");
var stache = require("can-stache");
var template = stache(require('raw-loader!./component.stache'));

var ComponentViewModel = DefineMap.extend({
  message: {value: 'Inserted was not called'}
});

module.exports = Component.extend({
  tag: 'example-component',
  view: template,
  ViewModel: ComponentViewModel,
  events: {
    inserted: function() {
      var viewModel = canViewModel(this.element);
      viewModel.message = 'Inserted was called';
    }
  }
});
