function mergeImage(bgsrc, src) {
    let canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 512;
    let context = canvas.getContext('2d');
    context.rect(0, 0, canvas.width, canvas.height);
    let bgImg = new Image();
    bgImg.src = bgsrc;    // 背景图url
    bgImg.crossOrigin = 'Anonymous';
    bgImg.onload = () => {
        context.drawImage(bgImg, 0, 0, canvas.width, canvas.height);
        let img = new Image();
        img.src = src;    // 前景图url
        img.crossOrigin = 'Anonymous';
        img.onload = () => {
            context.drawImage(img, 0, 0, canvas.width, canvas.height);
            //let base64 = canvas.toDataURL('image/png');
            //console.log(base64); 
            document.querySelector('#outputImage').setAttribute('src', canvas.toDataURL());
        }
    }
    return;
}