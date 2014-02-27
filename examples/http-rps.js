
var chart = require('ascii-chart');
var clear = require('clear');

var data = [];
var n = 0;

exports['request:end'] = function(trace){
  n++;
};

setInterval(function(){
  var w = 130;

  data.push(n);

  n = 0;

  clear();
  console.log(chart(data, { width: w }));
}, 100);
