//  1. change color 
const h1 = document.getElementsByTagName('h1');
for (const h of h1) {
    h.style.color = 'lightblue';
}
// document.getElementById('h1').style.color = 'red';

//  3. change background 
const backpack = document.getElementById('backpack');
backpack.style.backgroundColor = 'tomato';

// 4. do border-radius
const card = document.getElementsByClassName('card');
for (const radius of card) {
    radius.style.borderRadius = '30px';
}

// const boxCard = document.getElementById('box');
// boxCard.style.borderRadius = '30px';
// 5. remove card clicking button 
const btns = document.getElementsByClassName('btn');
for (const btn of btns) {
    btn.addEventListener('click', function() {
        const parent = btn.parentNode.parentNode.parentNode;
        // console.log(parent);
        parent.style.display = 'none';
    })
}

// 6. disable button by
// default anad enable when you input email

const button = document.getElementById('button');
const input = document.getElementById('input');
input.addEventListener('keyup', function(e) {
    // console.log(input.value);
    // console.log(e.target.value);
    if (e.target.value === 'email') {
        button.removeAttribute('disabled')
    } else {
        button.setAttribute('disabled', true)
    }
})

// 7. chnage image when hover 

const images = document.getElementsByClassName('card-img-top');
for (const img of images) {
    img.addEventListener('mouseover', function() {
        img.src = 'images/shoes/shoe-1.png';
    })
}
for (const img of images) {
    img.addEventListener('mouseout', function() {
        img.src = 'images/shoes/shoe-3.png';
    })
}

// 8. doubleclick

const subscribe = document.getElementById('subscribe');
subscribe.addEventListener('dblclick', function() {
    subscribe.setAttribute('style', 'height: 400px; background-color: red !important')
})