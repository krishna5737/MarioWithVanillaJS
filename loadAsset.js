const preLoad = function () {

    return new Promise(function (resolve, reject) {
        let promiseList = [];
        for(var asset in spriteObj){
            var imgSrc = baseImageSrc + spriteObj[asset].imageSrc;
            spriteObj[asset].obj.src = imgSrc;
            promiseList.push(
                new Promise(function (resolve, reject) {
                    spriteObj[asset].obj.addEventListener("load", function () {
                        resolve();
                    })
                })
            )
        }

        let SpritesPromise = Promise.all(promiseList);
        SpritesPromise.then(function () {
            resolve();
        })
    })
}
