const express = require('express')
const cors = require('cors')
const bp = require('body-parser')
const app = express()
app.use(cors())
app.use(bp.json())
var mysql = require('mysql')
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'password',
  database : 'hmbiol'
});

connection.connect()

app.get('/getall', (req, res) => {
    connection.query('SELECT * FROM cucc', (err, rows) => {
        if (err) res.send(err)
        else res.send(rows)
    })
})

app.get('/', (req, res) => {
    connection.query('SELECT * FROM cucc', (err, rows) => {
        if (err) res.send(err)
        else res.send(rows)
    })
})

app.post('/ment', (req, res) => {
    connection.query(`INSERT INTO cucc (mit) VALUES ('${req.body.mit}')`, (err, rows) => {
        if (err) res.send(err)
        else res.send(rows)
    })
})

app.listen(3000)