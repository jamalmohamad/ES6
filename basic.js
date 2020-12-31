var number = 10;
var numbers = [1,2,3];
var greeting = {hello: number}


console.log('number is ' + greeting);


// Arrays helper methods

// ForEach
var colors = ['red', 'Blue', 'Green'];

// normal way for
for(var i =0; i<colors.length; i++){
    console.log(colors[i]);
}


// functional way forEach

colors.forEach(function(color){
    console.log(color);
})

colors.forEach((color) => console.log(color));  // lambda way


// Example
// using forEach sum the numbers in the array nList = [1,2,3,4,5]

var nList = [1,2,3,4,5];
var sum = 0;
nList.forEach(
    // (number) => sum += number  // lambda way
    adder_helper
);
console.log("Sum : " + sum);


// with helper function
function adder_helper(number) {
    sum += number;
}

// forEach in real world
// Refactor below code to instead use forEach loop
function handlePosts() {
    var posts = [
        {id: 23, title: 'Daily JS News'},
        {id: 52, title: 'Code Refactor City'},
        {id: 105, title: 'The Brightest Ruby'}
    ];

    // for(var i = 0; i <posts.length; i++){
    //     savePost(posts[i]);
    // }

    posts.forEach(
        (post) => savePost(post)
    )
}


var images = [
    {height: 10, width: 30},
    {height: 20, width: 90},
    {height: 54, width: 32}
];
var areas = [];
images.forEach(areas_helper);

console.log(areas)

function areas_helper(image, index){
    areas[index] = (image.height) * (image.width)
}


// Map helper
var doubleNumbers = [];
for(var i =0; i<numbers.length; i++){
    doubleNumbers.push(numbers[i] * 2);
}


var doubled = numbers.map((number) => number * 2)
console.log(doubled);


// map examples complicated
var cars = [
    {model: 'BMW', price: 'CHEAP'},
    {model: 'Camaro', price: 'EXPENSIVE'}
];

var prices = cars.map((car) => car.price);
console.log(prices);


// excercises  map
var images1 = [
    {height: '34px', width: '39px'},
    {height: '54px', width: '19px'}
];

var heights = images1.map((h) => h.height);
console.log(heights);


// using map, create a new array that contains (distance/time) value from each trip
var trips = [
    {distance: 34, time: 10},
    {distance: 90, time: 50},
    {distance: 59, time: 25}
];

var speeds = trips.map((t) => (t.distance / t.time));
console.log(speeds);

