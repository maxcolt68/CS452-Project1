let app = new PIXI.Application({width: 640, height: 360});
document.body.appendChild(app.view);

let sprite = PIXI.Sprite.from("assets/ball.png");
app.stage.addChild(sprite);

let time = 0.0;

app.ticker.add((delta) =>{
	
	time =+ delta;
	
	sprite.x = 100 + Math.cos(time/50.0) * 100;
});
