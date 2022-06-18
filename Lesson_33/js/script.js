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
    //alert(area.value);
    view.innerHTML = area.value;
    return false;
  } else if (e.code == 'KeyEscape'){
    view.hidden = false;
    area.hidden = true;
  }
};