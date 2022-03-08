let plane = "floor";
let yCubeMovement = 0;
let yCubeTarget = 0;

let app = new PIXI.Application({width: 1280, height: 720, backgroundColor: 0x403E3E});
document.body.appendChild(app.view);

let ceiling = new PIXI.Graphics();
let floor = new PIXI.Graphics();

const cube = new PIXI.Container();

let cubeFill = new PIXI.Graphics();
let cubeOutline = new PIXI.Graphics();

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


cube.addChild(cubeOutline);
cube.addChild(cubeFill);


app.stage.addChild(ceiling);
app.stage.addChild(floor);
app.stage.addChild(cube);


 app.ticker.add((delta) =>{
	 if(cube.y != yCubeTarget){
	 		cube.setTransform(cube.x, cube.y + yCubeMovement);
		}
 });


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
