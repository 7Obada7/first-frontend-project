//function for the banner at the top
  var closeBtn = document.getElementById("closeBtn");
  var banner = document.querySelector(".banner2");

  closeBtn.addEventListener("click", function() {
    banner.style.display = "none";
  });
  let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
}
// Favorite counter function
const heartButtons = document.querySelectorAll('[id^="checkbox"]');
const counter = document.querySelector('.counter');
const heartIcon = document.querySelector('.fav svg');

// Add event listeners to all heart buttons
heartButtons.forEach((heartButton) => {
  heartButton.addEventListener('click', toggleCounter);
});

function toggleCounter() {
  const currentValue = parseInt(counter.textContent);

  // Determine whether the checkbox was checked or unchecked
  const checkboxChecked = this.checked;

  // Update the counter value based on the checkbox state
  counter.textContent = checkboxChecked ? currentValue + 1 : currentValue - 1;

  // Check the updated counter value and update the heart icon color
  if (parseInt(counter.textContent) > 0) {
    heartIcon.classList.add('red-heart'); // Apply a class to make the heart red
  } else {
    heartIcon.classList.remove('red-heart'); // Remove the class if counter is 0
  }
}




