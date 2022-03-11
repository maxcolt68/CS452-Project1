// Necessary parameters
let plane = "floor";
let yCubeMovement = 0;
let yCubeTarget = 0;
let randomYHeight = Math.floor(Math.random() * -489);
let randomYHeight2 = Math.floor(Math.random() * -489);
let randomCoinYHeight = Math.floor(Math.random() * -489);
//let randomWinYHeight = Math.floor(Math.random() * -489);
let rogueAttackSpeed = Math.floor(Math.random() * 3) + 4;
let rogueAttackSpeed2 = Math.floor(Math.random() * 3) + 4;
let coinAttackSpeed = Math.floor(Math.random() * 6) + 3;
alert("Press 'Ok' to begin! Collect 15 Coins to win the game!");
var coinCounter = 0;
var coinHitFlag = false;
let text = new PIXI.Text('You have collected ' + coinCounter + '/15 Coins!',{fontFamily : 'Comic Sans MS', fontSize: 24, fill : 0xffA500, align : 'center'});

// Initialize applicationl
let app = new PIXI.Application({width: 1280, height: 720, backgroundColor: 0x403E3E});
document.body.appendChild(app.view);


let rogueCube = new PIXI.Graphics();
rogueCube.beginFill(0x000000);
rogueCube.drawRect(1280, 564, 81, 81);
rogueCube.endFill();
app.stage.addChild(rogueCube);

let rogueCube2 = new PIXI.Graphics();
rogueCube2.beginFill(0x000000);
rogueCube2.drawRect(1280, 564, 81, 81);
rogueCube2.endFill();
app.stage.addChild(rogueCube2);

let coinCube = new PIXI.Graphics();			//create objective cube 'coin'
coinCube.beginFill(0xFFFF00);
coinCube.drawRect(1280, 564, 81, 81);
coinCube.endFill();
app.stage.addChild(coinCube);

let winCube = new PIXI.Graphics();			//create win condition cube
winCube.beginFill(0xFF5F1F);
winCube.drawRect(1280, 564, 81, 81);
winCube.endFill();
app.stage.addChild(winCube);

function resetRogueCube(){
	rogueCube.setTransform(0, 0);
	randomYHeight = Math.floor(Math.random() * -489);
	rogueAttackSpeed = Math.floor(Math.random() * 3) + 4;

}

function resetRogueCube2(){
	rogueCube2.setTransform(0, 0);
	randomYHeight2 = Math.floor(Math.random() * -489);
	rogueAttackSpeed2 = Math.floor(Math.random() * 3) + 4;

}

function resetCoinCube(){										//reset coin cube
	coinHitFlag = false;
	coinCube.setTransform(0, 0);
	randomCoinYHeight = Math.floor(Math.random() * -489);
	coinAttackSpeed = Math.floor(Math.random() * 6) + 3;

	if(coinCounter == 1){

		app.stage.removeChild(text);
		text = new PIXI.Text('You have collected ' + coinCounter + '/15 Coin!',{fontFamily : 'Comic Sans MS', fontSize: 24, fill : 0xffA500, align : 'center'});
	}
	app.stage.addChild(text);


}

/*
function resetWinCube(){										//reset win cube
	winCube.setTransform(0, 0);
	randomWinYHeight = Math.floor(Math.random() * -489);

}
*/

function sendRogueCube(){
	if(rogueCube.getBounds().x < -81){
		resetRogueCube();
	}
	else{
		rogueCube.setTransform(rogueCube.x - rogueAttackSpeed, randomYHeight);
	}
}

function sendRogueCube2(){
	if(rogueCube2.getBounds().x < -81){
		resetRogueCube2();
	}
	else{
		rogueCube2.setTransform(rogueCube2.x - rogueAttackSpeed2, randomYHeight2);
	}
}

function sendCoinCube(){
	if(coinCube.getBounds().x < -81){
		resetCoinCube();
	}
	else{
		coinCube.setTransform(coinCube.x - coinAttackSpeed, randomCoinYHeight);
	}
}

/*
function sendWinCube(){
	if(winCube.getBounds().x < -81){
		resetWinCube();
	}
	else{
		WinCube.setTransform(winCube.x - attackSpeed, randomWinYHeight);
	}
}
*/





// Create ceiling, floor, and player cube objects
let ceiling = new PIXI.Graphics();
let floor = new PIXI.Graphics();
// Cube is a container to make cube fill and outline
const cube = new PIXI.Container();

// Cube color fill and outline
let cubeFill = new PIXI.Graphics();
let cubeOutline = new PIXI.Graphics();

// Define all colors and shape sizes
ceiling.beginFill(0x0B7CDF);
ceiling.drawRect(0, 0, 1280, 75);
ceiling.endFill();

floor.beginFill(0xDF0B15);
floor.drawRect(0, 720-75, 1280, 75);
floor.endFill();

cubeFill.beginFill(0x78E73A);
cubeFill.drawRect(13, 720-75-77, 75, 75);
cubeFill.endFill();

cubeOutline.beginFill(0x000000);
cubeOutline.drawRect(10, 720-75-80, 81, 81);
cubeOutline.endFill();

// Create cube with fill and outline
cube.addChild(cubeOutline);
cube.addChild(cubeFill);


//add coin counter

// Add elements to stage
app.stage.addChild(ceiling);
app.stage.addChild(floor);
app.stage.addChild(cube);
//app.stage.addChild(text);

