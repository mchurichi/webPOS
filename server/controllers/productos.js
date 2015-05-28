var Producto = require('../models/Producto');

var productos = {

  getAll: function(req, res) {
    Producto.find(function(err, all){
      if (err) {
        res.send(err);
      }
      res.json(all);
    });
  },

  getOne: function(req, res) {
    var id = req.params.id;
    Producto.findOne({_id : id}, function(err, one){
      if (err) {
        res.send(err);
      }
      res.json(one);
    });
  },

  create: function(req, res) {
    var producto = new Producto(req.body);
    producto.save(function(err, saved) {
      if (err) {
        res.send(err);
      };
      res.json(saved);
    });

    // Producto.create(req.body, function(err, producto) {
    //   if (err) {
    //     res.send(err);
    //   };
    //   res.json(producto);
    // });
  },

  update: function(req, res) {},

  delete: function(req, res) {}

};

module.exports = productos;
