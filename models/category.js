const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const CategorySchema = new Schema({
    //名称
    title: String,
    //编码
    code: String,
    //描述
    desc: String,
    //空间
    geometries: [],
    //属性
    properties: {}
}, {collection: 'categories'});
const Category = mongoose.model('Category', CategorySchema);

module.exports = Category;