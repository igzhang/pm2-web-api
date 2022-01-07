var express = require('express');
const pm2 = require('pm2')


var router = express.Router();


router.get('/', function(req, res, next) {
    pm2.list((err, list) => {
        if (err) {
            res.status(500).send(err.message);
            return
        }
        res.send(list);
    });
});


router.post('/', function(req, res, next) {
    if (req.body.process == null) {
        res.status(400).send('processID or name cannot be null');
        return
    }
    pm2.start(req.body.process, function(err) {
        if (err) {
            res.status(500).send(err.message);
            return
        }
        res.send('success');
    })
})


router.put('/stop', function(req, res, next) {
    if (!req.body.process) {
        res.status(400).send('processID or name cannot be null');
        return
    }
    pm2.stop(req.body.process, function(err) {
        if (err) {
            res.status(500).send(err.message);
            return
        }
        res.send('success');
    })
})


router.put('/restart', function(req, res, next) {
    if (req.body.process == null) {
        res.status(400).send('processID or name cannot be null');
        return
    }
    pm2.restart(req.body.process, req.body.options, function(err) {
        if (err) {
            res.status(500).send(err.message);
            return
        }
        res.send('success');
    })
})


module.exports = router;
