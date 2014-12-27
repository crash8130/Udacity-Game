// Enemies our player must avoid
var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.speed = enemySpeed[Math.round(Math.random()* (enemySpeed.length -1))];
    this.startX = -(this.speed * 1.5);
    this.startY = enemyLocation[Math.round(Math.random() * (enemyLocation.length -1))];
    this.x = this.startX;
    this.y = this.startY;
    
}
var enemySpeed = [100,150,200];
var enemyLocation = [60,140,220];
// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    if (this.x > 500) {
        this.x = this.startX;
    }
    this.x = this.x + this.speed * dt;
    Enemy.prototype.checkForCollision();
}

Enemy.prototype.checkForCollision = function () {
  for (i in allEnemies) {
    if (player.x >= (allEnemies[i].x-35) & player.x <= (allEnemies[i].x + 35))   {
        if (player.y >= (allEnemies[i].y -5) & player.y <= (allEnemies[i].y + 5)) {
        playerHit();
     }
    }
  }
}


// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function () {
    this.sprite = 'images/char-boy.png';
    this.x = 200;
    this.y = 380;
    playerLives = 3;
}

Player.prototype.update = function(dt) {
    this.x * dt; 
    this.y * dt;

}

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}
Player.prototype.handleInput = function(playerMove) {
    if (playerMove == 'left' && this.x > 0) {
            this.x -= 100;
        }
    else if (playerMove == 'right' && this.x < 400) {
            this.x += 100;
        }
    else if (playerMove == 'up' && this.y -80 >30) {
            this. y -= 80;
        }
    else if (playerMove == 'up' && this.y -80 < 30) {
             this.x = 200;
             this.y = 380;
            }
    else if (playerMove == 'down' && this.y +80 < 400) {
            this.y += 80;
        }

}

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var enemy1 = new Enemy;
var enemy2 = new Enemy;
var enemy3 = new Enemy;
var allEnemies = [enemy1, enemy2, enemy3];
var player = new Player;

var playerHit = function () {
    playerLives -= 1;
    player.x = 200;
    player.y = 380;
    if (playerLives < 1) {
        console.log("End of Game");
    }

}
    

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
