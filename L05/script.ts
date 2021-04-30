namespace Memory {

    let numPairs: number;
    let cardContent: string[] = ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25";
    let cardArray: HTMLElement[] = [];
    let cardsOpen: number = 0;
    let cardsOpenArray: HTMLElement[] = [];
    let checkRest: HTMLElement[] = [];

    window.addEventListener("load", startGame);
    function startGame(): void {
        let startMemory: HTMLElement = <HTMLElement>document.querySelector(".start");
        startMemory.addEventListener("click", main);
    }
   
    let formData: FormData;
    let size: number;
    let backGColor: FormDataEntryValue | null; 
    let cardColor: FormDataEntryValue | null;
    let fontColor: FormDataEntryValue | null;
    let fontStyle: FormDataEntryValue | null;

    function createCard(_cardContent: string): void {
        let card: HTMLElement = document.createElement("div");

        card.innerHTML = "<p>" + _cardContent + "</p>";
        card.classList.add("card");
        card.classList.add("hidden");

        cardArray.push(card);
        checkRest.push(card);
        card.addEventListener("click", clickHandler);

        card.style.width = size + "px";
        card.style.height = size + "px";

        if (backGColor) { 
            card.style.backgroundColor = backGColor.toString();
        }
        
        if (cardColor) { 
            card.style.background = cardColor.toString();
        }

        if (fontColor) { 
            card.style.color = fontColor.toString();
        }

        if (fontStyle) { 
            card.style.fontFamily = fontStyle.toString();
        }
    }

    function clickHandler(_event: Event): void {
        let target: HTMLElement = <HTMLElement>_event.target;
        if (target.classList.contains("card")) {
            cardsOpen++;
            if (!(cardsOpen > 2) && target.classList.contains("hidden") && target != cardsOpenArray[0]) {
                if (target.classList.contains("hidden")) {
                    target.classList.remove("hidden");
                    target.classList.add("open");
                    cardsOpenArray.push(target);
                }
            } else {
                cardsOpen--;
            }
            if (cardsOpen == 2) {
                setTimeout(compareCards, 500);
            }
        }
    }

    function compareCards(): void {
        if (cardsOpenArray[0].innerHTML == cardsOpenArray[1].innerHTML) {
            for (let i: number = 0; i < 2; i++) {
                cardsOpenArray[i].classList.remove("open");
                cardsOpenArray[i].classList.add("done");
            }
            checkRest.splice(0, 2);
        } else {
            for (let i: number = 0; i < cardsOpenArray.length; i++) {
                cardsOpenArray[i].classList.remove("open");
                cardsOpenArray[i].classList.add("hidden");
            }
        }
        cardsOpenArray = [];
        cardsOpen = 0;
        checkWin();
    }

    function checkWin(): void {
        if (checkRest.length == 0) {
            alert("You won!");
        }
    }

    function shuffleArray(_array: any[]): any[] {
        for (var i: number = _array.length - 1; i > 0; i--) {
            var j: number = Math.floor(Math.random() * (i + 1));
            var temp: number = _array[i];
            _array[i] = _array[j];
            _array[j] = temp;
        }
        return _array;
    }

    function main(_event: Event): void {

        let fieldset: HTMLFormElement = <HTMLFormElement>document.querySelector(".formular");
        if (fieldset.classList.contains("visible")) {
            fieldset.classList.remove("visible");
            fieldset.classList.add("is-hidden");
        }
        formData = new FormData(document.forms[0]); 
        console.log(formData);
        
        size = Number(formData.get("Slider"));
        backGColor = formData.get("BGColor"); 
        cardColor = formData.get("CColor"); 
        fontColor = formData.get("FColor"); 
        fontStyle = formData.get("Radios"); 

        let pairOfCards: FormDataEntryValue | null = formData.get("Stepper"); 
        if (pairOfCards) {
        numPairs = Number(pairOfCards);
        }
        else {
            numPairs = 5;
        }

        for (let i: number = 0; i < numPairs; i++) {
            createCard(cardContent[i]);
            createCard(cardContent[i]);
        }

        shuffleArray(cardArray);

        for (let i: number = 0; i < cardArray.length; i++) {
            let user: HTMLDivElement = <HTMLDivElement>document.getElementById("user");
            user.appendChild(cardArray[i]);
        }
    }
}