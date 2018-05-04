var inq = require("inquirer");
var pmpt = inq.createPromptModule();

var qs = [
    {
        type: "input",
        name: "q1",
        message: "How r u ?"
    }
];

pmpt(qs).then(function(r){
    console.log(r.q1);
})

// not preferrable way
// inq.prompt(qs).then(answer => {
//     //console.log(answer);
//     console.log(JSON.stringify(answer, null, " "));
// });