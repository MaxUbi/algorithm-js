var config = require('./config.js'),
    util = require('./util.js');



// stat.stand  bool
// stat.headPitch  number
// stat.bodyTwist  number
function series(gestures) {
    var FrameRate = config.pointsPerSecond;
    var r = [];
    var bt = 0,
        hp = 0,
        st = 0;
    for(var i = 0;i<gestures.length;i++){
        var v = gestures[i];        
        if(util.hasHeadPitch(v)){
            hp += 1;
            bt = 0;
            st = 0;
            if(hp>= FrameRate){
                r.push(config.headPitch);
                hp = 0;
            }
        }
        if(util.hasBodyTwist(v)){
            bt += 1;
            hp = 0;
            st = 0;
            if(bt>= FrameRate){
                r.push(config.bodyTwist);
                bt = 0;
            }
        }
        if(util.isStand(v)){
            st += 1;
            hp = 0;
            bt = 0;
            if(st>= FrameRate){
                r.push(config.stand);
                st = 0;
            }
        }
    }
    return r;    
};
module.exports = exports = series;
