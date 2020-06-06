const mysql = require('mysql');
const connection = mysql.createConnection({
	host: '213.190.6.43',
	user: 'u191982321_root',
	password: 'password',
	database: 'u191982321_test',
});

connection.connect((err) => {
    if(err) throw err;
    console.log('Connected');
});
