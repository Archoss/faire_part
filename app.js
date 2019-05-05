"use strict";
const express = require("express"),
    app = express(),
    session = require("express-session"),
    path = require("path"),
    bodyParser = require("body-parser"),
    expressMongoDb = require("express-mongo-db"),
    MongoStore = require("connect-mongo")(session)

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
app.set("trust proxy", 1); // trust first proxy
app.locals.pretty = true;

//URL de notre base
app.use(expressMongoDb("mongodb://pierreVanneste:bonde007FairePart@ds149676.mlab.com:49676/faire-part-db"));

app.use('/static', express.static(__dirname + '/public'));

app.use(
    session({
        secret: "thisisasecretshhhh",
        resave: false,
        saveUninitialized: false,
        cookie: {
            secure: false
        },
        store: new MongoStore({
            url: "mongodb://pierreVanneste:bonde007FairePart@ds149676.mlab.com:49676/faire-part-db",
            ttl: 30 * 60
        })
    })
);
app.use("/", indexRouter);
app.use("/users", usersRouter);

// --------------------------------------
// --------------- ROUTES ---------------
app.get('/', function (req, res) {
    const user = req.session.user;
    const name = user.name;
    req.db.collection('users').find().toArray((err, name) => {
        res.render('index', {
            name: name,
            user: user,
        });
    })
    const msg = req.session.msg;
    req.db.collection('messages').find().toArray((err, msg) => {
        console.log("MSG : ", msg)
        res.render('index', {
            msg: msg
        })
        // res.json(msg)
    }, function (err, data) {
        console.log("Le super message en ajax : ", data)
        if (data) {
            console.log('GG !!!!!!!!!!!!!!!!!')
            res.json('Data found');
        } else {
            console.log('PROUT !!!!!!!!!!!!!!!!')
            res.json('Erreur')
        }
        console.log("mdr")
    })
    // console.log("user :", user)
});
app.get("/sub", function (req, res) {
    res.render('sub');
});
app.get('/gigotBitume', function (req, res) {
    res.render('gigotBitume');
});
app.get("/signUp", function (req, res) {
    const user = req.session.user;
    const name = req.session.user.name;
    req.db.collection('users').find().toArray((err, name) => {
        res.render('index', {
            name: name,
            user: user,
        });
    })
    const msg = req.session.msg;
    req.db.collection('messages').find().toArray((err, msg) => {
        console.log("MSG : ", msg)
        res.render('index', {
            msg: msg
        })
        // res.json(msg)
    }, function (err, data) {
        console.log("Le super message en ajax : ", data)
        if (data) {
            console.log('GG !!!!!!!!!!!!!!!!!')
            res.json('Data found');
        } else {
            console.log('PROUT !!!!!!!!!!!!!!!!')
            res.json('Erreur')
        }
        console.log("mdr")
    })
    // console.log("req.session ==> ", req.session);
});
app.get("/signIn", function (req, res) {
    const user = req.session.user;
    const name = req.session.user.name;
    req.db.collection('users').find().toArray((err, name) => {
        res.render('index', {
            name: name,
            user: user,
        });
    });
    const msg = req.session.msg;
    req.db.collection('messages').find().toArray((err, msg) => {
        console.log("MSG : ", msg)
        res.render('index', {
            msg: msg
        })
        // res.json(msg)
    }, function (err, data) {
        console.log("Le super message en ajax : ", data)
        if (data) {
            console.log('GG !!!!!!!!!!!!!!!!!')
            res.json('Data found');
        } else {
            console.log('PROUT !!!!!!!!!!!!!!!!')
            res.json('Erreur')
        }
        console.log("mdr")
    })

    console.log("req.session.user ==> ", req.session.user);
});
app.get("/message", function (req, res) {
    const msg = req.session.msg;
    console.log("msg : ", msg)
    // console.log(req); console.log(res);
    req.db.collection('messages').find().toArray((err, msg) => {
        console.log("MSG : ", msg)
        res.render('index', {
            msg: msg
        })
        // res.json(msg)
    }, function (err, data) {
        console.log("Le super message en ajax : ", data)
        if (data) {
            console.log('GG !!!!!!!!!!!!!!!!!')
            res.json('Data found');
        } else {
            console.log('PROUT !!!!!!!!!!!!!!!!')
            res.json('Erreur')
        }
        console.log("mdr")
    })
    console.log("msg : ", msg)
    console.log("req.session.msg ==> ", req.session.msg);
});
app.get("/logout", function (req, res) {
    res.redirect("/");
    req.session.destroy();
});

app.get("/404", function (req, res, next) {
    res.status(404);
    // respond with pug page
    res.render("404");
});

// --------------------------------------

app.listen(process.env.PORT || 3000, function () {
    console.log("Serveur connecté sur le port 3000");
});

module.exports = app;