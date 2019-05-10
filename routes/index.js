const express = require('express');
const router = express.Router();
const moment = require('moment');
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
          error: false
        });
        // bcrypt.hash(req.body.password, 10, function (err, hash) {
        //   // Store hash in database
        // });

      } else {
        console.log("Mauvais pseudo ou mot de passe")
        res.render("index", {
          user: user,
          error: true
        });
      }
    })
    console.log('--- --- Connexion --- ---')
    // res.redirect("/accueil");
  })
  .post('/message', function (req, res) {
    // console.log("*******************************")
    // console.log("req.body.msg : ", req.body.msg)
    let message = {
      msg: req.body.msg.trim(),
      pseudo: req.body.pseudo.trim(),
      msgMoment: moment().format("DD/MM")
    }
    if ((message.pseudo == "") || (message.pseudo == null)) {
      console.log("###-----   ANONYMOUS   -----###")
      message.pseudo = "Anonymous"
      // message.pseudo = "Mr.Smith"
    }
    console.log("message.pseudo ==> ", message.pseudo)
    // req.db.collection('messages').find().toArray((err, msg) => {
    //   console.log("/message : ", msg)
    //   res.render('index', {
    //     msg: msg,
    //     pseudo: message.pseudo,
    //     moment: message.msgMoment,
    //   })
    //   // res.json(msg)
    // })
    // /---/  MONGO  /---/ //
    req.db.collection('messages').insertOne(
      message,
      err => {
        if (err) {
          throw err;
        } else {
          req.session.msg = message;
          req.session.moment = message.msgMoment;
        }
        console.log("post('/message') : ", req.session.msg)
      })
    console.log(" message stocké !")
    res.redirect('/accueil');
  })

module.exports = router;