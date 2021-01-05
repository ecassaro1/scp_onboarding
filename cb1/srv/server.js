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

app.get('/srv/hello', function (req, res) {
    res.status(200).json({"phrase":"Hello Material World! (from cb1/srv)"});
});

app.get('/srv/materials', function (req, res) {
    let sIdFunc = function(a, b) {
        var keyA = new Date(a.id),
            keyB = new Date(b.id);
        // Compare the 2 dates
        if (keyA < keyB) return -1;
        if (keyA > keyB) return 1;
        return 0;
    };

    req.db.exec('SELECT * FROM "cb1.db::material"', function (err, results) {
        if (err) {
            res.type('text/plain').status(500).send('ERROR: ' + err.toString());
            return;
        }

        res.status(200).json(results.sort(sIdFunc));
    });
});

app.get('/srv/material', (req,res)=>{
    let query = 
        'SELECT * FROM "cb1.db::material" where "id" = '+req.query.id;

    req.db.exec(query, function (err, results) {
        if (err) {
            res.type('text/plain').status(500).send('ERROR: ' + err.toString());
            return;
        }
        res.status(200).json(results.sort());
    });
});

app.post('/srv/material', (req,res)=>{
    console.log("req.body = "+ req.body);

    let query = 
        'INSERT INTO "cb1.db::material" VALUES ('
        +
        req.body.id
        +
        ','
        +
        "'" + req.body.description + "'"
        +
        ')';

    console.log("query = " + query);

    req.db.exec(query, function (err, results) {
        if (err) {
            console.log("deu ruim no server: "+err.toString());
            res.type('text/plain').status(500).send('ERROR: ' + err.toString());
            return;
        }
        console.log("deu bom no server");
        res.status(200).json(results);
    });        
});

app.post('/srv/delete', (req,res)=>{
    console.log("req.body.id = "+ req.body.id);

    let query = 
        'DELETE FROM "cb1.db::material" WHERE "id" = '
        +
        req.body.id;

    console.log("query = " + query);

    req.db.exec(query, function (err, results) {
        if (err) {
            console.log("deu ruim no server: "+err.toString());
            res.type('text/plain').status(500).send('ERROR: ' + err.toString());
            return;
        }
        console.log("deu bom no server");
        res.status(200).json(results);
    });        
});

app.post('/srv/change', (req,res)=>{
    console.log("req.body.id = "+ req.body.id);

    let query = 
        'UPDATE "cb1.db::material"'
        +
        ' SET "description" = '
        +
        "'"+req.body.description+"'"
        +
        ' WHERE "id" = '
        +
        req.body.id;

    console.log("query = " + query);

    req.db.exec(query, function (err, results) {
        if (err) {
            console.log("deu ruim no server: "+err.toString());
            res.type('text/plain').status(500).send('ERROR: ' + err.toString());
            return;
        }
        console.log("deu bom no server");
        res.status(200).json(results);
    });        
});

const port = process.env.PORT || 5001;
app.listen(port, function () {
    console.info('Listening on http://localhost:' + port);
});