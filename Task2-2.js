//craeting a table 'employees' in the company database

var mysql=require('mysql');
var con=mysql.createConnection(
    {
        host:'localhost',
        user:'root',
        pass:'Mysql@1234',
        database:'company'
    }
);


var imp=require('./Task2-1');

imp.createDatabase('sampledb11');
imp.createTable('sampledb11','sample1');


