const express = require('express');
const app = express();
const port = 8000;
const students = [
    {id:1, name: "Tanisha", age: 20 },
    {id:2, name: "Anamika", age: 21 },
    {id:3, name: "Yanshi", age: 22 }    

]

app.get('/', (req, res) => {   
    res.send('Welcome to Home page');
});
app.get("/students",(req,res)=>{
    res.json(students);
});

app.get("/students/:id",(req,res)=>{
    res.send("");
});

app.get("/students/search",(req,res)=>{
    const searchquery=req.query;
    console.log(req.query)
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:8000`);
});