var express = require('express');
var router = express.Router();

/* GET orders users listing. */
router.get('/', function (req, res, next) {
  //res.send('respond with a resource');
  res.render('orders',
    {
      title: 'Orders'
    }
  );
});

module.exports = router;

