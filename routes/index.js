var express = require('express');
var router = express.Router();
// let shortId = require('short-id')

/* GET home page. */
router.get('/', function (req, res) {
  const name = req.session.name;
  if (req.session.user) {
    const user = req.session.user;
    req.db.collection('users').find().toArray((err, name) => {
      res.render('index', {
        name: name,
        user: user,
      });
    })
  }
  const msg = req.session.msg;
  req.db.collection('messages').find().toArray((err, msg) => {
    console.log("TEST msg render")
    res.render('index', {
      msg: msg
    },
      err => {
        if (err) {
          throw err;
        } else {
          req.session.msg = msg;
        }
        console.log("req.session.msg : ", req.session.msg)
      });

  });
  console.log("req.session.user ==> ", req.session.user);
  console.log("req.session ==> ", req.session);
})
  .post('/signUp', function (req, res) {
    // Nous utilisons le schéma Piscine
    let user = {
      name: req.body.pseudo.trim(),
      password: req.body.password
    }
    // /---/  MONGO  /---/ //
    req.db.collection('users').findOne({
      "name": {
        $regex: user.name,
        $options: "is"
      },
      "password": {
        $regex: user.password,
        $options: "is"
      },
    }, function (err, result) {
      if (result) {
        console.log("result --->", result)
        console.log("Le pseudo et/ou le mot de passe est déja pris")
        res.render('signUp', {
          error: true,
          message: "Le pseudo et/ou le mot de passe est déja pris"
        })
      } else {
        // bcrypt.hash(req.body.password, 10, function (err, hash) {
        //   // Store hash in database
        // });
        req.db.collection('users').insertOne(user,
          err => {
            if (err) {
              throw err;
            } else {
              req.session.user = user;
              res.render("index", {
                user: user
              });
            }
          })
      }
    })
    console.log("req.session ==> ", req.session);
    console.log('--- --- Profil ajouté à la base de données--- ---')
  })
  .post('/signIn', function (req, res) {
    const {
      name,
      password
    } = {
      name: req.body.pseudo.trim(),
      password: req.body.password
    };
    // /---/  MONGO  /---/ //
    req.db.collection('users').findOne({
      name,
      password
    }, function (err, user) {
      if (user) {
        console.log("Connexion")
        req.session.user = user;
        res.render("index", {
          user: user,
        });
        // bcrypt.hash(req.body.password, 10, function (err, hash) {
        //   // Store hash in database
        // });
      }
    })
    console.log('--- --- Connexion --- ---')
  })
  .post('/message', function (req, res) {
    // console.log("*******************************")
    // console.log("req.body.msg : ", req.body.msg)
    let message = {
      msg: req.body.msg.trim()
    }
    req.db.collection('messages').find().toArray((err, msg) => {
      console.log("/message : ", msg || 'Aucun message')
      res.render('index', {
        msg: msg
      })
      // res.json(msg)
    })
    // /---/  MONGO  /---/ //
    req.db.collection('messages').insertOne(
      message,
      err => {
        if (err) {
          throw err;
        } else {
          req.session.msg = message;
        }
        console.log("req.session.message : ", req.session.msg)
      })
    console.log(" message stocké !")
  })

module.exports = router;