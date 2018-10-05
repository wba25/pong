// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        ySpeed: 0,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad: function () {
        // add key down and key up event
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);

        this.accUp = false;
        this.accDown = false;
    },

    start() {


    },

    update(dt) {
        if (this.accUp) {
            this.node.y += this.ySpeed * dt;
        } else if (this.accDown) {
            this.node.y -= this.ySpeed * dt;
        }
        //this.node.y += 10 * dt;
    },

    destroy() {
        //cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        //cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
    },

    onKeyDown: function (event) {
        switch (event.keyCode) {
            case cc.KEY.w:
                console.log('Press w key');
                this.accUp = true;
                break;
            case cc.KEY.s:
                console.log('Press s key');
                this.accDown = true;
                break;
        }
    },

    onKeyUp: function (event) {
        switch (event.keyCode) {
            case cc.KEY.w:
                console.log('Release w key');
                this.accUp = false;
                break;
            case cc.KEY.s:
                console.log('Release s key');
                this.accDown = false;
                break;
        }
    }

});
