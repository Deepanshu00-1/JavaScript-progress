const day = 'monday';

switch(day){
    case 'monday': // day === 'monday'
        console.log('Plan course structure');
        console.log('Go to coding meeetup');
        break;
        case 'tuesday':
            console.log('Prepare theory videos');
            break;
        case 'wednesday':
        case 'thursday':
            console.log('Write code examples');
            break;
        case 'friday':
            console.log('Record videos');
            break;
        case 'saturday':
        case 'sunday':
            console.log('Enjoy the weekend');
            break;      
        default:
            console.log('Nota a valid day');        
}

// if-else with same concept
// const day = 'wednesday';
// if (day === 'monday'){

// } else if( day === 'tuesday'){

// } else if( day ==='wednesday' || day === 'thursday'){
//     console.log('Write code example');
// } else if(day === 'friday'){

// } else if(day === 'saturday'){

// } else if(day === 'sunday'){

// } else{ 
//     console.log("Not a valid day");
// }

