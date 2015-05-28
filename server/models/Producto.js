var mongoose = require('mongoose');

var ProductoSchema = {
  descripcion: String,
  categoria: String,
  created_at: { type: Date, defaults: Date.now },
  updated_at: Date
};

module.exports = mongoose.model('Producto', ProductoSchema);
