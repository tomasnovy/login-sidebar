const sidebar = document.getElementById('sidebar');
let loaded = false;

//function openSidebar() {
//  sidebar.classList.toggle('open');
//  
//  if (loaded) {
//    return; 
//  } else {
//    $('#sidebar').load('sidebar.html');
//    loaded = true;
//  } 
//}

document.addEventListener('click', function(event) {
  if (event.target.classList.contains('toggle')) {
    event.preventDefault();
    sidebar.classList.toggle('open');
    

    if (loaded) return;

    $('#sidebar').load('sidebar.html');
    loaded = true;
  }
}, false);
