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
        playerCode: true,
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
        var keyUP = cc.KEY.w;
        var keyDOWN = cc.KEY.s;
        if (playerCode) {
            keyUP = cc.KEY.up;
            keyDOWN = cc.KEY.down;
        }
        switch (event.keyCode) {
            case keyUP:
                console.log('Press UP key');
                this.accUp = true;
                break;
            case keyDOWN:
                console.log('Press DOWN key');
                this.accDown = true;
                break;
        }
    },

    onKeyUp: function (event) {
        var keyUP = cc.KEY.w;
        var keyDOWN = cc.KEY.s;
        if (playerCode) {
            keyUP = cc.KEY.up;
            keyDOWN = cc.KEY.down;
        }
        switch (event.keyCode) {
            case keyUP:
                console.log('Release UP key');
                this.accUp = false;
                break;
            case keyDOWN:
                console.log('Release DOWN key');
                this.accDown = false;
                break;
        }
    }

});
