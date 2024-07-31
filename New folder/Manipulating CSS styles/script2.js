'Use strict'

/*
document.getElementById('selectColor').onclick(prompt('Please enter name of color you would like to put on background'));
document.querySelector('changeColor').addEventListener('click', function(){
    if(userInput = 'red'){
        document.querySelector('body').style.backgroundColor = 'red';
        document.querySelector('body').style.Color = 'white';
    }else if(userInput = 'cyan'){
        document.querySelector('body').style.backgroundColor = 'cyan';
    }else if(userInput = 'black'){
        document.querySelector('body').style.backgroundColor = 'black';
        document.querySelector('body').style.Color = 'white';
    }else if(userInput = 'lime'){
        document.querySelector('body').style.backgroundColor = 'lime';
    }else{
        alert('Please consider color values between (red, cyan, black, lime');
    }
});
*/

// document.querySelector('selectColor').addEventListener('click', function(){

//     var userInput = prompt("Please enter name of color you would like to put on background");
//     document.querySelector('changeColor').addEventListener('click', function(){

//         if(userInput = 'red'){
//             document.querySelector('body').style.backgroundColor = 'red';
//             document.querySelector('body').style.Color = 'white';
//         }else if(userInput = 'cyan'){
//             document.querySelector('body').style.backgroundColor = 'cyan';
//         }else if(userInput = 'black'){
//             document.querySelector('body').style.backgroundColor = 'black';
//             document.querySelector('body').style.Color = 'white';
//         }else if(userInput = 'lime'){
//             document.querySelector('body').style.backgroundColor = 'lime';
//         }else{
//             alert('Please consider color values between (red, cyan, black, lime');
//         }
//         };
//     };       

// var userInput = prompt('Please enter name of color you would like to put on background');

document.querySelector('.selectColor').addEventListener('click', function(){
    var userInput = prompt('Please enter name of color you would like to put on background');
    var input = userInput;
    document.querySelector('.changeColor').addEventListener('click', function(){
        if(input == 'red'){
            document.querySelector('.body').style.backgroundColor = `${input}`;
        }else if(input == 'blue'){
            document.querySelector('.body').style.backgroundColor = `${input}`;
        }else if(input == 'cyan'){
            document.querySelector('.body').style.backgroundColor = `${input}`;
        }else if(input == 'black'){
            document.querySelector('.body').style.backgroundColor = `${input}`;
            document.querySelector('.body').style.color = 'white';
        }
        else{
            alert('Please enter colors name from these(red, blue, cyan, black)');
        }
    });
});    