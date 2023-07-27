//creating a database in the mysql named as company

var mysql=require('mysql'); 
var con=mysql.createConnection({
      host:'localhost',
      user:'root',
      pass:"Mysql@1234"
});

function createDatabase(dbName)
{
    con.connect(function(err){
    
        if(err) throw err;
    
        //create database company
        con.query(`create database ${dbName};`,function(err,result)
        {
            if(err) throw err;
            console.log("database created...");
        });
    });
};

function createTable(dbName,tableName)
{
    con.connect(function(err){
    
       // if(err) throw err;
    
        //creates a table in the company database

        con.query(`use ${dbName}`,function(err)
        {
            if(err) throw err;
            
        });


        var sql=`CREATE TABLE ${tableName}(id INT PRIMARY KEY AUTO_INCREMENT,name VARCHAR(255),department VARCHAR(100),salary DECIMAL(10, 2));`;
    
        con.query(sql,function(err,result)
        {
            if(err) throw err;
            console.log("Table created...");
        });
    });
}

module.exports={  
                   createDatabase,
                   createTable
                };

