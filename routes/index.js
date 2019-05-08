var express = require('express');
var router = express.Router();
// let shortId = require('short-id')

/* GET home page. */
router.get('/', function (req, res) {
  res.redirect('/accueil');
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
    console.log("POST('/signup') - req.session ==> ", req.session);
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
    // res.redirect("/accueil");
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
        msg: msg,
        moment: function () {
          var dateNow = new Date();
          var dd = dateNow.getDate();
          var monthSingleDigit = dateNow.getMonth() + 1,
            mm = monthSingleDigit < 10 ? '0' + monthSingleDigit : monthSingleDigit;
          var yy = dateNow.getFullYear().toString().substr(2);
          return (mm + '/' + dd + '/' + yy);
        }
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
        console.log("post('/message') : ", req.session.msg)
      })
    console.log(" message stocké !")
    res.redirect('/accueil');
  })

module.exports = router;