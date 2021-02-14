class Sprite {
    constructor(spriteOptions) {
        this.img = spriteOptions.img;
        this.srcX = spriteOptions.srcX;
        this.srcY = spriteOptions.srcY;
        this.srcHeight = spriteOptions.srcHeight;
        this.srcWidth = spriteOptions.srcWidth;
    }
}

class Entity {
    constructor(entityOptions) {
        this.sprite = entityOptions.sprite;
        this.type = entityOptions.type;
        this.posX = entityOptions.posX;
        this.posY = entityOptions.posY;
        this.width = entityOptions.width;
        this.height = entityOptions.height;
    }

}

class Mario extends Entity {
    constructor(spriteSheet, posX, posY, width, height) {
        let Img = new Sprite({
            img: spriteSheet,
            srcX: marioPositions.x,
            srcY: marioPositions.y,
            srcHeight: marioPositions.h,
            srcWidth: marioPositions.w,
        })
        super({
            sprite: Img,
            type: marioPositions.type,
            posX: posX,
            posY: posY,
            width: width,
            height: height
        })
    }
}