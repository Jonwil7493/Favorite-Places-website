var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var places = [
    {name: 'Home', rating: 10},
    {name: 'Las vegas', rating: 7},
    {name: 'New york', rating: 10},
    {name: 'Florida', rating: 8},
    {name: 'Myrtle beach', rating: 3}
  ];


//Create a name
var myname = "Jonathan Williams-Baxter";

res.render('index', {
  title: 'Favorite Places',
  places: places, 
  myname: myname
});
});
module.exports = router;
