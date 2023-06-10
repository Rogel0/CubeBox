function toggleSidebar() {
    var sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('open');
  }

  var hamburger = document.querySelector('.toggle-btn');
var previousScrollPosition = window.pageYOffset || document.documentElement.scrollTop;

window.addEventListener('scroll', function() {
var currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;

if (currentScrollPosition > previousScrollPosition) {
  hamburger.style.display = 'none';
} else {
  hamburger.style.display = 'block';
}

previousScrollPosition = currentScrollPosition;
});




// function toggleDarkMode() {
//   var mainContainer = document.querySelector('.main-container');
//   var toggleImage = document.getElementById('dark-mode-toggle');

//   mainContainer.classList.toggle('dark-mode');

//   // Change the toggle image based on dark mode state
//   if (mainContainer.classList.contains('dark-mode')) {
//     toggleImage.src = 'IMAGES\moon.png';
//   } else {
//     toggleImage.src = 'IMAGES\sun.png';
//   }
// }






