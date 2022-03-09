// Necessary parameters
let plane = "floor";
let yCubeMovement = 0;
let yCubeTarget = 0;
randomYHeight = Math.floor(Math.random() * -489);

// Initialize application
let app = new PIXI.Application({width: 1280, height: 720, backgroundColor: 0x403E3E});
document.body.appendChild(app.view);

let rogueCube = new PIXI.Graphics();
rogueCube.beginFill(0x000000);
rogueCube.drawRect(1280, 564, 81, 81);
rogueCube.endFill();
app.stage.addChild(rogueCube);


function sendRogueCube(){
	rogueCube.setTransform(rogueCube.x - 5, randomYHeight);
}



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

// Add elements to stage
app.stage.addChild(ceiling);
app.stage.addChild(floor);
app.stage.addChild(cube);

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
	if( false ){
		return true;
	}
	else{
		return false;
	}
}

// Loop
 app.ticker.add((delta) =>{
	 if(cube.y != yCubeTarget){
	 		cube.setTransform(cube.x, cube.y + yCubeMovement);
		}
		sendRogueCube();
		checkCollision();

 });

// Handle button presses
function buttonHandler(event){
	let key = event.key;
	console.log(key)

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
}
