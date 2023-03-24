<!-- ADD README -->

<!-- 
1:) We declare two variables currentColor and isMousePressed. currentColor will 
store the currently selected color and isMousePressed is a boolean variable that 
tracks whether the mouse button is currently pressed or not.

2.) Select the clear button and the main canvas by querying the DOM using 
document.querySelector() and document.getElementById().

3.) We then call the generateColors(), listenToMain(), and listenToClearButton() functions.

4.) listenToClearButton() adds a click event listener to the clear button that calls the clearCanvas() 
function.

5.) clearCanvas() sets currentColor to null and sets the background color of all 
the div elements inside the main canvas to white.

6.) listenToMain() adds event listeners to the main canvas for mousedown, 
mousemove, and mouseup events, which call the handleClick(), handleMove(), 
and handleMouseRelease() functions respectively.

7.) handleClick() sets isMousePressed to true if a color has been selected.

8.) handleMouseRelease() sets isMousePressed to false.

9.) handleMove(e) changes the color of the div element the mouse is currently 
over to the selected color if the mouse is pressed.

10.) generateColors() function is responsible for randomly generating colors 
for each color swatch on the screen. It does this by selecting all elements with 
the .color class, generating a random hex color, and setting that as the 
backgroundColor of the element. It also adds an event listener to each color 
swatch that calls the setCurrentColor() function when clicked.

11.) The generateRandomColor() function is a helper function that is called by the 
generateColors() function in the script to randomly generate a hex color code.
The function uses Math.random() to generate a random decimal number between 0 and 1. 
This decimal number is then multiplied by 16777215, which is the decimal equivalent 
of the maximum hex color value FFFFFF. The result is then rounded down 
using Math.floor() to get a whole number, which is then converted to a hex string 
using the toString(16) method. The resulting string is then concatenated with 
the # symbol to create a valid hex color code.
The returned hex color code is then used to set the backgroundColor of a color 
swatch in the generateColors() function, providing a randomly generated color for 
the user to select.

12.) setCurrentColor() function sets the currentColor variable to the color of the 
clicked color swatch, and sets the background color of the clear button to 
that color.







colorDiv.dataset.color = randomColor; is a line of code in the generateColors() function that 
sets the color attribute of the data property on the colorDiv element to the randomly generated 
randomColor.

The data attribute is a way of storing custom data on an HTML element. It allows developers to store 
non-standard data on an element without using non-standard attributes or extra properties on the 
element object. By convention, data attributes are prefixed with the word data-.

In this case, the color attribute is being used to store the hex value of the randomly generated color 
for later use in the setCurrentColor() function. When a color swatch is clicked, setCurrentColor() 
reads the color attribute from the data property of the clicked element to determine the selected color.

By using the data attribute to store this information, the script can keep track of which color the user 
has selected without having to use a separate variable or modify the backgroundColor property of the color 
swatch element itself.


const chosenColor = e.target.dataset.color; is a line of code in the setCurrentColor() function that 
retrieves the value of the color attribute from the data property of the clicked element.

When a user clicks on a color swatch, the click event is fired and the setCurrentColor() function is 
called. The e parameter in the function represents the Event object that was triggered by the click.

The target property of the Event object represents the element that was clicked, which in this case is 
the color swatch. The dataset property of the element contains all of the data attributes associated 
with the element. The color attribute was set in the generateColors() function to store the hex value 
of the color, and so e.target.dataset.color retrieves this value and assigns it to the 
chosenColor variable.

By retrieving the selected color from the data attribute of the clicked element, the script 
can keep track of the currently selected color without having to use a separate variable or modify 
the backgroundColor property of the color swatch element itself. -->