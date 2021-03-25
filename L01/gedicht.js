"use strict";
var gedicht;
(function (gedicht) {
    let subjekt = ["Harry", "Hermine", "Ron", "Hagrid", "Snape", "Dumbledore"];
    let verb = ["braut", "liebt", "studiert", "hasst", "zaubert", "zerstört"];
    let objekt = ["Zaubertränke", "den Grimm", "Lupin", "Hogwarts", "die Karte des Rumtreibers", "Dementoren"];
    let satz = "";
    for (var i = 6; i <= objekt.length; i--) {
        if (i == 0) {
            break;
        }
        getVerse(subjekt, verb, objekt, satz);
    }
    function getVerse(_subjekt, _verb, _objekt, _satz) {
        let zufallsubjekt = Math.floor(Math.random() * _subjekt.length);
        _satz += _subjekt.splice(zufallsubjekt, 1) + "";
        let zufallverb = Math.floor(Math.random() * _subjekt.length);
        _satz += _verb.splice(zufallverb, 1) + "";
        let zufallobjekt = Math.floor(Math.random() * _subjekt.length);
        _satz += _objekt.splice(zufallobjekt, 1) + "";
        console.log(_satz);
        return _satz;
    }
})(gedicht || (gedicht = {}));
//# sourceMappingURL=gedicht.js.map