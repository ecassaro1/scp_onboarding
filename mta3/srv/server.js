const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const xsenv = require('@sap/xsenv');
xsenv.loadEnv();
const services = xsenv.getServices({
    hana: { tag: 'hana' }
});

const hdbext = require('@sap/hdbext');
app.use(hdbext.middleware(services.hana));

app.use(bodyParser.json());

app.get('/srv', function (req, res) {
    res.status(200).json({"phrase":"Hello Pizza World! (from mta3/srv)"});
});

app.get('/srv/menu', function (req, res) {
    req.db.exec('SELECT * FROM "mta3.db::menu"', function (err, results) {
        if (err) {
            res.type('text/plain').status(500).send('ERROR: ' + err.toString());
            return;
        }
        res.status(200).json(results);
    });
});

const port = process.env.PORT || 5001;
app.listen(port, function () {
    console.info('Listening on http://localhost:' + port);
});