import { shoppingCart} from "./shoppingCart.js";
import { isPrime } from "./isPrime.js";
const reject = (obj, func) => {
    let resultArr = [];
    obj.forEach(element => {
        if(!func(element) === true) {
            resultArr.push(element);
        }
    });
    return resultArr;

}
console.log(shoppingCart);
console.log(reject(shoppingCart, isPrime));
console.log(shoppingCart);