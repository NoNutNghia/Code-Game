var cs = ''; //control string

var map = [
  '00000000',
  '000000p0',
  '00000000',
  '00000000',
  '00000000',
  '00000000',
  '0s000000',
  '00000000'  
];


function showMap() {
  var s = '<table>';
  for (var i=0; i<8; i++) { // so dong map.length
    s += '<tr>';
    for (var j=0; j<8; j++) { // length cua '00000000' , 8 , so cot map[i].length
      if (map[i][j] === '0') s += '<td>';
      if (map[i][j] === 'p')  s += '<td class=planet>';
      if (map[i][j] === 's')  s += '<td class=spaceship>';
      s += '</td>';
    }
    s += '</tr>';
  }
  s += '</table>';
  document.getElementById("map").innerHTML = s;
}

showMap();

function addControl(t) { //text
  cs += t;
  showControl();
}

function showControl() {
  var s = '';
  for (var i=0; i<cs.length; i++) { //cs = 'FFCCC';
    if (cs[i] === 'F') //cs[0] == 'F'
      s += "<div class='small move_forward control_button'></div>";
    if (cs[i] === 'C')
      s += "<div class='small clockwise control_button'></div>";
    if (cs[i] === 'W')
      s += "<div class='small counter_clockwise control_button'></div>";
  }
  document.getElementById("code").innerHTML = s;
}
