// // gets the values
// localStorage.setItem('item1', 'book')
// localStorage.setItem('item2', ['set1', 'set2', 'set3'])
// localStorage.setItem('item3', 'food')

// // converts arrays
// const item2 = localStorage.getItem('item2').split(',')

// // log to console
// console.log(`item1: ${localStorage.getItem('item1')}`)
// console.log(`item2: ${item2}`)

// //remove stuff
// localStorage.removeItem('item3')
// console.log(`item3: ${localStorage.getItem('item3')}`)

// //remove all
// // localStorage.clear()
// console.log(`item3 after clear: ${localStorage.getItem('item3')}`)

//X_X_X_X_X_X_X_X_X_X_X_X_X_X_X_X

document.querySelector('body').style.background = localStorage.getItem

// hooks onto the input as well as the button
const color = document.querySelector('#color')
const myForm = document.querySelector('#myForm')
// listens for the button to be pushed
myForm.addEventListener('submit', (e) => {
    // stops default, sets the storage attribute to the color value, then changes the body background to the color in local storage
    e.preventDefault()
    // alert(color.value)
    localStorage.setItem('bg', color.value)
    document.querySelector('body').style.background = localStorage.getItem('bg')
})

const image = document.querySelector('#image')
const imageForm = document.querySelector('#imageForm')
let imageSpot = document.querySelector('#imageSpot')

imageForm.addEventListener('submit', (e) => {
    // stops default, sets the storage attribute to the color value, then changes the body background to the color in local storage
    e.preventDefault()
    // alert(color.value)
    localStorage.setItem('img', image.value)
    if (image.value == 'knight') {
        document.getElementById("imageSpot").src = 'https://images.unsplash.com/photo-1600081728723-c8aa2ee3236a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80';
    }
    if (image.value == 'dragon') {
        document.getElementById("imageSpot").src = 'https://images.unsplash.com/photo-1577493340887-b7bfff550145?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=293&q=80';
    }
    if (image.value == 'ghost') {
        document.getElementById("imageSpot").src = 'https://images.unsplash.com/photo-1604005950576-8745a5c40581?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80';
    }
    if (image.value == 'viking') {
        document.getElementById("imageSpot").src = 'https://images.unsplash.com/photo-1564598328706-70cecb6ad257?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80';
    }
    if (image.value == 'samurai') {
        document.getElementById("imageSpot").src = 'https://images.unsplash.com/photo-1614882914068-3b235f59cb38?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80';
    }
})

const word = document.querySelector('#word')
const wordForm = document.querySelector('#wordForm')
let wordSpot = document.querySelector('#wordSpot')

wordForm.addEventListener('submit', (e) => {
    e.preventDefault()
    localStorage.removeItem('word')
    localStorage.setItem('word', word.value)
    document.getElementById("wordSpot").innerText = `${localStorage.getItem('word')}`
})