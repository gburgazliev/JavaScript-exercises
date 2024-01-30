import {shoppingCart} from "./shoppingCart.js"   
import { isPrime } from "./isPrime.js";

const primeItems = (obj) => obj.filter(isPrime);
console.log(primeItems(shoppingCart));
