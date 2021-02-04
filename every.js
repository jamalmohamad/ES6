var computers = [
    {name: 'Apple', ram: 24}
];

var allComputersCanRunProgram = true;
var onlySomeComputersCanRunProgram = false;

for (var i = 0; i < computers.length; i++) {
    var computer = computers[i];

    if (computers.ram < 16) {
        allComputersCanRunProgram = false;
    } else {
        onlySomeComputersCanRunProgram = true;
    }
}

"------"
console.log(allComputersCanRunProgram);
onlySomeComputersCanRunProgram;


