const mongoose = require('mongoose');
// men/women level1
// cloth level 2
// kurta/saree level 3
const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxlength: 50,
  },
  parentCategory: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'categories',
  },
  level: {
    type: Number,
    required: true,
  },
});

const Category = mongoose.model('categories', categorySchema);

module.exports = Category;
