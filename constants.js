const castleImage = new Image();
const cloudsImage = new Image();
const mountainImage = new Image();
const spriteSheetImage = new Image();
const gutterImage = new Image();
const baseImageSrc = "./assets/sprites/";


const marioPositions =  {
    "type": "mario",
    "x": 652,
    "y": 4,
    "w": 14,
    "h": 18
};

const spriteObj = {
    castle: {
        obj: castleImage,
        imageSrc: "castle.png"
    },
    clouds: {
        obj: cloudsImage,
        imageSrc: "clouds.png"
    },
    mountain: {
        obj: mountainImage,
        imageSrc: "mountain.png"
    },
    spriteSheet: {
        obj: spriteSheetImage,
        imageSrc: "spriteSheet.png"
    },
    gutter: {
        obj: gutterImage,
        imageSrc: "gutter.png"
    },

};