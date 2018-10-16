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
        maxYspeed: 0,
        accel: 0,
    },

    onLoad: function () {
        this.accUp = false;
        this.accDown = false;

        this.ySpeed = 1;

        this.setInputControl();
    },

    setInputControl: function () {
        var self = this;
        cc.eventManager.addListener({
            event: cc.EventListener.KEYBOARD,
            onKeyPressed: function (keycode, event) {
                switch (keycode) {
                    case cc.KEY.w:
                        self.accUp = true;
                        self.accDown = false;
                        console.log("up");
                        break;
                    case cc.KEY.s:
                        self.accDown = true;
                        self.accUp = false;
                        console.log("down");
                        break;
                }
            },
            onKeyReleased: function (keycode, event) {
                switch (keycode) {
                    case cc.KEY.w:
                        self.accUp = false;
                        break;
                    case cc.KEY.s:
                        self.accDown = false;
                        break;
                }
            }
        }, self.node);
    },



    update: function (dt) {

        //console.log(this.ySpeed);

        if (this.accUp) {
            this.ySpeed += this.accel * dt;
        } else if (this.accDown) {
            this.ySpeed -= this.accel * dt;
        }
        if (Math.abs(this.ySpeed) > this.maxYspeed) {
            // Formula para manter a velocidade constante
            this.ySpeed = this.maxYspeed * (this.ySpeed / Math.abs(this.ySpeed));
        }

        this.node.y += this.ySpeed * dt;

    },


});
