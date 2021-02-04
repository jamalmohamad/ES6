var users = [
    {name: 'John'},
    { name: 'Alex'},
];

const searchedUser = users.find((user) => user.name === 'Alex')
console.log(searchedUser)



var users1 = [
    {id: 1, admin: false},
    {id: 2, admin: false},
    {id: 3, admin: true}
];


var admin;

admin = users1.find((user) => user.admin === true)
console.log(admin)




// Car Objects
function Car(model) {
    this.model = model;
}

var cars = [
    new Car('Buick'),
    new Car('Camaro'),
    new Car('Focus')
];


const findCar = cars.find((car) => car.model === 'Focus');
console.log(findCar)



var posts = [
    { id: 1, title: 'New Post' },
    { id: 2, title: 'Old Post' }
];

var comments = {postId: 1, content: 'Great Post'};


function postForComment (posts, comment){
    return posts.find(function() {
        return posts.id === comment.postId;
    });
}


// postForComment(posts, comment);


