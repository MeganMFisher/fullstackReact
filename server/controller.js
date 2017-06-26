module.exports =  {
    
// *******************************************
// *            Website Visitors             *
// *******************************************

getVisitors: (req, res) => {
  req.app.get('db').getVisitors().then((response) => {
      res.send(response)
  })
  },

// *******************************************
// *           Sales and Returns             *
// *******************************************

getSales: (req, res) => {
  req.app.get('db').getSalesAndReturns().then((response) => {
    res.send(response)
  })
},

// *******************************************
// *           Product Type Sold             *
// *******************************************

getProducts: (req, res) => {
  req.app.get('db').getProductTypesSold().then((response) => {
    res.send(response)
  })
},

// *******************************************
// *           Product Inventory             *
// *******************************************

getInventory: (req, res) => {
  req.app.get('db').getProductInventory().then((response) => {
    res.send(response)
  })
},

// *******************************************
// *           Product Inventory             *
// *******************************************

getPayments: (req, res) => {
  req.app.get('db').getPaymentTypeReceived().then((response) => {
    res.send(response)
  })
}
}