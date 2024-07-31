// Software bug: Defect or problem in a computer program.
// Basically, any unexpected or unintended behavior of a
// computer program is a software bug.

// Bugs are completely normal in software development!

// example: "We need a function that reverse whatever we pass into it"
// reverse([1,3,5,7])
// output [5,1,7,3] it was not expected that means there is a bug in reverse funciton

// Debugging: Process of finding,Fixing and preventing bugs.

// Identify bugs: Becoming aware that there is a bug
// 1.During development
// 2.Testing software
// 3.User reports during production
// 4.Context browsers, users, etc.

// Find bug: Isolating where exactly the bug is happening in code
// 1.Developer console(simple code)
// 2.Debugger (complex code)

// Fix bug: correct the bug
// 1.Replace wrong solution with new correct solution

// Prevent bug: preventing it from happening again
// 1.Searching for the same bug in similar code
// 2.Writing tests using testing software

const measureAreaOfCircle = function(){
    const measurement = {
        type: 'centimetre',
        unit: 'metre',
        radius: prompt('Radius of circle'),
    };
    const Area = 3.14*measurement.radius*measurement.radius;
    return Area;
}
console.log(measureAreaOfCircle());