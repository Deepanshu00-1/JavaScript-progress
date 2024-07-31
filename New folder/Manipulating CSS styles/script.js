// manipulating css includes

// changing colors
// fonts
// sizing
// placing

// document.querySelector('body').style.backgroundColor = 'Black';
const input = document.querySelector('input').value;
console.log(document.getElementById('input').value);
// const colorInput = documment.querySelector('body').style.backgroundColor;
document.querySelector('button').addEventListener('click', function(){
    // const input = document.querySelector('#input').value;
    // const colorInput = documment.querySelector('body').style.backgroundColor;
    if(input = 'red'){
        documment.querySelector('body').style.backgroundColor = 'red';
    }else if(input = 'black'){
        documment.querySelector('body').style.backgroundColor = 'black';
        document.querySelector('body').style.Color = 'white';
    }else if(input = 'cyan'){
        documment.querySelector('body').style.backgroundColor = 'cyan';
    }else if(input = 'lime'){
        documment.querySelector('body').style.backgroundColor = 'lime';
    }else{
        alert('Please type color among these (red, black, cyan, lime)');
    }
});

document.getElementById('button').onclick = function(){
    // const input = document.querySelector('#input').value;
    // const colorInput = documment.querySelector('body').style.backgroundColor;
    if(input = 'red'){
        documment.querySelector('body').style.backgroundColor = 'red';
    }else if(input = 'black'){
        documment.querySelector('body').style.backgroundColor = 'black';
        document.querySelector('body').style.Color = 'white';
    }else if(input = 'cyan'){
        documment.querySelector('body').style.backgroundColor = 'cyan';
    }else if(input = 'lime'){
        documment.querySelector('body').style.backgroundColor = 'lime';
    }else{
        alert('Please type color among these (red, black, cyan, lime)');
    }
};

// document.querySelector('#button').addEventListener('click', function(){
//     document.querySelector('body').style.backgroundColor = 'cyan';
// })

const userInput = prompt('Please enter name of color you would like to put on background');
document.querySelector('button').addEventListener('click', function(){
    if(userInput = 'red'){
        document.querySelector('body').style.backgroundColor = 'red';
        document.querySelector('body').style.Color = 'white';
    }
})