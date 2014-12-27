var Enemy = funtion () {
	this.sprite = 'images.enemy-bug.png'; //image of sprite
	this.enemyY = [60,145,230]; // Y location of enemies
	this.x = this.startPosX(); //calls function to generate start location of x
	this.y = this.startPosY();//calls function to generate start location of y
	this.speed = [30,100,170,250,320,500]; //speeds for enemies
}

Enemy.prototype.startPosY = function () {
	var startY = this.enemyY[Math.round(Math.random()*2)]; //randomly generates y starting position
	return startY;
}

Enemy.prototype.startPosX() =  function () {
	var stratX = -(Math.round(Math.random()*400)); //randomly generates x starting position
	return startX;
}

// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    this.x += this.speed[Math.round(Math.random()*5)]*dt;
    //If our enemies move off the screen, restart them again at the beginning.
    if(this.x > 500) {
        this.x = this.startPosX();
        this.y = this.startPosY();
    }
}


Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y); //draws the enemy on the screen
}


//Player Class

var Player = function() {
     this.sprite = 'images/char-boy.png';
    this.playerX = [100,200,300,400]; //an array of places along the x axais for the player to martarialize
    this.playerY = [300,400]; //an array of places along the y axais for the player to martailize
    this.x = this startPosx();
    this.y = this.startPosY();
}

Player.prototype.startPosX = function () {
	var startX = this.playerX[Math.round(Math.random()*3)];
	return startX;
}

Player.prototype.startPosY =  function() {
	var startY = this.playerY[Math.round(Math.random())];
	return startY;
}

Player.prototype.update = function(dt) {
	this.x*dt;
	this.y*dt;
}

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

Player.prototype.handleInput = function (num) {
    //if statements prevent our player from falling off the game board.
    switch(num) {
        case 'left':
            if(this.x > 15)
            this.x-=100;
            break;
        case 'up':
            if(this.y > -5)
            this.y-=90;
            break;
        case 'right':
            if(this.x < 400)
            this.x+=100;
            break;
        case 'down':
            if(this.y < 375)
            this.y+=90;
            break;
        default:
            return;
    }
}