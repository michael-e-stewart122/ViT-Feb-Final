window.onload = function() {
    // necessary for dropdown menus to function properly: must be after function
    // https://stackoverflow.com/a/25347431
    $('.ui.dropdown').dropdown();

// grab button with query selector
// let btn = document.querySelector('#clickMe')
// console.log(btn)  //(btn.style) or other btn. commands

// grab things to change with query selector
// let changeMe = document.querySelector('#changeMe')
// console.log(changeMe)

// add event listener to button, can be click, mouseover, etc
// btn.addEventListener('mouseover', function(){
//   let par = document.createElement('p')
//   par.innerHTML = 'I hope you enjoy it as much as I do!'
//     console.log('you did it!')
//   changeMe.innerHTML = 'Welcome to my Site'
//   changeMe.style.fontSize = 20
//   changeMe.style.backgroundColor = 'almond'
//   changeMe.style.color = 'white'

//   changeMe.appendChild(par)
// })
// line 27 is the end of the eventListener function
// console.log('click')
}