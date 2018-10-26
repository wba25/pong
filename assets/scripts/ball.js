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
        initialVectorX: 0,
        initialVectorY: 0
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad: function() {
        //var moveLeft = cc.moveTo(2,cc.p(-1000, 0));
        //this.node.runAction(moveLeft);

        //var rigidbody = this.node.getComponent(cc.RigidBody);

        this.moveBall(this.initialVectorX, this.initialVectorY);
    },
    
    onCollisionEnter: function (other, self) {
        console.log('AAAAAAAAAAAAAAA!');
    },

    moveBall: function (x, y) {
        let rigidbody = this.node.getComponent(cc.RigidBody);
        rigidbody.linearVelocity = cc.v2(x, y);
    },

    start: function () {

    },

    // update (dt) {},
});
