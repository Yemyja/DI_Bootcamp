
  let intervalID;
  setTimeout(function() {
    document.getElementById("screensaver").style.display = "block";
    countdown();
}, 5000);

  function myMove() {
    let elem = document.getElementById("animate");
    let container = document.getElementById("container");
    let pos = Math.floor(Math.random() * (container.offsetWidth - elem.offsetWidth));
    let posY = Math.floor(Math.random() * (container.offsetHeight - elem.offsetHeight));
    let dx = (Math.random() - 0.5) * 2; // Random horizontal direction
    let dy = (Math.random() - 0.5) * 2; // Random vertical direction

    function frame() {
      if (pos <= 0 || pos >= container.offsetWidth - elem.offsetWidth) {
        dx = -dx; // Reverse horizontal direction if box hits container boundary
        elem.style.backgroundColor = getRandomColor();
      }
      if (posY <= 0 || posY >= container.offsetHeight - elem.offsetHeight) {
        dy = -dy; // Reverse vertical direction if box hits container boundary
        elem.style.backgroundColor = getRandomColor();
      }
      pos += dx;
      posY += dy;
      elem.style.left = pos + 'px';
      elem.style.top = posY + 'px';
    }
    intervalID = setInterval(frame, 10);
  }

  function stopMove() {
    clearInterval(intervalID);
  }

  function getRandomColor() {
      let letters = '0123456789ABCDEF'; 
      let color = '#';
      for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
      }
    return color;
    }   

// The getRandomColor() function generates a random color using hexadecimal characters.
// First, the function initializes a string called letters that contains all the possible
// hexadecimal digits.
// Next, it initializes a string called color with a hash symbol (#), which is a standard 
// prefix used for defining hexadecimal color codes in HTML and CSS.
// Then, the function enters a loop that iterates 6 times, which is the number of digits 
// needed for a valid hexadecimal color code.
// Within the loop, the function generates a random integer between 0 and 15 using 
// Math.random() and Math.floor(). This integer is used to select a random character 
// from the letters string.
// Finally, the selected character is appended to the color string, and the loop repeats 
// until all 6 digits are generated.
// The function then returns the resulting color string, which represents a random color 
// in hexadecimal format.


  // BONUS: ADD <img id="animate" src="rock.png"> instead of div or inside

    
