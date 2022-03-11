To play the game you first press the 'ok' button. You can control your green cube by pressing the space bar. This changes the y direction of the cube, so if it is going down and you press the space bar it goes up. It then stops
when it touched either the ceiling or floor. After that, black cubes will randomly appear on the screen going from the right side at two speeds, a slow speed and a fast speed. If the green cube touches a black cube then you lose. 
At the same time as those cubes appear, yellow cubes will also appear. These are called coin cubes. When your green cube touches a coin cube you collect it. If you collect 15 coins without touching a black cube then you win.


We started by making the canvas in the javascript file. We then created two objetcs, floor and ceiling. The floor object was colored red and the ceiling object was colored blue. We used PIXI.Graphics to make these objects.
We then created the cube object. This is the object that the user controls. We used event handling to control the cube so when the user presses the space bar the y direction speed is multiplied by -1, switching direction. 
The green cube has no x direction speed. The rogue cube and coin cubes are then created the same way as the floor and ceiling. The rogue cube was colored black and the coin cube is colored yellow. We then made the function
sendRogueCube and sendCoinCube. These would generate a random y height on the canvas and a sends the cubes from the right side of the canvas to the left side with a constant x speed. This goves the appearance that the green
cube is moving forward when it is actually not. We then created a function called check collision. This gets the x and y bounds of the green cube and the x and y bounds of the rogue cube, and then if they are ever the same 
then it returns true. the function for checking the collision of the coin cube is the same as the rogue cube. We then made the function tickerLoop. In tickerLoop we use if statements to check the collisions of the cube. If 
checkCollision is true, we add the child loseText to the canvas. The ticker is stopped and the game ends. If checkCoinCollision is true then coinCounter is iterated by 1, and the child 'text' is put on the canvas. This text says 
'You have collected ' + coinCounter + '/15 Coins!'. When checkCoinCollision is true, the child text is also removed from the canvas, so that the variable coinCounter can be printed again, with the new updated coin count. When 
the coinCounter reaches 15 then the child winText is set in the middle of the canvas and the ticker is also stopped so you win the game. We then made the function resetRogueCube and resetCoinCube so whenever the rogue or coin 
cube reaches the farthest left side of the canvas it is removed, and then sendRogueCube or sendCoinCube is called again. The ticker runs ever frame so all of tickerLoop is checked every frame.
