var config = require('./config.js');
// stat.stand  bool
// stat.headPitch  number
// stat.bodyTwist  number
function score(gestures) {
    var r = {
        score:0,
        break:false
    };    
    gestures.forEach(function(v){
        switch(v){
        case config.headPitch:
            r.score += config.headPitchScore;
            break;
        case config.bodyTwist:
            r.score += config.bodyTwistScore;
            break;
        case config.stand:
            r.score = 0;
            r.break = true;
            break;
        }
    });        
    return r;
};



module.exports = exports = score;
