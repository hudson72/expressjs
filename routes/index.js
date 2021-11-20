const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  //Pierwszym parametrem poniżej w 'res.render' jest nazwa szablonu czyli 'index.pug' w folderze 'views', który wysyłamy. Drugi to obiekt '{ title: 'Express' }', w którym przekazuje wszystkie dodatkowe parametry przekazywane do naszego szablonu.
  res.render('index', { title: 'Express' });
});

module.exports = router;
