document.addEventListener("DOMContentLoaded", function (event) {
    console.log("Faire-Part chargé avec succes !")

    var start = document.getElementById('start');

    function showStuff(id) {
        document.getElementById(id).style.display = 'block'
    }
    function hideStuff(id) {
        document.getElementById(id).style.display = 'none'
    }
    ////////////////////////////////
    //   -- DISPLAY & SCORES --   //
    ////////////////////////////////
    const obj = {
        askOne: {
            ask: document.getElementById('askOne'),
            etat: false
        },
        one: {
            bouffe: document.getElementById('aBouffe'),
            bouffeEtat: false,
            bouffeScore: 0,
            revolte: document.getElementById('aRevolte'),
            revolteEtat: false,
            revolteScore: 0,
            vegan: document.getElementById('aVegan'),
            veganEtat: false,
            veganScore: 0,
            alcool: document.getElementById('aAlcool'),
            alcoolEtat: false,
            alcoolScore: 0
        },
        askTwo: {
            ask: document.getElementById('askTwo'),
            etat: false
        },
        two: {
            bouffe: document.getElementById('bBouffe'),
            bouffeEtat: false,
            bouffeScore: 0,
            revolte: document.getElementById('bRevolte'),
            revolteEtat: false,
            revolteScore: 0,
            vegan: document.getElementById('bVegan'),
            veganEtat: false,
            veganScore: 0,
            alcool: document.getElementById('bAlcool'),
            alcoolEtat: false,
            alcoolScore: 0
        },
        askThree: {
            ask: document.getElementById('askThree'),
            etat: false
        },
        three: {
            bouffe: document.getElementById('cBouffe'),
            bouffeEtat: false,
            bouffeScore: 0,
            revolte: document.getElementById('cRevolte'),
            revolteEtat: false,
            revolteScore: 0,
            vegan: document.getElementById('cVegan'),
            veganEtat: false,
            veganScore: 0,
            alcool: document.getElementById('cAlcool'),
            alcoolEtat: false,
            alcoolScore: 0
        },
        askFour: {
            ask: document.getElementById('askFour'),
            etat: false
        },
        four: {
            bouffe: document.getElementById('dBouffe'),
            bouffeEtat: false,
            bouffeScore: 0,
            revolte: document.getElementById('dRevolte'),
            revolteEtat: false,
            revolteScore: 0,
            vegan: document.getElementById('dVegan'),
            veganEtat: false,
            veganScore: 0,
            alcool: document.getElementById('dAlcool'),
            alcoolEtat: false,
            alcoolScore: 0
        },
        askFive: {
            ask: document.getElementById('askFive'),
            etat: false
        },
        five: {
            bouffe: document.getElementById('eBouffe'),
            bouffeEtat: false,
            bouffeScore: 0,
            revolte: document.getElementById('eRevolte'),
            revolteEtat: false,
            revolteScore: 0,
            vegan: document.getElementById('eVegan'),
            veganEtat: false,
            veganScore: 0,
            alcool: document.getElementById('eAlcool'),
            alcoolEtat: false,
            alcoolScore: 0
        },
        askSix: {
            ask: document.getElementById('askSix'),
            etat: false
        },
        six: {
            bouffe: document.getElementById('fBouffe'),
            bouffeEtat: false,
            bouffeScore: 0,
            revolte: document.getElementById('fRevolte'),
            revolteEtat: false,
            revolteScore: 0,
            vegan: document.getElementById('fVegan'),
            veganEtat: false,
            veganScore: 0,
            alcool: document.getElementById('fAlcool'),
            alcoolEtat: false,
            alcoolScore: 0
        },
        askSeven: {
            ask: document.getElementById('askSeven'),
            etat: false
        },
        seven: {
            bouffe: document.getElementById('gBouffe'),
            bouffeEtat: false,
            bouffeScore: 0,
            revolte: document.getElementById('gRevolte'),
            revolteEtat: false,
            revolteScore: 0,
            vegan: document.getElementById('gVegan'),
            veganEtat: false,
            veganScore: 0,
            alcool: document.getElementById('gAlcool'),
            alcoolEtat: false,
            alcoolScore: 0
        },
        askEight: {
            ask: document.getElementById('askEight'),
            etat: false
        },
        eight: {
            bouffe: document.getElementById('hBouffe'),
            bouffeEtat: false,
            bouffeScore: 0,
            revolte: document.getElementById('hRevolte'),
            revolteEtat: false,
            revolteScore: 0,
            vegan: document.getElementById('hVegan'),
            veganEtat: false,
            veganScore: 0,
            alcool: document.getElementById('hAlcool'),
            alcoolEtat: false,
            alcoolScore: 0
        },
        askNine: {
            ask: document.getElementById('askNine'),
            etat: false
        },
        nine: {
            bouffe: document.getElementById('iBouffe'),
            bouffeEtat: false,
            bouffeScore: 0,
            revolte: document.getElementById('iRevolte'),
            revolteEtat: false,
            revolteScore: 0,
            vegan: document.getElementById('iVegan'),
            veganEtat: false,
            veganScore: 0,
            alcool: document.getElementById('iAlcool'),
            alcoolEtat: false,
            alcoolScore: 0
        },
        askTen: {
            ask: document.getElementById('askTen'),
            etat: false
        },
        ten: {
            bouffe: document.getElementById('jBouffe'),
            bouffeEtat: false,
            bouffeScore: 0,
            revolte: document.getElementById('jRevolte'),
            revolteEtat: false,
            revolteScore: 0,
            vegan: document.getElementById('jVegan'),
            veganEtat: false,
            veganScore: 0,
            alcool: document.getElementById('jAlcool'),
            alcoolEtat: false,
            alcoolScore: 0
        },
        askFin: {
            ask: document.getElementById('askFin'),
            etat: false
        },
        fin: {
            finBouffe: document.getElementById('finBouffe'),
            finBouffeEtat: false,
            finBouffeScore: 0,
            finRevolte: document.getElementById('finRevolte'),
            finRevolteEtat: false,
            finRevolteScore: 0,
            finVegan: document.getElementById('finVegan'),
            finVeganEtat: false,
            finVeganScore: 0,
            finAlcool: document.getElementById('finAlcool'),
            finAlcoolEtat: false,
            finAlcoolScore: 0,

            finBouffeRevolte: document.getElementById('finBouffeRevolte'),
            finBouffeVegan: document.getElementById('finBouffeVegan'),
            finBouffeAlcool: document.getElementById('finBouffeAlcool'),

            finVeganRevolte: document.getElementById('finVeganRevolte'),
            finVeganAlcool: document.getElementById('finVeganAlcool'),

            finRevolteAlcool: document.getElementById('finRevolteAlcool'),

            finBouffeRevolteAlcool: document.getElementById('finBouffeRevolteAlcool'),
            finBouffeRevolteVegan: document.getElementById('finBouffeRevolteVegan'),
            finBouffeVeganAlcool: document.getElementById('finBouffeVeganAlcool'),
            finVeganAlcoolRevolte: document.getElementById('finVeganAlcoolRevolte')
        }
    }
    /////////////////////

    ///////////////////////
    //    -- START --    // 
    ///////////////////////
    start.addEventListener('click', function () {
        // console.log('START')
        showStuff('askOne')
        hideStuff('start')
        askOne = true;
        showStuff('reset')
    })
    ///////////////////////

    ////////////////////////
    //    -- TOTAUX --    // 
    ////////////////////////
    var totalBouffe = 0;
    var totalRevolte = 0;
    var totalVegan = 0;
    var totalAlcool = 0;
    ///////////////////////

    function scores(n) {
        totalBouffe = obj['one'].bouffeScore +
            obj['two'].bouffeScore +
            obj['three'].bouffeScore +
            obj['four'].bouffeScore +
            obj['five'].bouffeScore +
            obj['six'].bouffeScore +
            obj['seven'].bouffeScore +
            obj['eight'].bouffeScore +
            obj['nine'].bouffeScore +
            obj['ten'].bouffeScore
        totalRevolte = obj['one'].revolteScore +
            obj['two'].revolteScore +
            obj['three'].revolteScore +
            obj['four'].revolteScore +
            obj['five'].revolteScore +
            obj['six'].revolteScore +
            obj['seven'].revolteScore +
            obj['eight'].revolteScore +
            obj['nine'].revolteScore +
            obj['ten'].revolteScore
        totalVegan = obj['one'].veganScore +
            obj['two'].veganScore +
            obj['three'].veganScore +
            obj['four'].veganScore +
            obj['five'].veganScore +
            obj['six'].veganScore +
            obj['seven'].veganScore +
            obj['eight'].veganScore +
            obj['nine'].veganScore +
            obj['ten'].veganScore
        totalAlcool = obj['one'].alcoolScore +
            obj['two'].alcoolScore +
            obj['three'].alcoolScore +
            obj['four'].alcoolScore +
            obj['five'].alcoolScore +
            obj['six'].alcoolScore +
            obj['seven'].alcoolScore +
            obj['eight'].alcoolScore +
            obj['nine'].alcoolScore +
            obj['ten'].alcoolScore
        console.log(" | Bouffe : ", totalBouffe + " | Revolte : ", totalRevolte + " | Vegan : ", totalVegan + " | Alcool :", totalAlcool)
    }

    // //////////////////////////////////////////////////////////////////////

    function toggleBouffe(number) {
        // ##########  -  BOUFFE  -  ###########
        console.log("BOUFFE")

        if (!obj[number].bouffeEtat) {
            totalBouffe++
            obj[number].bouffeScore++
            obj[number].bouffeEtat = true
            // -------- STYLE -------- //
            obj[number].bouffe.style.backgroundColor = "#ffffff";
            obj[number].bouffe.style["boxShadow"] = "inset #000000ad 0px 0px 5px";
            // --------       -------- //
            if (obj[number].revolteEtat) {
                totalRevolte--
                obj[number].revolteScore--
                obj[number].revolteEtat = false
                // -------- STYLE -------- //
                obj[number].revolte.style.backgroundColor = "#ffeed5";
                obj[number].revolte.style["boxShadow"] = "none";
                // --------       -------- //
            }
            if (obj[number].veganEtat) {
                totalVegan--
                obj[number].veganScore--
                obj[number].veganEtat = false
                // -------- STYLE -------- //
                obj[number].vegan.style.backgroundColor = "#ffeed5";
                obj[number].vegan.style["boxShadow"] = "none";
                // --------       -------- //
            }
            if (obj[number].alcoolEtat) {
                totalAlcool--
                obj[number].alcoolScore--
                obj[number].alcoolEtat = false
                // -------- STYLE -------- //
                obj[number].alcool.style.backgroundColor = "#ffeed5";
                obj[number].alcool.style["boxShadow"] = "none";
                // --------       -------- //
            }
        } else {
            if (obj[number].bouffeScore > 0) {
                totalBouffe--
                obj[number].bouffeScore--
                obj[number].bouffeEtat = false
                // -------- STYLE -------- //
                obj[number].bouffe.style.backgroundColor = "#ffeed5";
                obj[number].bouffe.style["boxShadow"] = "none";
                // --------       -------- //
            }
        }
    }
    function toggleRevolte(number) {
        // ##########  -  REVOLTE  -  ###########
        console.log("REVOLTE")
        if (!obj[number].revolteEtat) {
            totalRevolte++
            obj[number].revolteScore++
            obj[number].revolteEtat = true
            // -------- STYLE -------- //
            obj[number].revolte.style.backgroundColor = "#ffffff";
            obj[number].revolte.style["boxShadow"] = "inset #000000ad 0px 0px 5px";
            // --------       -------- //
            if (obj[number].bouffeEtat) {
                totalBouffe--
                obj[number].bouffeScore--
                obj[number].bouffeEtat = false
                // -------- STYLE -------- //
                obj[number].bouffe.style.backgroundColor = "#ffeed5";
                obj[number].bouffe.style["boxShadow"] = "none";
                // --------       -------- //
            }
            if (obj[number].veganEtat) {
                totalVegan--
                obj[number].veganScore--
                obj[number].veganEtat = false
                // -------- STYLE -------- //
                obj[number].vegan.style.backgroundColor = "#ffeed5";
                obj[number].vegan.style["boxShadow"] = "none";
                // --------       -------- //
            }
            if (obj[number].alcoolEtat) {
                totalAlcool--
                obj[number].alcoolScore--
                obj[number].alcoolEtat = false
                // -------- STYLE -------- //
                obj[number].alcool.style.backgroundColor = "#ffeed5";
                obj[number].alcool.style["boxShadow"] = "none";
                // --------       -------- //
            }
        } else {
            if (obj[number].revolteScore > 0) {
                totalRevolte--
                obj[number].revolteScore--
                obj[number].revolteEtat = false
                // -------- STYLE -------- //
                obj[number].revolte.style.backgroundColor = "#ffeed5";
                obj[number].revolte.style["boxShadow"] = "none";
                // --------       -------- //
            }
        }
    }
    function toggleVegan(number) {
        // ##########  -  VEGAN  -  ###########
        console.log("VEGAN")
        if (!obj[number].veganEtat) {
            totalVegan++
            obj[number].veganScore++
            obj[number].veganEtat = true
            // -------- STYLE -------- //
            obj[number].vegan.style.backgroundColor = "#ffffff";
            obj[number].vegan.style["boxShadow"] = "inset #000000ad 0px 0px 5px";
            // --------       -------- //
            if (obj[number].bouffeEtat) {
                totalBouffe--
                obj[number].bouffeScore--
                obj[number].bouffeEtat = false
                // -------- STYLE -------- //
                obj[number].bouffe.style.backgroundColor = "#ffeed5";
                obj[number].bouffe.style["boxShadow"] = "none";
                // --------       -------- //
            }
            if (obj[number].revolteEtat) {
                totalRevolte
                obj[number].revolteScore--
                obj[number].revolteEtat = false
                // -------- STYLE -------- //
                obj[number].revolte.style.backgroundColor = "#ffeed5";
                obj[number].revolte.style["boxShadow"] = "none";
                // --------       -------- //
            }
            if (obj[number].alcoolEtat) {
                totalAlcool--
                obj[number].alcoolScore--
                obj[number].alcoolEtat = false
                // -------- STYLE -------- //
                obj[number].alcool.style.backgroundColor = "#ffeed5";
                obj[number].alcool.style["boxShadow"] = "none";
                // --------       -------- //
            }
        } else {
            if (obj[number].veganScore > 0) {
                totalVegan--
                obj[number].veganScore--
                obj[number].veganEtat = false
                // -------- STYLE -------- //
                obj[number].vegan.style.backgroundColor = "#ffeed5";
                obj[number].vegan.style["boxShadow"] = "none";
                // --------       -------- //
            }
        }
    }
    function toggleAlcool(number) {
        // ##########  -  ALCOOL  -  ###########
        console.log("ALCOOL")
        if (!obj[number].alcoolEtat) {
            totalAlcool++
            obj[number].alcoolScore++
            obj[number].alcoolEtat = true
            // -------- STYLE -------- //
            obj[number].alcool.style.backgroundColor = "#ffffff";
            obj[number].alcool.style["boxShadow"] = "inset #000000ad 0px 0px 5px";
            // --------       -------- //
            if (obj[number].bouffeEtat) {
                totalBouffe--
                obj[number].bouffeScore--
                obj[number].bouffeEtat = false
                // -------- STYLE -------- //
                obj[number].bouffe.style.backgroundColor = "#ffeed5";
                obj[number].bouffe.style["boxShadow"] = "none";
                // --------       -------- //
            }
            if (obj[number].veganEtat) {
                totalVegan--
                obj[number].veganScore--
                obj[number].veganEtat = false
                // -------- STYLE -------- //
                obj[number].vegan.style.backgroundColor = "#ffeed5";
                obj[number].vegan.style["boxShadow"] = "none";
                // --------       -------- //
            }
            if (obj[number].revolteEtat) {
                totalRevolte--
                obj[number].revolteScore--
                obj[number].revolteEtat = false
                // -------- STYLE -------- //
                obj[number].revolte.style.backgroundColor = "#ffeed5";
                obj[number].revolte.style["boxShadow"] = "none";
                // --------       -------- //
            }
        } else {
            if (obj[number].alcoolScore > 0) {
                totalAlcool--
                obj[number].alcoolScore--
                obj[number].alcoolEtat = false
                // -------- STYLE -------- //
                obj[number].alcool.style.backgroundColor = "#ffeed5";
                obj[number].alcool.style["boxShadow"] = "none";
                // --------       -------- //
            }
        }
    }
    /////////////////////////////////////////////////////////
    // -------------  REPONSES - QUESTION 1  ------------- //
    /////////////////////////////////////////////////////////
    obj.one.bouffe.addEventListener('click', function () {
        // console.log("Click event")
        toggleBouffe('one')
        scores("one")
        obj.askOne.ask.style.display = "none";
        obj.askTwo.ask.style.display = "block";
    })
    obj.one.revolte.addEventListener('click', function () {
        // console.log("Click event")
        toggleRevolte('one')
        scores("one")
        obj.askOne.ask.style.display = "none";
        obj.askTwo.ask.style.display = "block";
    })
    obj.one.vegan.addEventListener('click', function () {
        // console.log("Click event")
        toggleVegan('one')
        scores("one")
        obj.askOne.ask.style.display = "none";
        obj.askTwo.ask.style.display = "block";
    })
    obj.one.alcool.addEventListener('click', function () {
        // console.log("Click event")
        toggleAlcool('one')
        scores("one")
        obj.askOne.ask.style.display = "none";
        obj.askTwo.ask.style.display = "block";
    })
    /////////////////////////////////////////////////////////
    // -------------  REPONSES - QUESTION 2  ------------- //
    /////////////////////////////////////////////////////////
    obj.two.bouffe.addEventListener('click', function () {
        // console.log("Click event")
        toggleBouffe('two')
        scores("two")
        obj.askTwo.ask.style.display = "none";
        obj.askThree.ask.style.display = "block";
    })
    obj.two.revolte.addEventListener('click', function () {
        // console.log("Click event")
        toggleRevolte('two')
        scores("two")
        obj.askTwo.ask.style.display = "none";
        obj.askThree.ask.style.display = "block";
    })
    obj.two.vegan.addEventListener('click', function () {
        // console.log("Click event")
        toggleVegan('two')
        scores("two")
        obj.askTwo.ask.style.display = "none";
        obj.askThree.ask.style.display = "block";
    })
    obj.two.alcool.addEventListener('click', function () {
        // console.log("Click event")
        toggleAlcool('two')
        scores("two")
        obj.askTwo.ask.style.display = "none";
        obj.askThree.ask.style.display = "block";
    })
    /////////////////////////////////////////////////////////
    // -------------  REPONSES - QUESTION 3  ------------- //
    /////////////////////////////////////////////////////////
    obj.three.bouffe.addEventListener('click', function () {
        // console.log("Click event")
        toggleBouffe('three')
        scores("three")
        obj.askThree.ask.style.display = "none";
        obj.askFour.ask.style.display = "block";
    })
    obj.three.revolte.addEventListener('click', function () {
        // console.log("Click event")
        toggleRevolte('three')
        scores("three")
        obj.askThree.ask.style.display = "none";
        obj.askFour.ask.style.display = "block";
    })
    obj.three.vegan.addEventListener('click', function () {
        // console.log("Click event")
        toggleVegan('three')
        scores("three")
        obj.askThree.ask.style.display = "none";
        obj.askFour.ask.style.display = "block";
    })
    obj.three.alcool.addEventListener('click', function () {
        // console.log("Click event")
        toggleAlcool('three')
        scores("three")
        obj.askThree.ask.style.display = "none";
        obj.askFour.ask.style.display = "block";
    })
    /////////////////////////////////////////////////////////
    // -------------  REPONSES - QUESTION 4  ------------- //
    /////////////////////////////////////////////////////////
    obj.four.bouffe.addEventListener('click', function () {
        // console.log("Click event")
        toggleBouffe('four')
        scores("four")
        obj.askFour.ask.style.display = "none";
        obj.askFive.ask.style.display = "block";
    })
    obj.four.revolte.addEventListener('click', function () {
        // console.log("Click event")
        toggleRevolte('four')
        scores("four")
        obj.askFour.ask.style.display = "none";
        obj.askFive.ask.style.display = "block";
    })
    obj.four.vegan.addEventListener('click', function () {
        // console.log("Click event")
        toggleVegan('four')
        scores("four")
        obj.askFour.ask.style.display = "none";
        obj.askFive.ask.style.display = "block";
    })
    obj.four.alcool.addEventListener('click', function () {
        // console.log("Click event")
        toggleAlcool('four')
        scores("four")
        obj.askFour.ask.style.display = "none";
        obj.askFive.ask.style.display = "block";
    })
    /////////////////////////////////////////////////////////
    // -------------  REPONSES - QUESTION 5  ------------- //
    /////////////////////////////////////////////////////////
    obj.five.bouffe.addEventListener('click', function () {
        // console.log("Click event")
        toggleBouffe('five')
        scores("five")
        obj.askFive.ask.style.display = "none";
        obj.askSix.ask.style.display = "block";
    })
    obj.five.revolte.addEventListener('click', function () {
        // console.log("Click event")
        toggleRevolte('five')
        scores("five")
        obj.askFive.ask.style.display = "none";
        obj.askSix.ask.style.display = "block";
    })
    obj.five.vegan.addEventListener('click', function () {
        // console.log("Click event")
        toggleVegan('five')
        scores("five")
        obj.askFive.ask.style.display = "none";
        obj.askSix.ask.style.display = "block";
    })
    obj.five.alcool.addEventListener('click', function () {
        // console.log("Click event")
        toggleAlcool('five')
        scores("five")
        obj.askFive.ask.style.display = "none";
        obj.askSix.ask.style.display = "block";
    })
    /////////////////////////////////////////////////////////
    // -------------  REPONSES - QUESTION 6  ------------- //
    /////////////////////////////////////////////////////////
    obj.six.bouffe.addEventListener('click', function () {
        // console.log("Click event")
        toggleBouffe('six')
        scores("six")
        obj.askSix.ask.style.display = "none";
        obj.askSeven.ask.style.display = "block";
    })
    obj.six.revolte.addEventListener('click', function () {
        // console.log("Click event")
        toggleRevolte('six')
        scores("six")
        obj.askSix.ask.style.display = "none";
        obj.askSeven.ask.style.display = "block";
    })
    obj.six.vegan.addEventListener('click', function () {
        // console.log("Click event")
        toggleVegan('six')
        scores("six")
        obj.askSix.ask.style.display = "none";
        obj.askSeven.ask.style.display = "block";
    })
    obj.six.alcool.addEventListener('click', function () {
        // console.log("Click event")
        toggleAlcool('six')
        scores("six")
        obj.askSix.ask.style.display = "none";
        obj.askSeven.ask.style.display = "block";
    })
    /////////////////////////////////////////////////////////
    // -------------  REPONSES - QUESTION 7  ------------- //
    /////////////////////////////////////////////////////////
    obj.seven.bouffe.addEventListener('click', function () {
        // console.log("Click event")
        toggleBouffe('seven')
        scores("seven")
        obj.askSeven.ask.style.display = "none";
        obj.askEight.ask.style.display = "block";
    })
    obj.seven.revolte.addEventListener('click', function () {
        // console.log("Click event")
        toggleRevolte('seven')
        scores("seven")
        obj.askSeven.ask.style.display = "none";
        obj.askEight.ask.style.display = "block";
    })
    obj.seven.vegan.addEventListener('click', function () {
        // console.log("Click event")
        toggleVegan('seven')
        scores("seven")
        obj.askSeven.ask.style.display = "none";
        obj.askEight.ask.style.display = "block";
    })
    obj.seven.alcool.addEventListener('click', function () {
        // console.log("Click event")
        toggleAlcool('seven')
        scores("seven")
        obj.askSeven.ask.style.display = "none";
        obj.askEight.ask.style.display = "block";
    })
    /////////////////////////////////////////////////////////
    // -------------  REPONSES - QUESTION 8  ------------- //
    /////////////////////////////////////////////////////////
    obj.eight.bouffe.addEventListener('click', function () {
        // console.log("Click event")
        toggleBouffe('eight')
        scores("eight")
        obj.askEight.ask.style.display = "none";
        obj.askNine.ask.style.display = "block";
    })
    obj.eight.revolte.addEventListener('click', function () {
        // console.log("Click event")
        toggleRevolte('eight')
        scores("eight")
        obj.askEight.ask.style.display = "none";
        obj.askNine.ask.style.display = "block";
    })
    obj.eight.vegan.addEventListener('click', function () {
        // console.log("Click event")
        toggleVegan('eight')
        scores("eight")
        obj.askEight.ask.style.display = "none";
        obj.askNine.ask.style.display = "block";
    })
    obj.eight.alcool.addEventListener('click', function () {
        // console.log("Click event")
        toggleAlcool('eight')
        scores("eight")
        obj.askEight.ask.style.display = "none";
        obj.askNine.ask.style.display = "block";
    })
    /////////////////////////////////////////////////////////
    // -------------  REPONSES - QUESTION 9  ------------- //
    /////////////////////////////////////////////////////////
    obj.nine.bouffe.addEventListener('click', function () {
        // console.log("Click event")
        toggleBouffe('nine')
        scores("nine")
        obj.askNine.ask.style.display = "none";
        obj.askTen.ask.style.display = "block";
    })
    obj.nine.revolte.addEventListener('click', function () {
        // console.log("Click event")
        toggleRevolte('nine')
        scores("nine")
        obj.askNine.ask.style.display = "none";
        obj.askTen.ask.style.display = "block";
    })
    obj.nine.vegan.addEventListener('click', function () {
        // console.log("Click event")
        toggleVegan('nine')
        scores("nine")
        obj.askNine.ask.style.display = "none";
        obj.askTen.ask.style.display = "block";
    })
    obj.nine.alcool.addEventListener('click', function () {
        // console.log("Click event")
        toggleAlcool('nine')
        scores("nine")
        obj.askNine.ask.style.display = "none";
        obj.askTen.ask.style.display = "block";
    })

    function conclusionDesScores() {
        obj.askFin.ask.style.display = "block";
        if ((totalBouffe > totalRevolte) && (totalBouffe > totalVegan) && (totalBouffe > totalAlcool)) {
            ////  ---  SI TOTAL BOUFFE EST LE PLUS GROS SCORE  ---  ////
            console.log("Vous mangez trop !")
            console.log("totalBouffe ", totalBouffe)
            obj.fin.finBouffeRevolte.style.display = "none";
            obj.fin.finBouffeVegan.style.display = "none";
            obj.fin.finBouffeAlcool.style.display = "none";
            obj.fin.finVeganRevolte.style.display = "none";
            obj.fin.finVeganAlcool.style.display = "none";
            obj.fin.finRevolteAlcool.style.display = "none";

            obj.fin.finBouffeRevolteAlcool.style.display = "none";
            obj.fin.finBouffeRevolteVegan.style.display = "none";
            obj.fin.finBouffeVeganAlcool.style.display = "none";
            obj.fin.finVeganAlcoolRevolte.style.display = "none";

            // ----------------------------------------------------------------------------
            obj.fin.finBouffe.style.display = "block";
            // ----------------------------------------------------------------------------
            obj.fin.finRevolte.style.display = "none";
            obj.fin.finVegan.style.display = "none";
            obj.fin.finAlcool.style.display = "none";
        } else if ((totalRevolte > totalBouffe) && (totalRevolte > totalVegan) && (totalRevolte > totalAlcool)) {
            ////  ---  SI TOTAL REVOLTE EST LE PLUS GROS SCORE  ---  ////
            console.log("Vous vous révoltez trop !")
            console.log("totalRevolte ", totalRevolte)
            obj.fin.finBouffeRevolte.style.display = "none";
            obj.fin.finBouffeVegan.style.display = "none";
            obj.fin.finBouffeAlcool.style.display = "none";
            obj.fin.finVeganRevolte.style.display = "none";
            obj.fin.finVeganAlcool.style.display = "none";
            obj.fin.finRevolteAlcool.style.display = "none";

            obj.fin.finBouffeRevolteAlcool.style.display = "none";
            obj.fin.finBouffeRevolteVegan.style.display = "none";
            obj.fin.finBouffeVeganAlcool.style.display = "none";
            obj.fin.finVeganAlcoolRevolte.style.display = "none";

            // ----------------------------------------------------------------------------
            obj.fin.finRevolte.style.display = "block";
            // ----------------------------------------------------------------------------
            obj.fin.finBouffe.style.display = "none";
            obj.fin.finVegan.style.display = "none";
            obj.fin.finAlcool.style.display = "none";
        } else if ((totalVegan > totalBouffe) && (totalVegan > totalRevolte) && (totalVegan > totalAlcool)) {
            ////  ---  SI TOTAL VEGAN EST LE PLUS GROS SCORE  ---  ////
            console.log("Vous êtes trop vegan !")
            console.log("totalVegan ", totalVegan)
            obj.fin.finBouffeRevolte.style.display = "none";
            obj.fin.finBouffeVegan.style.display = "none";
            obj.fin.finBouffeAlcool.style.display = "none";
            obj.fin.finVeganRevolte.style.display = "none";
            obj.fin.finVeganAlcool.style.display = "none";
            obj.fin.finRevolteAlcool.style.display = "none";

            obj.fin.finBouffeRevolteAlcool.style.display = "none";
            obj.fin.finBouffeRevolteVegan.style.display = "none";
            obj.fin.finBouffeVeganAlcool.style.display = "none";
            obj.fin.finVeganAlcoolRevolte.style.display = "none";

            // ----------------------------------------------------------------------------
            obj.fin.finVegan.style.display = "block";
            // ----------------------------------------------------------------------------
            obj.fin.finRevolte.style.display = "none";
            obj.fin.finBouffe.style.display = "none";
            obj.fin.finAlcool.style.display = "none";
        } else if ((totalAlcool > totalBouffe) && (totalAlcool > totalRevolte) && (totalAlcool > totalVegan)) {
            ////  ---  SI TOTAL ALCOOL EST LE PLUS GROS SCORE  ---  ////
            console.log("Vous êtes trop alcoolique !")
            console.log("totalAlcool ", totalAlcool)
            obj.fin.finBouffeRevolte.style.display = "none";
            obj.fin.finBouffeVegan.style.display = "none";
            obj.fin.finBouffeAlcool.style.display = "none";
            obj.fin.finVeganRevolte.style.display = "none";
            obj.fin.finVeganAlcool.style.display = "none";
            obj.fin.finRevolteAlcool.style.display = "none";

            obj.fin.finBouffeRevolteAlcool.style.display = "none";
            obj.fin.finBouffeRevolteVegan.style.display = "none";
            obj.fin.finBouffeVeganAlcool.style.display = "none";
            obj.fin.finVeganAlcoolRevolte.style.display = "none";

            // ----------------------------------------------------------------------------
            obj.fin.finAlcool.style.display = "block";
            // ----------------------------------------------------------------------------
            obj.fin.finVegan.style.display = "none";
            obj.fin.finRevolte.style.display = "none";
            obj.fin.finBouffe.style.display = "none";
        } else if ((totalBouffe == totalRevolte) && (totalBouffe > totalVegan) && (totalBouffe > totalAlcool)) {
            console.log('EGALITE ENTRE BOUFFE ET REVOLTE')
            // #######################################################
            // ################ BOUFFE ET REVOLTE ####################
            obj.fin.finBouffeRevolte.style.display = "block";
            // ----------------------------------------------------------------------------
            obj.fin.finBouffeVegan.style.display = "none";
            obj.fin.finBouffeAlcool.style.display = "none";
            obj.fin.finVeganRevolte.style.display = "none";
            obj.fin.finVeganAlcool.style.display = "none";
            obj.fin.finRevolteAlcool.style.display = "none";

            obj.fin.finBouffeRevolteAlcool.style.display = "none";
            obj.fin.finBouffeRevolteVegan.style.display = "none";
            obj.fin.finBouffeVeganAlcool.style.display = "none";
            obj.fin.finVeganAlcoolRevolte.style.display = "none";


            obj.fin.finAlcool.style.display = "none";
            obj.fin.finVegan.style.display = "none";
            obj.fin.finRevolte.style.display = "none";
            obj.fin.finBouffe.style.display = "none";
        } else if ((totalBouffe == totalAlcool) && (totalBouffe > totalVegan) && (totalBouffe > totalRevolte)) {
            console.log('EGALITE ENTRE BOUFFE ET ALCOOL')
            // ######################################################
            // ################ BOUFFE ET ALCOOL ####################
            obj.fin.finBouffeAlcool.style.display = "block";
            // ----------------------------------------------------------------------------
            obj.fin.finBouffeRevolte.style.display = "none";
            obj.fin.finBouffeVegan.style.display = "none";
            obj.fin.finVeganRevolte.style.display = "none";
            obj.fin.finVeganAlcool.style.display = "none";
            obj.fin.finRevolteAlcool.style.display = "none";

            obj.fin.finBouffeRevolteAlcool.style.display = "none";
            obj.fin.finBouffeRevolteVegan.style.display = "none";
            obj.fin.finBouffeVeganAlcool.style.display = "none";
            obj.fin.finVeganAlcoolRevolte.style.display = "none";


            obj.fin.finAlcool.style.display = "none";
            obj.fin.finVegan.style.display = "none";
            obj.fin.finRevolte.style.display = "none";
            obj.fin.finBouffe.style.display = "none";
        } else if ((totalBouffe == totalVegan) && (totalBouffe > totalAlcool) && (totalBouffe > totalRevolte)) {
            console.log('EGALITE ENTRE BOUFFE ET VEGAN')
            // #####################################################
            // ################ BOUFFE ET VEGAN ####################
            obj.fin.finBouffeVegan.style.display = "block";
            // ----------------------------------------------------------------------------
            obj.fin.finBouffeAlcool.style.display = "none";
            obj.fin.finBouffeRevolte.style.display = "none";
            obj.fin.finVeganRevolte.style.display = "none";
            obj.fin.finVeganAlcool.style.display = "none";
            obj.fin.finRevolteAlcool.style.display = "none";

            obj.fin.finBouffeRevolteAlcool.style.display = "none";
            obj.fin.finBouffeRevolteVegan.style.display = "none";
            obj.fin.finBouffeVeganAlcool.style.display = "none";
            obj.fin.finVeganAlcoolRevolte.style.display = "none";


            obj.fin.finAlcool.style.display = "none";
            obj.fin.finVegan.style.display = "none";
            obj.fin.finRevolte.style.display = "none";
            obj.fin.finBouffe.style.display = "none";
        } else if ((totalVegan == totalRevolte) && (totalVegan > totalAlcool) && (totalVegan > totalBouffe)) {
            console.log('EGALITE ENTRE VEGAN ET REVOLTE')
            // #####################################################
            // ################ VEGAN ET REVOLTE ###################
            obj.fin.finVeganRevolte.style.display = "block";
            // ----------------------------------------------------------------------------
            obj.fin.finBouffeVegan.style.display = "none";
            obj.fin.finBouffeAlcool.style.display = "none";
            obj.fin.finBouffeRevolte.style.display = "none";
            obj.fin.finVeganAlcool.style.display = "none";
            obj.fin.finRevolteAlcool.style.display = "none";

            obj.fin.finBouffeRevolteAlcool.style.display = "none";
            obj.fin.finBouffeRevolteVegan.style.display = "none";
            obj.fin.finBouffeVeganAlcool.style.display = "none";
            obj.fin.finVeganAlcoolRevolte.style.display = "none";


            obj.fin.finAlcool.style.display = "none";
            obj.fin.finVegan.style.display = "none";
            obj.fin.finRevolte.style.display = "none";
            obj.fin.finBouffe.style.display = "none";
        } else if ((totalVegan == totalAlcool) && (totalVegan > totalRevolte) && (totalVegan > totalBouffe)) {
            console.log('EGALITE ENTRE VEGAN ET ALCOOL')
            // #####################################################
            // ################ VEGAN ET ALCOOL ####################
            obj.fin.finVeganAlcool.style.display = "block";
            // ----------------------------------------------------------------------------
            obj.fin.finVeganRevolte.style.display = "none";
            obj.fin.finBouffeVegan.style.display = "none";
            obj.fin.finBouffeAlcool.style.display = "none";
            obj.fin.finBouffeRevolte.style.display = "none";
            obj.fin.finRevolteAlcool.style.display = "none";

            obj.fin.finBouffeRevolteAlcool.style.display = "none";
            obj.fin.finBouffeRevolteVegan.style.display = "none";
            obj.fin.finBouffeVeganAlcool.style.display = "none";
            obj.fin.finVeganAlcoolRevolte.style.display = "none";


            obj.fin.finAlcool.style.display = "none";
            obj.fin.finVegan.style.display = "none";
            obj.fin.finRevolte.style.display = "none";
            obj.fin.finBouffe.style.display = "none";
        } else if ((totalRevolte == totalAlcool) && (totalRevolte > totalVegan) && (totalRevolte > totalBouffe)) {
            console.log('EGALITE ENTRE REVOLTE ET ALCOOL')
            // #####################################################
            // ################ REVOLTE ET ALCOOL ####################
            obj.fin.finRevolteAlcool.style.display = "block";
            // ----------------------------------------------------------------------------
            obj.fin.finVeganAlcool.style.display = "none";
            obj.fin.finVeganRevolte.style.display = "none";
            obj.fin.finBouffeVegan.style.display = "none";
            obj.fin.finBouffeAlcool.style.display = "none";
            obj.fin.finBouffeRevolte.style.display = "none";

            obj.fin.finBouffeRevolteAlcool.style.display = "none";
            obj.fin.finBouffeRevolteVegan.style.display = "none";
            obj.fin.finBouffeVeganAlcool.style.display = "none";
            obj.fin.finVeganAlcoolRevolte.style.display = "none";


            obj.fin.finAlcool.style.display = "none";
            obj.fin.finVegan.style.display = "none";
            obj.fin.finRevolte.style.display = "none";
            obj.fin.finBouffe.style.display = "none";
        } else if ((totalBouffe == totalVegan) && (totalBouffe == totalAlcool) && (totalBouffe > totalRevolte)) {
            console.log('EGALITE ENTRE BOUFFE, VEGAN ET ALCOOL')
            // #############################################################
            // ################ BOUFFE, VEGAN ET ALCOOL ####################
            obj.fin.finRevolteAlcool.style.display = "none";
            obj.fin.finVeganAlcool.style.display = "none";
            obj.fin.finVeganRevolte.style.display = "none";
            obj.fin.finBouffeVegan.style.display = "none";
            obj.fin.finBouffeAlcool.style.display = "none";
            obj.fin.finBouffeRevolte.style.display = "none";

            obj.fin.finBouffeVeganAlcool.style.display = "block";
            // ----------------------------------------------------------------------------
            obj.fin.finBouffeRevolteAlcool.style.display = "none";
            obj.fin.finBouffeRevolteVegan.style.display = "none";
            obj.fin.finVeganAlcoolRevolte.style.display = "none";


            obj.fin.finAlcool.style.display = "none";
            obj.fin.finVegan.style.display = "none";
            obj.fin.finRevolte.style.display = "none";
            obj.fin.finBouffe.style.display = "none";
        } else if ((totalBouffe == totalVegan) && (totalBouffe == totalRevolte) && (totalBouffe > totalAlcool)) {
            console.log('EGALITE ENTRE BOUFFE, REVOLTE ET VEGAN')
            // ##############################################################
            // ################ BOUFFE, REVOLTE ET VEGAN ####################
            obj.fin.finRevolteAlcool.style.display = "none";
            obj.fin.finVeganAlcool.style.display = "none";
            obj.fin.finVeganRevolte.style.display = "none";
            obj.fin.finBouffeVegan.style.display = "none";
            obj.fin.finBouffeAlcool.style.display = "none";
            obj.fin.finBouffeRevolte.style.display = "none";

            obj.fin.finBouffeRevolteVegan.style.display = "block";
            // ----------------------------------------------------------------------------
            obj.fin.finBouffeVeganAlcool.style.display = "none";
            obj.fin.finBouffeRevolteAlcool.style.display = "none";
            obj.fin.finVeganAlcoolRevolte.style.display = "none";


            obj.fin.finAlcool.style.display = "none";
            obj.fin.finVegan.style.display = "none";
            obj.fin.finRevolte.style.display = "none";
            obj.fin.finBouffe.style.display = "none";
        } else if ((totalBouffe == totalAlcool) && (totalBouffe == totalRevolte) && (totalBouffe > totalVegan)) {
            console.log('EGALITE ENTRE BOUFFE, REVOLTE ET ALCOOL')
            // #############################################################
            // ################ BOUFFE, REVOLTE ET ALCOOL ##################
            obj.fin.finRevolteAlcool.style.display = "none";
            obj.fin.finVeganAlcool.style.display = "none";
            obj.fin.finVeganRevolte.style.display = "none";
            obj.fin.finBouffeVegan.style.display = "none";
            obj.fin.finBouffeAlcool.style.display = "none";
            obj.fin.finBouffeRevolte.style.display = "none";

            obj.fin.finBouffeRevolteAlcool.style.display = "block";
            // ----------------------------------------------------------------------------
            obj.fin.finVeganAlcoolRevolte.style.display = "none";
            obj.fin.finBouffeRevolteVegan.style.display = "none";
            obj.fin.finBouffeVeganAlcool.style.display = "none";


            obj.fin.finAlcool.style.display = "none";
            obj.fin.finVegan.style.display = "none";
            obj.fin.finRevolte.style.display = "none";
            obj.fin.finBouffe.style.display = "none";
        } else if ((totalVegan == totalAlcool) && (totalVegan == totalRevolte) && (totalVegan > totalBouffe)) {
            console.log('EGALITE ENTRE VEGAN, ALCOOL ET REVOLTE')
            // #########################################################################################
            // ################ EGALITE ENTRE EGALITE ENTRE VEGAN, ALCOOL ET REVOLTE ###################
            obj.fin.finRevolteAlcool.style.display = "none";
            obj.fin.finVeganAlcool.style.display = "none";
            obj.fin.finVeganRevolte.style.display = "none";
            obj.fin.finBouffeVegan.style.display = "none";
            obj.fin.finBouffeAlcool.style.display = "none";
            obj.fin.finBouffeRevolte.style.display = "none";

            obj.fin.finVeganAlcoolRevolte.style.display = "block";
            // ----------------------------------------------------------------------------
            obj.fin.finBouffeRevolteVegan.style.display = "none";
            obj.fin.finBouffeVeganAlcool.style.display = "none";
            obj.fin.finBouffeRevolteAlcool.style.display = "none";


            obj.fin.finAlcool.style.display = "none";
            obj.fin.finVegan.style.display = "none";
            obj.fin.finRevolte.style.display = "none";
            obj.fin.finBouffe.style.display = "none";
        }
    }
    ///////////////////////////////////////////////////////////////////////////////////////
    // -------------  REPONSES - QUESTION 10  ------------- //  &  CHOIX CONCLUSIONS     //
    ///////////////////////////////////////////////////////////////////////////////////////
    obj.ten.bouffe.addEventListener('click', function () {
        toggleBouffe('ten')
        scores("nine")
        obj.askTen.ask.style.display = "none";
        conclusionDesScores()
    })
    obj.ten.revolte.addEventListener('click', function () {
        toggleRevolte('ten')
        scores("nine")
        obj.askTen.ask.style.display = "none";
        conclusionDesScores()
    })
    obj.ten.vegan.addEventListener('click', function () {
        toggleVegan('ten')
        scores("nine")
        obj.askTen.ask.style.display = "none";
        conclusionDesScores()
    })
    obj.ten.alcool.addEventListener('click', function () {
        toggleAlcool('ten')
        scores("nine")
        obj.askTen.ask.style.display = "none";
        conclusionDesScores()
    })
    //  2  // 
    if (obj.askOne.etat) {
        obj.askOne.ask.style.display = "block";
    } else {
        obj.askOne.ask.style.display = "none";
    }
    /////////
    //  2  // 
    if (obj.askTwo.etat) {
        obj.askTwo.ask.style.display = "block";
    } else {
        obj.askTwo.ask.style.display = "none";
    }
    /////////
    //  3  //
    if (obj.askThree.etat) {
        obj.askThree.ask.style.display = "block";
    } else {
        obj.askThree.ask.style.display = "none";
    }
    /////////
    //  4  //
    if (obj.askFour.etat) {
        obj.askFour.ask.style.display = "block";
    } else {
        obj.askFour.ask.style.display = "none";
    }
    /////////
    //  5  //
    if (obj.askFive.etat) {
        obj.askFive.ask.style.display = "block";
    } else {
        obj.askFive.ask.style.display = "none";
    }
    /////////
    //  6  //
    if (obj.askSix.etat) {
        obj.askSix.ask.style.display = "block";
    } else {
        obj.askSix.ask.style.display = "none";
    }
    /////////
    //  7  //
    if (obj.askSeven.etat) {
        obj.askSeven.ask.style.display = "block";
    } else {
        obj.askSeven.ask.style.display = "none";
    }
    /////////
    //  8  //
    if (obj.askEight.etat) {
        obj.askEight.ask.style.display = "block";
    } else {
        obj.askEight.ask.style.display = "none";
    }
    /////////
    //  9  //
    if (obj.askNine.etat) {
        obj.askNine.ask.style.display = "block";
    } else {
        obj.askNine.ask.style.display = "none";
    }
    /////////
    //  10  //
    if (obj.askTen.etat) {
        obj.askTen.ask.style.display = "block";
    } else {
        obj.askTen.ask.style.display = "none";
    }
    //  10  //
    if (obj.askFin.etat) {
        obj.askFin.ask.style.display = "block";
    } else {
        obj.askFin.ask.style.display = "none";
    }
});