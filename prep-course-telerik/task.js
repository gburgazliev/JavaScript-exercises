let input = ['Q'];
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
let string = gets();
switch (string) {
    case '2':
        console.log('yes'); break;
        case '3':
        console.log('yes'); break;
        case '4':
        console.log('yes'); break;
        case '5':
        console.log('yes'); break;
        case '6':
        console.log('yes'); break;
        case '7':
        console.log('yes'); break;
        case '8':
        console.log('yes'); break;
        case '9':
        console.log('yes'); break;
        case '10':
        console.log('yes'); break;
        case 'J':
        console.log('yes'); break;
        case 'Q':
        console.log('yes'); break;
        case 'K':
        console.log('yes'); break;
        case 'A':
        console.log('yes'); break;
        default : console.log('no'); break;
}
