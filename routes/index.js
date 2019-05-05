var express = require('express');
var router = express.Router();
// let shortId = require('short-id')

/* GET home page. */
router.get('/', function (req, res) {
  const user = req.session.user;
  const name = req.session.name;
  req.db.collection('users').find().toArray((err, name) => {
    res.render('index', {
      name: name,
      user: user,
    });
  })
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
    // /---/  MONGO  /---/ //
    req.db.collection('messages').insertOne(
      message,
      err => {
        if (err) {
          throw err;
        } else {
          req.session.message = message;
        }
        console.log("message.msg : ", message.msg)
        console.log("req.session.message : ", req.session.message)
      })
    console.log(" message stocké !")
  })

module.exports = router;