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

    onLoad: function () {
        // Habilita gerenciamento da fisica
        cc.director.getPhysicsManager().enabled = true;
        cc.director.getPhysicsManager().gravity = cc.v2(); // Remove gravidade

        // Habilita gerenciamento de colissoes
        cc.director.getCollisionManager().enabled = true;
        cc.director.getCollisionManager().enabledDrawBoundingBox = true;
        cc.director.getCollisionManager().enabledDebugDraw = true;
        
    },

    start: function () {

    },

    // update (dt) {},
});
