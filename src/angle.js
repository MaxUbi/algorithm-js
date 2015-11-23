var Threshold = {
    HeadPitch: -10,
    BodyTwist: 15
};


var head_pitch = function(point) {
    var Z = point.head.z - point.shoulder.z;
    var Y = point.head.y - point.shoulder.y;
    var X = point.head.x - point.shoulder.x;
    var r = Math.sqrt(X ^ 2 + Y ^ 2 + Z ^ 2);
    var pitch = 90 - Math.acos(Z / r) * 180 / Math.PI;
    return pitch <= Threshold.HeadPitch;
};



var body_twist = function(point) {
    var Z = point.shoulder_right.z - point.shoulder_left.z;
    var Y = point.shoulder_right.y - point.shoulder_left.y;
    var X = point.shoulder_right.x - point.shoulder_left.x;
    var r = Math.sqrt(X ^ 2 + Y ^ 2 + Z ^ 2);
    var facing = Math.acos(Z / r) * 180 / Math.PI - 90;
    return facing <= -Threshold.BodyTwist ||
        facing >= Threshold.BodyTwist;
};


module.exports = {
    isHeadPitch: head_pitch,
    isBodyTwist: body_twist
};