//
function checkCollision(){
	rogueCubeMinX = rogueCube.getBounds().x;
	rogueCubeMaxX = rogueCube.getBounds().x + rogueCube.getBounds().width;
	rogueCubeMinY = rogueCube.getBounds().y;
	rogueCubeMaxY = rogueCube.getBounds().y + rogueCube.getBounds().height;

	cubeMinX = cube.getBounds().x;
	cubeMaxX = cube.getBounds().x + cube.getBounds().width;
	cubeMinY = cube.getBounds().y;
	cubeMaxY = cube.getBounds().y + cube.getBounds().height;

	// TODO: Check if cubes are touching
	// if(cubeMinX < rogueCubeMinX && cubeMaxX > rogueCubeMinX && cubeMinY < rogueCubeMinY && cubeMaxY > rogueCubeMinY){
	// 	return true;
	// }
	// else{
	// 	return false;
	// }

	if(cubeMinX >= rogueCubeMaxX || rogueCubeMinX >= cubeMaxX){
		return false;
	}

	if(cubeMaxY <= rogueCubeMinY || rogueCubeMaxY <= cubeMinY){
		return false;
	}
	else{
		return true;
	}

}

function checkCollision2(){
	rogueCubeMinX = rogueCube2.getBounds().x;
	rogueCubeMaxX = rogueCube2.getBounds().x + rogueCube2.getBounds().width;
	rogueCubeMinY = rogueCube2.getBounds().y;
	rogueCubeMaxY = rogueCube2.getBounds().y + rogueCube2.getBounds().height;

	cubeMinX = cube.getBounds().x;
	cubeMaxX = cube.getBounds().x + cube.getBounds().width;
	cubeMinY = cube.getBounds().y;
	cubeMaxY = cube.getBounds().y + cube.getBounds().height;

	// TODO: Check if cubes are touching
	// if(cubeMinX < rogueCubeMinX && cubeMaxX > rogueCubeMinX && cubeMinY < rogueCubeMinY && cubeMaxY > rogueCubeMinY){
	// 	return true;
	// }
	// else{
	// 	return false;
	// }

	if(cubeMinX >= rogueCubeMaxX || rogueCubeMinX >= cubeMaxX){
		return false;
	}

	if(cubeMaxY <= rogueCubeMinY || rogueCubeMaxY <= cubeMinY){
		return false;
	}
	else{
		return true;
	}

}

function checkCoinCollision(){
	coinCubeMinX = coinCube.getBounds().x;
	coinCubeMaxX = coinCube.getBounds().x + coinCube.getBounds().width;
	coinCubeMinY = coinCube.getBounds().y;
	coinCubeMaxY = coinCube.getBounds().y + coinCube.getBounds().height;

	cubeMinX = cube.getBounds().x;
	cubeMaxX = cube.getBounds().x + cube.getBounds().width;
	cubeMinY = cube.getBounds().y;
	cubeMaxY = cube.getBounds().y + cube.getBounds().height;

	if(cubeMinX >= coinCubeMaxX || coinCubeMinX >= cubeMaxX){
		return false;
	}

	if(cubeMaxY <= coinCubeMinY || coinCubeMaxY <= cubeMinY){
		return false;
	}
	else{
		return true;
	}
}

/*
function checkWinCollision(){
	winCubeMinX = winCube.getBounds().x;
	winCubeMaxX = winCube.getBounds().x + winCube.getBounds().width;
	winCubeMinY = winCube.getBounds().y;
	winCubeMaxY = winCube.getBounds().y + winCube.getBounds().height;

	cubeMinX = cube.getBounds().x;
	cubeMaxX = cube.getBounds().x + cube.getBounds().width;
	cubeMinY = cube.getBounds().y;
	cubeMaxY = cube.getBounds().y + cube.getBounds().height;

	if(cubeMinX >= winCubeMaxX || winCubeMinX >= cubeMaxX){
		return false;
	}

	if(cubeMaxY <= winCubeMinY || winCubeMaxY <= cubeMinY){
		return false;
	}
	else{
		return true;
	}

}
*/


app.ticker.add(tickerLoop);


//app.ticker.add((delta) =>
 function tickerLoop(){
	 sendRogueCube();
	 if(coinCounter > 9){
		 sendRogueCube2();
	 }

	 sendCoinCube();
	 if(checkCollision() || checkCollision2()){
		 loseText = new PIXI.Text("You Lost!", {fontFamily : 'Comic Sans MS', fontSize: 50, fill : 0xAD0205, align : 'center'});
 		 loseText.anchor.set(0.5);
 		 loseText.setTransform(640, 360);
		 app.stage.addChild(loseText);
		 app.ticker.stop();
	 }
	 else if( !coinHitFlag && checkCoinCollision() ){
		 	coinHitFlag = true;
		 	coinCounter++;
			app.stage.removeChild(text);
			text = new PIXI.Text('You have collected ' + coinCounter + '/15 Coins!',{fontFamily : 'Comic Sans MS', fontSize: 24, fill : 0xffa500, align : 'center'});
			resetCoinCube();



	 }
	 if(cube.y != yCubeTarget){
	 		cube.setTransform(cube.x, cube.y + yCubeMovement);
		}

	if(coinCounter >= 15){
		winText = new PIXI.Text("You Won!", {fontFamily : 'Comic Sans MS', fontSize: 50, fill : 0x148516, align : 'center'});
		winText.anchor.set(0.5);
		winText.setTransform(640, 360);
		app.stage.addChild(winText);
		app.ticker.stop();
	}
 }


// Handle button presses
function buttonHandler(event){
	let key = event.key;

	if(key == " "){
		if(plane == "floor"){
			plane = "ceiling";
			yCubeTarget = -490;
			yCubeMovement = -5;
		}
		else if(plane == "ceiling"){
			plane = "floor";
			yCubeTarget = 0;
			yCubeMovement = 5;
		}
	}
	else if(key == "d"){
		console.log("CUBE: ", cube.getBounds());
		console.log("ROGUE: ", rogueCube.getBounds());
	}
}
