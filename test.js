var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '123456',
  database : 'test'
});
 
connection.connect();
 
connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});

module.exports = function checkAccount(email, password) {
  // console.log(`SELECT * FROM account WHERE email IN ${email} AND password IN ${password} AS solution`);
  return new Promise( (res, rej) => 
  connection.query(`SELECT * FROM account AS solution WHERE email IN ('${email}') AND password IN ('${password}')`, function (error, results, fields) {
    if (error) throw error;
    if (results[0]){
      // console.log("在我想要的block")
      // console.log(typeof results[0].nickname)
      console.log({nickname: results[0].nickname});
      res( {nickname: results[0].nickname});
    }
    res(null);
  })
  )
}