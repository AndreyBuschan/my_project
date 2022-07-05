area.hidden = true;

document.onkeydown = function (e) {
  if (e.ctrlKey && e.code == 'KeyE'){
    view.hidden = true;
    area.hidden = false;
    area.focus()
    area.innerHTML = view.innerHTML;
    return false;
  }

  if (e.ctrlKey && e.code == 'KeyS'){
    view.hidden = false;
    area.hidden = true;
    view.innerHTML = area.value;
    return false;
  } else if (e.code == 'KeyEscape'){
    view.hidden = false;
    area.hidden = true;
  }
};

let table = document.createElement('table');
let thead = document.createElement('thead');
let tbody = document.createElement('tbody');

table.appendChild(thead);
table.appendChild(tbody);

document.getElementById('body').appendChild(table);

let row_1 = document.createElement('tr');
let heading_1 = document.createElement('th');
heading_1.innerHTML = "№";
let heading_2 = document.createElement('th');
heading_2.innerHTML = "Name";
let heading_3 = document.createElement('th');
heading_3.innerHTML = "Second name";

row_1.appendChild(heading_1);
row_1.appendChild(heading_2);
row_1.appendChild(heading_3);
thead.appendChild(row_1);


let row_2 = document.createElement('tr');
let row_2_data_1 = document.createElement('td');
row_2_data_1.innerHTML = "1";
let row_2_data_2 = document.createElement('td');
row_2_data_2.innerHTML = "Гражданский";
let row_2_data_3 = document.createElement('td');
row_2_data_3.innerHTML = "Кодекс";

row_2.appendChild(row_2_data_1);
row_2.appendChild(row_2_data_2);
row_2.appendChild(row_2_data_3);
tbody.appendChild(row_2);


let row_3 = document.createElement('tr');
let row_3_data_1 = document.createElement('td');
row_3_data_1.innerHTML = "2";
let row_3_data_2 = document.createElement('td');
row_3_data_2.innerHTML = "Уголовный";
let row_3_data_3 = document.createElement('td');
row_3_data_3.innerHTML = "Кодекс";

row_3.appendChild(row_3_data_1);
row_3.appendChild(row_3_data_2);
row_3.appendChild(row_3_data_3);
tbody.appendChild(row_3);


let row_4 = document.createElement('tr');
let row_4_data_1 = document.createElement('td');
row_4_data_1.innerHTML = "3";
let row_4_data_2 = document.createElement('td');
row_4_data_2.innerHTML = "Трудовой";
let row_4_data_3 = document.createElement('td');
row_4_data_3.innerHTML = "Кодекс";

row_4.appendChild(row_4_data_1);
row_4.appendChild(row_4_data_2);
row_4.appendChild(row_4_data_3);
tbody.appendChild(row_4);
