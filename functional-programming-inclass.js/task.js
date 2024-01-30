const getName = person => person.name;
getName({ name: 'Pesho' });
const uppercase = string => string.toUpperCase();
const get3Characters = string => string.substring(0, 3);
const pipe =  (...funcs) => input => funcs.reduce((acc, func) => func(acc), input);

let result = pipe(getName, uppercase, get3Characters)({name:'Pesho'});

let iife = (function pipe(...funcs) {
    const processDataa = (obj) => {
        const name = funcs[0](obj);
        const uppercase = funcs[1](name);
        const get3Characters = funcs[2](uppercase);
        return get3Characters;
    }
    return processDataa;
})(getName,uppercase,get3Characters)({name:'Pesho'});
console.log(iife)