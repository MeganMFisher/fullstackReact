const express = require('express'),
      bodyParser = require('body-parser'),
      massive = require('massive'),
      config = require('./config.js')

massive(config.database).then(db => {
    app.set('db', db)
}).catch((err) => {
    console.log(err)
})

var port = 3001;

var app = express()
app.use(bodyParser.json())

const controller = require('./controller.js')


app.get('/visitors', controller.getVisitors)
app.get('/sales', controller.getSales)
app.get('/product', controller.getProducts)
app.get('/inventory', controller.getInventory)
app.get('/payment', controller.getPayments)

app.listen(port, function() {
  console.log("Started server on port", port);
});