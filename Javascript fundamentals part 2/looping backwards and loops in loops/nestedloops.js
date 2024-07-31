const jonas = [
    'jonas',
    'schmedmann',
    2037-1991,
    'teacher',
    ['michael', "peter",'steven'],
    true
];

// printing elements of array backwards
// 4, 3, ....,0

for(let i = jonas.length - 1; i>= 0; i--){
    console.log(jonas[i]);
}
for(let exercise = 1; exercise < 4; exercise++){
    console.log(`-------starting exercise ${exercise}`);

    for(let rep = 1; rep < 6; rep++){
        console.log(`Exercise ${exercise}: Lifting weight repetition ${rep}`);
    }
}