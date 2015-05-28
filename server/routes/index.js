var express = require('express');
var router = express.Router();
var productos = require('../controllers/productos');

router.get('/api/productos', productos.getAll);
router.post('/api/productos', productos.create);
router.get('/api/productos/:id', productos.getOne);

// var auth = require('./auth.js');
// var productos = require('./products.js');
// var usuarios = require('./users.js');
//
// /*
//  * Routes that can be accessed by any one
//  */
// router.post('/login', auth.login);
//
// /*
//  * Routes that can be accessed only by autheticated users
//  */
// router.get('/api/v1/products', products.getAll);
// router.get('/api/v1/product/:id', products.getOne);
// router.post('/api/v1/product/', products.create);
// router.put('/api/v1/product/:id', products.update);
// router.delete('/api/v1/product/:id', products.delete);
//
// /*
//  * Routes that can be accessed only by authenticated & authorized users
//  */
// router.get('/api/v1/admin/users', user.getAll);
// router.get('/api/v1/admin/user/:id', user.getOne);
// router.post('/api/v1/admin/user/', user.create);
// router.put('/api/v1/admin/user/:id', user.update);
// router.delete('/api/v1/admin/user/:id', user.delete);

module.exports = router;
