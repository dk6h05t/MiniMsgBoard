var express = require('express');
var router = express.Router();

let messages = [
    {user: 'Carlos', message: 'Hello everybody', added: new Date()},
    {user: 'Patts', message: 'Hello world!', added: new Date()},
]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini Messageboard', messages: messages });
});

router.get('/new', function(req, res, next) {
    res.render('form', { title: 'Post new message'});
});

router.post('/new', function(req, res, next) {
    let author = req.body.author;
    let msg = req.body.msg;
    messages.push({user: author, message: msg, added: new Date()});

    res.redirect('/');
});

module.exports = router;
