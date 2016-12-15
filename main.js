var DefineMap = require('can-define/map/map');
var stache = require('can-stache');

require('can-stache-bindings');

var AppVM = DefineMap.extend({
    message: {
        type: 'string',
        value: 'Chat Home'
    },
    addExcitement: function(){
        this.message = this.message + '!';
    }
});

var appVM = new AppVM();

var template = stache.from('template');
var frag = template(appVM);

document.body.appendChild(frag);
document.getElementById('click-this').click();