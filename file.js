const fs = require("fs");

// //sync...
fs.writeFileSync("./test.txt","fs module used for file handling in nodejs");

//Overwrite previous content if writing again in same file
//Asynchronous-return nothing expect callback function
fs.writeFile("./test.txt","This is Async write file method",(err)=>{
    console.log(err);
})

//Async- return nothing (void) & expect callback function
fs.readFile('./contact.txt','utf-8',(err,res)=>{
    if(err){
        console.log(err);
    }else{
        console.log(res);
    }
})


//Sync- return result
const result = fs.readFileSync("./contact.txt","utf-8");
console.log(result);

fs.appendFileSync("./contact.txt","\nThis is from appendfile");