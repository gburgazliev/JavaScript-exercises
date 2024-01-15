

// let data = {
//   first: [1, 2, 3, 4],
//   second: 'llllll',
//   third: 1,
//   fourth: {idk: 'ok'}
// }

// const newObj = {};
// for (const prop in data) {
//   if (data.hasOwnProperty(prop)) {
//     if (Array.isArray(data[prop])) {
//       newObj[prop] = [...data[prop]];
//     }
//     if (typeof data[prop] === 'object' && data[prop] !== null && !Array.isArray(data[prop])) {
//       newObj[prop] = { ...data[prop] };
//     } else {
//       newObj[prop] = data[prop];
//     }
//   }
// }
// console.log(newObj)


const data = {
  keys: [0, 1, 2, 3, 'length'],
  first: [1, 2, 3],
  second: [3, 2, 1, 0],
}


// let newObj = {};

const newObj = {};
for (const el of data.keys) {
  const key = el;
  newObj[key] = [];
  delete data.keys;
  for (const currProp in data) {
    if (data.hasOwnProperty(currProp) && typeof data[currProp] === 'object') {
      const currObj = data[currProp];
      if (key in currObj) {
        newObj[key].push(currObj[key]);
      }
    }
  }
}
for (const prop in newObj) {
  if (newObj[prop].length === 1) {
    newObj[prop] = newObj[prop][0];
  }
  if (newObj[prop].length === 0) {
    newObj[prop] = null;
  }
}
console.log(newObj);
