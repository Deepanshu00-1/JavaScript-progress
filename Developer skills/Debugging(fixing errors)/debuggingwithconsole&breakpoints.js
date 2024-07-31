const measurekelvin = function(){
    const measurement = {
        type: 'temp',
        unit: 'celcius',
        // C) FIX bug
        value: Number(prompt('Degrees celcius:')),// bug of concatenation is because prompt always return strings not number but we need number here
    };

    // B) FIND bug
    console.table(measurement);

    console.log(measurement.value);
    // console.warn(measurement.value);
    // console.error(measurement.value);

    const kelvin = measurement.value + 273;
    return kelvin;
};
// A) IDENTIFY bug
console.log(measurekelvin());