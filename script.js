console.log("Script Running");

// Create a helper function that moves a penguin across the grid
// The function should accept a penguin element and a column position
// Only allow movement while the column is less than or equal to 6

function movePenguin(penguin, position) {
  if (position <= 6) {
    penguin.style.gridColumnStart = position;
  }                 

}
// Create position variables for each penguin and set them all to 1
let tuxPosition = 1;
let daisyPosition = 1;
let rockyPosition = 1;    


// Query selectors for all buttons and penguins go here

const tux = document.querySelector(".tux");
const daisy = document.querySelector(".daisy");
const rocky = document.querySelector(".rocky"); 

// Write the function that moves Tux forward
// Increase the tux position
// Call the helper function to update the penguin position
// Call the winner check function
function moveTux() {
  tuxPosition += 1;
  movePenguin(tux, tuxPosition);
  checkWinner();
} 


// Write the function that moves Daisy forward
function moveDaisy() {
  daisyPosition += 1;
  movePenguin(daisy, daisyPosition);
  checkWinner();
} 


// Write the function that moves Rocky forward
function moveRocky() {
  rockyPosition += 1;
  movePenguin(rocky, rockyPosition);
  checkWinner();
} 



// Write a function that checks if a penguin reached column 6
// If so, display the winner message (example: "Tux got the fish! 🐟")
// Disable all buttons when a winner is found
function checkWinner() {
  if (tuxPosition === 6) {
    alert("Tux got the fish! 🐟");
    disableButtons();
  } else if (daisyPosition === 6) {
    alert("Daisy got the fish! 🐟");
    disableButtons();
  } else if (rockyPosition === 6) {
    alert("Rocky got the fish! 🐟");
    disableButtons();
  } 


// Add event listeners for each button
// Each button should trigger its own movement function
}function disableButtons() {
  document.querySelectorAll("button").forEach(button => {
    button.disabled = true;
  });
} 
document.querySelector(".tux-button").addEventListener("click", moveTux);
document.querySelector(".daisy-button").addEventListener("click", moveDaisy);
document.querySelector(".rocky-button").addEventListener("click", moveRocky);   
  