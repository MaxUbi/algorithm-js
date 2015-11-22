// read all the data, parse, feed into the svm training, then save the result mode

var csv = require('node-csv');
var fs = require('fs');
var path = require('path');
var config = require('./config.js');
var jsonfile = require('jsonfile');
var mode = 'develop';           // correctness, all

var train_file = path.join(config.data, mode+'_train_set.csv');
var test_file = path.join(config.data, mode+'_test_set.csv');

var train_transformed_file = path.join(config.data,mode+'_train_set.json');
var test_transformed_file = path.join(config.data,mode+'_test_set.json');


var fields = [
    'head_xin3 ',
    'head_yin3',
    'head_zin3 ',
  'shoulder_center_xin3 ',
  'shoulder_center_yin3 ',
  'shoulder_center_zin3 ',
  'shoulder_left_xin3 ',
  'shoulder_left_yin3 ',
  'shoulder_left_zin3 ',
  'shoulder_right_xin3 ',
  'shoulder_right_yin3 ',
  'shoulder_right_zin3 ',
  'elbow_left_xin3 ',
  'elbow_left_yin3 ',
  'elbow_left_zin3 ',
  'elbow_right_xin3 ',
  'elbow_right_yin3 ',
  'elbow_right_zin3 ',
  'wrist_left_xin3 ',
  'wrist_left_yin3 ',
  'wrist_left_zin3 ',
  'wrist_right_xin3 ',
  'wrist_right_yin3 ',
  'wrist_right_zin3 ',
  'hand_left_xin3 ',
  'hand_left_yin3 ',
  'hand_left_zin3 ',
  'hand_right_xin3 ',
  'hand_right_yin3 ',
  'hand_right_zin3',
  'spine_xin3 ',
  'spine_yin3 ',
  'spine_zin3 ',
  'hip_center_xin3 ',
  'hip_center_yin3 ',
  'hip_center_zin3 ',
  'hip_left_xin3 ',
  'hip_left_yin3 ',
  'hip_left_zin3 ',
  'hip_right_xin3 ',
  'hip_right_yin3 ',
  'hip_right_zin3 ',
  'knee_left_xin3 ',
  'knee_left_yin3 ',
  'knee_left_zin3 ',
  'knee_right_xin3 ',
  'knee_right_yin3 ',
  'knee_right_zin3 ',
  'ankle_left_xin3 ',
  'ankle_left_yin3 ',
  'ankle_left_zin3 ',
  'ankle_right_xin3 ',
  'ankle_right_yin3 ',
  'ankle_right_zin3 ',
  'foot_left_xin3 ',
  'foot_left_yin3 ',
  'foot_left_zin3 ',
  'foot_right_xin3 ',
  'foot_right_yin3 ',
  'foot_right_zin3',
  'dis',
  'angle',
  'di_hum',
  'class' ];

var wanted_fields = [
    'head_xin3 ',
    'head_yin3',
    'head_zin3 ',
    'shoulder_center_xin3 ',
    'shoulder_center_yin3 ',
    'shoulder_center_zin3 ',
    'shoulder_left_xin3 ',
    'shoulder_left_yin3 ',
    'shoulder_left_zin3 ',
    'shoulder_right_xin3 ',
    'shoulder_right_yin3 ',
    'shoulder_right_zin3 ',
    'elbow_left_xin3 ',
    'elbow_left_yin3 ',
    'elbow_left_zin3 ',
    'elbow_right_xin3 ',
    'elbow_right_yin3 ',
    'elbow_right_zin3 ',
    'spine_xin3 ',
    'spine_yin3 ',
    'spine_zin3 ',
    'hip_center_xin3 ',
    'hip_center_yin3 ',
    'hip_center_zin3 ',
    'hip_left_xin3 ',
    'hip_left_yin3 ',
    'hip_left_zin3 ',
    'hip_right_xin3 ',
    'hip_right_yin3 ',
    'hip_right_zin3 '
];

var train_data = [];
var test_data = [];


var transform = function(data){
    console.log(data);
};


console.log('Now Parse Train Data');
csv.each(train_file).on('data', transform).on('end', function() {
    console.log('Train Data Parsed and Transformed');
    console.log('Writing Parsed Test Data into file');
    jsonfile.writeFile(train_transformed_file, train_data, function (err) {
        console.log('Parsed Train Data Writed');
    });    
});

console.log('Now Parse Test Data');
csv.each(test_file).on('data', transform).on('end', function() {
    console.log('Test Data Parsed and Transformed');
    console.log('Writing Parsed Test Data into file');
    jsonfile.writeFile(test_transformed_file, test_data, function (err) {
        console.log('Parsed Test Data Writed');
    });
});




