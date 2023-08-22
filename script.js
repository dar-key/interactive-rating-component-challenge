const elems = document.getElementsByClassName('rating-num')

let savedProperties = {};


function forEachRatingElem(fn) {
    for (let i = 0; i < elems.length; i++) {
        fn(i)
    }
}


function unselectAll() {
    if (savedProperties) {
        forEachRatingElem(i => {
            elems[i].style.backgroundColor = savedProperties['backgroundColor'];
            elems[i].style.color = savedProperties['color'];
        })
    }
}

let selectedIndex = null;


forEachRatingElem(i => {
    elems[i].addEventListener('click', () => {
        unselectAll();
        if (selectedIndex !== i) {
            selectedIndex = i;
            savedProperties['backgroundColor'] = elems[i].style.backgroundColor;
            savedProperties['color'] = elems[i].style.color;
            elems[i].style.backgroundColor = 'hsl(217, 12%, 63%)';
            elems[i].style.color = 'white';
        }
        else 
            selectedIndex = null;
    })
});


const submitButton = document.getElementById('submit-btn');


submitButton.addEventListener('click', () => {
    if (selectedIndex !== null) {
        document.getElementById('interactive-rating-component').remove();
        let temp = document.getElementsByTagName("template")[0];
        let clon = temp.content.cloneNode(true);
        document.body.appendChild(clon);
    
        document.getElementById('thank-you-state').querySelector('.select').innerHTML = 'You selected ' + (selectedIndex + 1) + ' out of 5';
    }
    else
        alert('Please select rating!');
});
