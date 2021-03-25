namespace gedicht {
   
    let subjekt: string[] = ["Harry", "Hermine", "Ron", "Hagrid", "Snape", "Dumbledore"];
    let verb: string[] = ["braut", "liebt", "studiert", "hasst", "zaubert", "zerstört"];
    let objekt: string[] = ["Zaubertränke", "den Grimm", "Lupin", "Hogwarts", "die Karte des Rumtreibers", "Dementoren"];
    let satz: string = "";
    
    for (var i: number = 6; i <= objekt.length; i--) {
        if (i == 0) {
            break;
        }
        getVerse(subjekt, verb, objekt, satz);
    }
    
    function getVerse(_subjekt: string[], _verb: string[], _objekt: string[], _satz: string ): string {
        let zufallsubjekt: number = Math.floor(Math.random() * _subjekt.length);
        _satz += _subjekt.splice(zufallsubjekt, 1) + "";

        let zufallverb: number = Math.floor(Math.random() * _subjekt.length);
        _satz += _verb.splice(zufallverb, 1) + "";

        let zufallobjekt: number = Math.floor(Math.random() * _subjekt.length);
        _satz += _objekt.splice(zufallobjekt, 1) + "";

        console.log(_satz);
        return _satz;
    }

}