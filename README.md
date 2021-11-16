# etch-a-sketch

Goals of this project:
  1. Create a webpage with a 16x16 grid of square divs using javascript.
  2. Set up a “hover” effect so that the grid divs change color when the mouse passes over them, leaving a (pixelated) trail through the grid like a pen would.
  3. Add a button to the top of the screen that prompts user for a new number of rows x columns. After input is received, the original grid is erased and a new grid is created per the user's input. The new grid shoud occupy the same space on screen as the original grid.
  4. (Optional) Instead of just changing the color of a square from black to white (for example), have each pass through with the mouse change it to a completely random color.
  5. (Optional) Then try having each pass just add another 10% of black to it so that only after 10 passes is the square completely black.

Approaches Taken toward Achieving Each Goal:
  1. Set up a loop to create 16 * 16 new div elements and append them to DOM. Organize divs into grid using CSS Grid, with the number of columns determined by a CSS variable initally assigned to 16.
  2. First, added an eventListener to each div for 'mouseenter' event. Upon the occurrence of mouseenter, change the background color of the div by manipulating styling with javascript. Second, added an eventListener to each div for 'mouseleave' event. Upon the occurence of mouseleave the div reverts back to its original background color after a delay of 1000ms, accomplished using setTimeout().
  3. After user inputs a number, a while loop runs to remove the original grid using removeChild to delete the DOM divs initially generated at page load. Next, the original grid-creation loop runs using the user's input as a parameter and generates the new divs, which are sorted into a grid by targeting and modifying the value of the CSS variable in the grid element. If...else statements are used to require the user's input be an integer between 0 and 101, else the user is prompted again.
  4. A random color generator function chooses the color each square will change to. The generator uses a loop with Math.random() to generate random hexadecimal values, and concatenates those values with '#' into a string and returns that string. This color generator function is assigned as a callback in the mouseenter eventListener.
  5. Tried this one for a few hours and couldn't get it to work. I missed in the instructions that I should use an RGB value, so perhaps that will be easier than with hexadecimal. I found/edited some code that I think should have worked for the shading, but I wasn't able to get it to work with a second mouseenter eventListener (the first mouseenter needs to create a random color, and the subsequent mouseenters should shade that square 10%). I'd like to come back and try to get this to work.
