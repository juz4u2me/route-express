var express = require('express');
var router = express.Router();
const request = require("request");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/busstops', (req, res) => {
    let url = 'http://datamall2.mytransport.sg/ltaodataservice/BusStops?AccountKey=lmFKyEjFRxuha99/VP6V7g==';
    request.get(url, (error, response, body) => {
        let json = JSON.parse(body);
        res.status(200).send(JSON.stringify(json.value)).end();
    })
});

module.exports = router;
