namespace gedicht {
   
    let subjekt: string[] = ["Harry", "Hermine", "Ron", "Hagrid", "Snape", "Dumbledore"];
    let verb: string[] = ["braut", "liebt", "studiert", "hasst", "zaubert", "zerstört"];
    let objekt: string[] = ["Zaubertränke", "den Grimm", "Lupin", "Hogwarts", "die Karte des Rumtreibers", "Dementoren"];
    let satz: string = "";
    
    for (let i: number = 6; i < objekt.length; i--) {
        if (i == 0) {
            break;
        }
        getVers(subjekt, verb, objekt, satz);
    }
    
    function getVers (_subjekt: string[], _verb: string[], _objekt: string[], _satz: string ): string {
        let zufallsubjekt: number = Math.floor(Math.random() * _subjekt.length);
        _satz += _subjekt.splice(zufallsubjekt, 1) + " ";

        let zufallverb: number = Math.floor(Math.random() * _subjekt.length);
        _satz += _verb.splice(zufallverb, 1) + " ";

        let zufallobjekt: number = Math.floor(Math.random() * _subjekt.length);
        _satz += _objekt.splice(zufallobjekt, 1) + " ";

        console.log(_satz);
        return _satz;
    }

}