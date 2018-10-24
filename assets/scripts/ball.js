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
        
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad: function() {
        //var moveLeft = cc.moveTo(2,cc.p(-1000, 0));
        //this.node.runAction(moveLeft);

        //var rigidbody = this.node.getComponent(cc.RigidBody);

        let rigidbody = this.node.getComponent(cc.RigidBody);
        var velocity = rigidbody.linearVelocity;
        rigidbody.linearVelocity = cc.v2(0, -1000);
        console.log(":D This is: "+velocity);
    },

    moveBall: function () {
        
    },

    start: function () {

    },

    // update (dt) {},
});
