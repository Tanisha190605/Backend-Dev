const fs= require("fs");
fs.readFile("Data.txt","utf8",data=>{
    if (err){
        console.log(err);
        return;
    }
    else {
        console.log(Data);
    }
})