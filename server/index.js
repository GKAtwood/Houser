require('dotenv').config();
const express = require('express');
const ctrl = require('./controller');
const session = require('express-session');
const massive = require('massive');
const {SERVER_PORT, CONNECTION_STRING} = process.env;





app = express();

app.use(express.json());

massive({
    connectionString: CONNECTION_STRING,
    ssl: {rejectUnauthorized: false}
}).then(db=>{
    app.set('db', db);
    console.log('db connected')
});

app.listen(SERVER_PORT, ()=> console.log(`getting down on port ${SERVER_PORT}`))