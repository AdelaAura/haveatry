//let myHeading = document.querySelector('h1');
//myHeading.textContent = 'Hello world!';
//document.querySelector('html').onclick = function() {
//    alert('别戳我，我怕疼。');
//}

let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'image/cat1.jpg'){
        myImage.setAttribute('src','image/cat12.jpg');
    }
    else{
        myImage.setAttribute('src','image/cat1.jpg');
    }
}

let cat2 = document.querySelector('img');

cat2.onclick = function(){
    let Src = cat2.getAttribute('src');
    if(Src === 'images/cat2.jpg'){
        cat2.setAttribute('src','image/cat22.jpg');
    }
    else{
        cat2.setAttribute('src','image/cat2.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');