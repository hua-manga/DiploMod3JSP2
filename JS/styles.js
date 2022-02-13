
let colors = ['blue', 'grey', 'green', 'pink', 'brown', 'purple'];

let button = document.getElementById('button');

button.addEventListener('click', function(){
    
    var randomColor = colors[Math.floor(Math.random() * colors.length)]
    
    let container = document.getElementById('container');

    container.style.background = randomColor;
})


let colorsi = ['red', 'white', 'black', 'red', 'brown', 'orange'];

let button1 = document.getElementById('button1');

button1.addEventListener('click', function(){
    
    var randomcolor = colorsi[Math.floor(Math.random() * colorsi.length)]
    
    let containers = document.getElementById('containers');

    containers.style.background = randomcolor;
})

let colorsis = ['silver', 'yellow', 'violet', 'red', 'brown', 'white'];

let button2 = document.getElementById('button2');

button2.addEventListener('click', function(){
    
    var randomcolors = colorsis[Math.floor(Math.random() * colorsis.length)]
    
    let containersi = document.getElementById('containersi');

    containersi.style.background = randomcolors;
})