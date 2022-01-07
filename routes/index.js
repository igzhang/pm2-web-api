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


router.put('/stop/:processIDorName', function(req, res, next) {
    if (!req.params.processIDorName) {
        res.status(400).send('processID or name cannot be null');
        return
    }
    pm2.stop(req.params.processIDorName, function(err) {
        if (err) {
            res.status(500).send(err.message);
            return
        }
        res.send('success');
    })
})


module.exports = router;
