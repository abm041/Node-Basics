// const math = require('./math')
// console.log(math);  //{ add: [Function: add], sub: [Function: sub] }
// console.log("add: ",math.add(88,8));
// console.log("sub: ",math.sub(22,3))


// OR ways to import and use function:
// const {add,sub} = require('./math')
// console.log("value is: ",add(78,8));

const math = require('./math');
console.log(math); //add: [Function (anonymous)]
console.log("division: ",math.div(250,5));
