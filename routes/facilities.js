const express = require('express');
const router = express.Router();
const Facility = require("../models/facility");

router.get('/',  (req, res, next) => {
    Facility.find()
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
    Facility.create(req.body.facility, (err, doc) => {
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
    Facility.findOneAndRemove({_id: req.params.id}, (err, result) => {
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
    Facility.findOneAndUpdate({_id: req.params.id}, req.body.facility, {new: true}, (err, doc) => {
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
    Facility.findOne({_id: req.params.id})
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