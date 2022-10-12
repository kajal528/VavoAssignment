const mysql = require('mysql');
const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: {PASSWORD},
    database: 'vavodb'
});

con.connect((err)=> {
    if(err){
        console.log('Connection Error');
    }
    else{
        console.log("Connected");
    }
});

module.exports = con;