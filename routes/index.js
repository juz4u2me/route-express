var express = require('express');
var router = express.Router();
const request = require("request");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/busstops/:skip', (req, res) => {
    let skip = req.params.skip;
    let options = { 
        url: 'http://datamall2.mytransport.sg/ltaodataservice/BusStops?$skip='+skip,
        headers: {
            AccountKey: 'lmFKyEjFRxuha99/VP6V7g=='
        }
    };
    request.get(options, (error, response, body) => {
        let json = JSON.parse(body);
        res.status(200).send(JSON.stringify(json.value)).end();
    })
});

module.exports = router;