// Really hard
// implement a pluck function, pluck should accept an array and a string representing a property name and return an array containing that property from each object.
// example 
// var paints = [{color: 'red}, {color: 'blue'}, {color: 'yellow}];
// pluck(paints, 'color'); // it will returns ['red', 'blue', 'yellow']


var paints = [
    {color: 'red'},
    {color: 'blue'},
    {color: 'yellow'}
];

function pluck(array, property) {
    return array.map((c) => c[property])

}

console.log(pluck(paints, 'color')) 