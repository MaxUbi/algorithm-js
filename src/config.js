var path = require('path');

var c  = {
    constant:{
        head_pitch:2,
        body_twist:4,
        sit:0,
        stand:1
    },
    data:path.join(__dirname,'../Data/'),
    sit:0,
    stand:1
};

module.exports = c;
