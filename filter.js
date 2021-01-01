var products = [
    {name: 'cucumber', type: 'vegetable'},
    {name: 'banana', type: 'fruit'},
    {name: 'celery', type: 'vegetable'},
    {name: 'orange', type: 'fruit'},
    {name: 'appple', type: 'fruit'}
    
];

// the task is to filter only fruits

// classic way
var filteredProduct = [];

for (var i=0; i< products.length; i++){
    if (products[i].type === 'fruit'){
        filteredProduct.push(products[i]);
    }
}


// using filter
var filtered = products.filter((p) => p.type === 'vegetable');



console.log(filtered);