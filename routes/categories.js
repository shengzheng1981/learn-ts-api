const express = require('express');
const router = express.Router();
const Category = require("../models/category");

router.get('/',  (req, res, next) => {
    Category.find()
        .exec( (err,docs) => {
            if (err) {
                res.status(500);
                res.json(err);
            } else {
                res.status(200);
                res.json(docs);
            }
        });
});

router.post('/create', (req, res, next) => {
    Category.create(req.body.category, (err, doc) => {
        if (err) {
            res.status(500);
            res.json({
                result: false,
                err: err
            });
        }
        else {
            res.status(200);
            res.json({
                result: true,
                doc: doc
            });
        }
    });
});

router.get('/:id/remove', (req, res, next) => {
    Category.findOneAndRemove({_id: req.params.id}, (err, result) => {
        if (err) {
            res.status(500);
            res.json({
                result: false,
                err: err
            });
        } else {
            res.status(200);
            res.json({
                result: true
            });
        }
    });
});

router.post('/:id/update', (req, res, next) => {
    Category.findOneAndUpdate({_id: req.params.id}, req.body.category, {new: true}, (err, doc) => {
        if (err) {
            res.status(500);
            res.json({
                result: false,
                err: err
            });
        } else {
            res.status(200);
            res.json({
                result: true,
                doc: doc
            });
        }
    });
});

router.get('/detail/:id', (req, res, next) => {
    Category.findOne({_id: req.params.id})
        .exec((err, doc) => {
            if (err) {
                res.status(500);
                res.json(err);
            } else {
                res.status(200);
                res.json(doc);
            }
        });
});


module.exports = router;