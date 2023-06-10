// Get all the links inside the side navigation
const linkss = document.querySelectorAll(".sidenav a");

// Add a click event listener to each link
links.forEach(link => {
  link.addEventListener("click", function(event) {
    event.preventDefault(); // prevent default link behavior
    // Remove the "active" class from all links
    links.forEach(link => {
      link.classList.remove("actives");
    });

    // Add the "active" class to the clicked link
    this.classList.add("actives");
    
    // navigate to the link's URL
    window.location.href = this.href;
  });
});


// const links = document.querySelectorAll(".sidenav a");

// // Add a click event listener to each link
// links.forEach(link => {
//   link.addEventListener("click", function(event) {
//     event.preventDefault(); // prevent default link behavior
//     // Remove the "active" class from all links
//     links.forEach(link => {
//       link.classList.remove("active2");
//     });

//     // Add the "active" class to the clicked link
//     this.classList.add("active2");
    
//     // navigate to the link's URL
//     window.location.href = this.href;
//   });
// });



const header = document.querySelector("header");

window.addEventListener ("scroll",function() {
     header.classList.toggle ("sticky", window.scrollY > 0);
})



// const menuToggle = document.getElementById('menu-toggle');
// const sideNav = document.querySelector('.sidenav');

// menuToggle.addEventListener('click', () => {
//   sideNav.classList.toggle('show');
// });

// const menuToggle = document.getElementById('menu-toggle');
// const sideNav = document.getElementById('.sidenav');

// menuToggle.addEventListener('click', function() {
//   sideNav.classList.toggle('active');
// });







// // Get all the links inside the side navigation
// const links = document.querySelectorAll(".sidenav a");

// // Add a click event listener to each link
// links.forEach(link => {
//   link.addEventListener("click", function(event) {
//     // Prevent default link behavior
//     event.preventDefault();

//     // Get the target element's ID from the link's href attribute
//     const targetId = this.getAttribute("href");

//     // Scroll to the target element
//     const targetElement = document.querySelector(targetId);
//     targetElement.scrollIntoView({ behavior: "smooth" });

//     // Set the "active" class to the clicked link
//     links.forEach(link => {
//       link.classList.remove("active");
//     });
//     this.classList.add("active");
//   });
// });


// const toggle = document.querySelector(".dark-mode-toggle img");
// let originalSrc = toggle.getAttribute("src");
// // const mainContainer = document.querySelector(".main-container");

// toggle.addEventListener("click", () => {
//   document.body.classList.toggle("dark-mode");
//   if (document.body.classList.contains("dark-mode")) {
//     toggle.src = toggle.getAttribute("data-src");
//   } else {
//     toggle.src = originalSrc;
//   }
// });
