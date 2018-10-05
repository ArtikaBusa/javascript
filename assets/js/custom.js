var no_of_students = 3;
function calculate_score() {
  var total = 0;
  var max   = 0;
  var min   = 300;
  var sum   = 0;
  for(var i = 1; i <= no_of_students; i++){
    sum = (parseInt(document.getElementById("english_" + i).value)  ? parseInt(document.getElementById("english_" + i).value) : 0) +
          (parseInt(document.getElementById("gujarati_" + i).value) ? parseInt(document.getElementById("gujarati_" + i).value) : 0) +
          (parseInt(document.getElementById("hindi_" + i).value)    ? parseInt(document.getElementById("hindi_" + i).value) : 0)

    document.getElementById("total_"+i).innerHTML = sum;
    document.getElementById("average_"+i).innerHTML = (sum/3).toFixed(2) + "%";

    if(max < sum)
      max = sum;
    if(min > sum)
      min = sum;
    total += sum;
  }
  document.getElementById('total').innerHTML=total;
  document.getElementById('max').innerHTML=max;
  document.getElementById('min').innerHTML=min;
  document.getElementById('average').innerHTML=(total/no_of_students).toFixed(2)+"%";
}

function add_new_row(){
  no_of_students = no_of_students + 1;
  var table = document.getElementById("record");
//  var rawcount=table.rows.length;

  var row = table.insertRow(no_of_students);

  var cell1 = row.insertCell(0);
  cell1.align = "center";
  cell1.innerHTML = no_of_students;
  //cell1.innerHTML = parseInt(rowcount) + 1;

  var cell2 = row.insertCell(1);
  cell2.innerHTML="<input type='text' name= 'name " + no_of_students + "' value='' />";

  var cell3 = row.insertCell(2);
  cell3.innerHTML ="<input type='text' onblur='calculate_score();' id='english_" + no_of_students +"'  name='english_"+no_of_students+"'  	value=''/>";

  var cell4 = row.insertCell(3);
  cell4.innerHTML="<input type='text' onblur='calculate_score();' id='gujarati_" + no_of_students +"' name='gujarati_"+no_of_students+"' 	value=''/>";

  var cell5 = row.insertCell(4);
  cell5.innerHTML="<input type='text' onblur='calculate_score();' id='hindi_" + no_of_students+"'    name='hindi_"+no_of_students+"' 		value=''/>";

  var cell6 = row.insertCell(5);
  cell6.align = "right";
  cell6.innerHTML="<output id='total_"+no_of_students+"'>";

  var cell7 = row.insertCell(6);
  cell7.align = "right";
  cell7.innerHTML="<output id='average_"+no_of_students+"'>";

  document.getElementById('no_of_student').innerHTML=no_of_students;
}
function delete_last_row(){

  document.getElementById("record").deleteRow(-1);
  no_of_students -= 1;
  document.getElementById('no_of_student').innerHTML=no_of_students;
  calculate_score();
}
