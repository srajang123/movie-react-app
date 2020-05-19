const sql=require('mysql2');
const mysql=sql.createPool({
    user:'srajan',
    password:'Project@123',
    database:'movielist',
    host:'localhost'
})
module.exports=mysql.promise();