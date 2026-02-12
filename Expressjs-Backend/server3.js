const express = require("express");
const app = express();
const PORT =4000;

app.set("view engine","ejs")
//ejs - server site rendering

app.use(express.urlencoded({extended: true}));
const students=[
    { id: 1, name: "rahul", branch: "CSE" },
  { id: 2, name: "rishu", branch: "ECE" },
  { id: 3, name: "ram", branch: "IT" },
];

app.get("/",(req,res)=>{
    res.render("form",{allStudents: students});

  
});                  

app.post("/students/register",(req,res)=>{
    console.log("form/data",req.body)
    res.send("register")
    
})

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});