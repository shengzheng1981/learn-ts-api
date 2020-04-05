const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const FacilitySchema = new Schema({
    //名称
    name: String,
    //编码
    code: String,
    //描述
    desc: String,
    //竣工日期
    complete: Date,
    //运行正常
    normal: Boolean,
    //地址
    address: String,
    //面积
    area: Number,
    //空间
    geometry: {},
    //属性
    properties: {}

}, { collection: 'facilities' });
const Facility = mongoose.model('Facility', FacilitySchema);

module.exports = Facility;