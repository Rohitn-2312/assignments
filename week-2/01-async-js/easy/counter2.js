// Counter without setInterval
// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.

// (Hint: setTimeout)
// Function to update the counter
function updateCounter(count) {
    console.log(count); 

  function incrementCounter(count) {
    count++; 

    updateCounter(count); 
    setTimeout(function() {
      incrementCounter(count); 
    }, 1000);
  }
  
  incrementCounter(0);
  
