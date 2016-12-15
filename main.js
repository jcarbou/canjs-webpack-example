var AppVM = can.DefineMap.extend({
    message: {
        type: 'string',
        value: 'Chat Home'
    },
    addExcitement: function(){
        this.message = this.message + '!';
    }
});

var appVM = new AppVM();

var template = can.stache.from('template');
var frag = template(appVM);

document.body.appendChild(frag);
document.getElementById('click-this').click();