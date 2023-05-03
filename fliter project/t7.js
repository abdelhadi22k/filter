var saturate = document.getElementById('saturate');
var contrast = document.getElementById('contrast');
var brightness = document.getElementById('brightness');
var sepia = document.getElementById('sepia');
var grayscale = document.getElementById('grayscale');
var blure = document.getElementById('blure');
var hue_rotate = document.getElementById('hue_rotate');
var uplad = document.getElementById('uplad');
var download = document.getElementById('download');
var img = document.getElementById('img');
var span = document.querySelector('span');
var img_box = document.querySelector('.img-box');
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var resetValue = function () {
    img.style.filter = 'none';
    saturate.value = '100';
    contrast.value = '100';
    brightness.value = '100';
    sepia.value = '0';
    grayscale.value = '0';
    blure.value = '0';
    hue_rotate.value = '0';
};
window.onload = function () {
    download.style.display = 'none';
    span.style.display = 'none';
    img_box.style.display = 'none';
};
uplad.onchange = function () {
    resetValue();
    download.style.display = 'block';
    span.style.display = 'block';
    img_box.style.display = 'block';
    var file = new FileReader();
    file.readAsDataURL(uplad.files[0]);
    file.onload = function () {
        img.src = file.result;
    };
    img.onload = function () {
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        img.style.display = 'none';
    };
};
var filters = document.querySelectorAll("ul li input");
filters.forEach(function (filter) {
    filter.addEventListener('input', function () {
        ctx.filter = "\n        saturate(".concat(saturate.value, "%)\n        contrast(").concat(contrast.value, "%)\n        brightness(").concat(brightness.value, "%)\n        sepia(").concat(sepia.value, "%)\n        grayscale(").concat(grayscale.value, ")\n        blur(").concat(blure.value, "px)\n        hue-rotate(").concat(hue_rotate.value, "deg)\n        ");
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        img.style.display = 'none';
    });
});
download.onclick = function () {
    download.href = canvas.toDataURL();
};



// let saturate:any = document.getElementById('saturate');
// let contrast:any = document.getElementById('contrast');
// let brightness:any = document.getElementById('brightness');
// let sepia:any = document.getElementById('sepia');
// let grayscale:any = document.getElementById('grayscale');
// let blure:any = document.getElementById('blure');
// let hue_rotate:any = document.getElementById('hue_rotate');

// let uplad:any = document.getElementById('uplad');
// let download:any = document.getElementById('download');
// let img:any = document.getElementById('img');

// let span:any = document.querySelector('span');
// let img_box:any =document.querySelector('.img-box');
// let canvas:any =document.getElementById('canvas');
// const ctx = canvas.getContext('2d')

// let   resetValue = () =>{
//     img.style.filter = 'none';
//     saturate.value='100'
//     contrast.value='100'
//     brightness.value='100'
//     sepia.value='0'
//     grayscale.value='0'
//     blure.value='0'
//     hue_rotate.value='0'
// };
// window.onload = () =>{
//     download.style.display='none';
//     span.style.display='none';
//     img_box.style.display='none';
// };
// uplad.onchange = () =>{
//     resetValue()
//     download.style.display='block';
//     span.style.display='block';
//     img_box.style.display='block';

//     let file = new FileReader();
//     file.readAsDataURL(uplad.files[0])
//     file.onload = () =>{
//         img.src = file.result;
//     }
//     img.onload = () =>{
//         canvas.width = img.width
//         canvas.height = img.height
//         ctx.drawImage(img,0,0,canvas.width,canvas.height)
//         img.style.display='none'
//     }
// }
// let filters = document.querySelectorAll("ul li input");
// filters.forEach( (filter) =>{
//     filter.addEventListener('input', () =>{
//         ctx.filter = `
//         saturate(${saturate.value}%)
//         contrast(${contrast.value}%)
//         brightness(${brightness.value}%)
//         sepia(${sepia.value}%)
//         grayscale(${grayscale.value})
//         blur(${blure.value}px)
//         hue-rotate(${hue_rotate.value}deg)
//         `
//         ctx.drawImage(img,0,0,canvas.width,canvas.height)
//         img.style.display='none'
//     });
// });
// download.onclick = () => {
//     download.href = canvas.toDataURL();
// }

