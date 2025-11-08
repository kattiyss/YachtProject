let lightThemeButton = document.querySelector('.theme-button-light');
let darkThemeButton = document.querySelector('.theme-button-dark');
let serifFontButton = document.querySelector('.font-button-serif');
let sansSerifFontButton = document.querySelector('.font-button-sans-serif');

lightThemeButton.onclick = function () {
    document.body.classList.remove('dark');
    darkThemeButton.classList.remove('active');
    lightThemeButton.classList.add('active');
}

darkThemeButton.onclick = function () {
    document.body.classList.add('dark');
    lightThemeButton.classList.remove('active');
    darkThemeButton.classList.add('active');
}

serifFontButton.onclick = function () {
    document.body.classList.add('serif');
    sansSerifFontButton.classList.remove('active');
    serifFontButton.classList.add('active');
}

sansSerifFontButton.onclick = function () {
    document.body.classList.remove('serif');
    serifFontButton.classList.remove('active');
    sansSerifFontButton.classList.add('active');
}

let articles = document.querySelectorAll('.blog-article');
for (let article of articles) {
    let moreButton = article.querySelector('.more');
    moreButton.onclick = function () {
        article.classList.remove('short');
    }
}

let gridButton = document.querySelector('.card-view-button-grid');
let listButton = document.querySelector('.card-view-button-list');
let cards = document.querySelector('.cards');

gridButton.onclick = function () {
    cards.classList.remove('list');
    listButton.classList.remove('active');
    gridButton.classList.add('active');
}

listButton.onclick = function () {
    cards.classList.add('list');
    gridButton.classList.remove('active');
    listButton.classList.add('active');
}

let previews = document.querySelectorAll('.preview-list a');
let activePhoto = document.querySelector('.active-photo');

for (let clickPhoto of previews) {
    clickPhoto.onclick =  function (evt) {
        evt.preventDefault();
        activePhoto.src = clickPhoto.href;
        
        let currentPhoto = document.querySelector('.active-item');
        currentPhoto.classList.remove('active-item');
        clickPhoto.classList.add('active-item');
    }
}