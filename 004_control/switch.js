// switch case 

// switch(key) {
//     case 'value1':
//         // code to execute if key is 'value1'
//         break;
//     case 'value2':
//         // code to execute if key is 'value2'
//         break;
//     default:
//         // code to execute if key doesn't match any case
// }


const month =3

switch(month) {
    case 1:
        console.log('January');
        break;
    case 2:
        console.log('February');
        break;
    case 3:
        console.log('March');
        break;
    case 4:
        console.log('April');
        break;
    case 5:
        console.log('May');
        break;
    case 6:
        console.log('June');
        break;
    case 7:
        console.log('July');
        break;
    case 8:
        console.log('August');
        break;
    case 9:
        console.log('September');
        break;
    case 10:
        console.log('October');
        break;
    case 11:
        console.log('November');
        break;
    case 12:
        console.log('December');
        break;
    default:
        console.log('Invalid month');
}
// if there is no break statement then it will execute all the cases after the matching case until it finds a break statement or the end of the switch statement. This is called fall through behavior it execute all cases except the default case if there is no break statement.


