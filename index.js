const con = require('./connection');
const express = require('express');
const app = express();
app.use(express.json());
app.get('/',(req,res)=>{
    con.query("Select ExpenseAmount from Expense", (err, result)=>{
        if(err){
            res.send("Error");
        }
        else{
            res.send(result);
        }
    });
    
});

app.post('/', (req, res)=> {
    const data = req.body;
    console.log(data);
    con.query("Insert INTO Expense SET ?", data, (err, result)=>{
        if(err){
            console.log(err);
            res.send('Error');
        }
        else{
            res.send(result);
        }
    });
});

app.listen(4200);