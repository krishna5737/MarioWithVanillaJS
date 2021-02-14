const render = {
    init(gameObj) {
        gameObj.tool.fillStyle = "#2890b9"
        gameObj.tool.fillRect(0, 0, window.innerWidth, window.innerHeight);
        gameObj.tool.drawImage(spriteObj.castle.obj, 40, 40, 200, 150);
        let mario = gameObj.entities.mario;
        gameObj.tool.drawImage(
            mario.sprite.img,
            mario.sprite.srcX,
            mario.sprite.srcY,
            mario.sprite.srcWidth,
            mario.sprite.srcHeight,
            mario.posX,
            mario.posY,
            mario.width,
            mario.height
        );
    }
};

class Game {
    //init function
    init() {
        preLoad().then(function () {
            const canvas = document.querySelector(".board ");
            canvas.height = window.innerHeight;
            canvas.width = window.innerWidth;

            let gameObj = {
                tool: canvas.getContext("2d"),
                entities: {
                    mario: new Mario(spriteObj.spriteSheet.obj, 175, 175, 16, 16)
                },
                canvas: canvas
            };
            render.init(gameObj)
        });
        this.update();
    }

    //update function
    update() {
    }

    //reset the game
    reset() {
        location.reload();
    }
}
const game = new Game();
game.init();