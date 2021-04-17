"use strict";
var EventInspector;
(function (EventInspector) {
    window.addEventListener("load", handleLoad);
    function handleLoad() {
        document.addEventListener("mousemove", setInfoBox);
        document.addEventListener("click", logInfo);
        document.addEventListener("keyup", logInfo);
        document.body.addEventListener("click", logInfo);
        document.body.addEventListener("keyup", logInfo);
        let documentDivs = document.querySelectorAll("div");
        for (let i = 0; i < documentDivs.length; i++) {
            documentDivs[i].addEventListener("click", logInfo);
            documentDivs[i].addEventListener("keyup", logInfo);
        }
    }
    function setInfoBox(_event) {
        let spanElement = document.querySelector(".span");
        let x = _event.clientX;
        let y = _event.clientY;
        let mousePosition = "X coordinates: " + x + ", Y coordinates: " + y;
        let eventTarget = _event.target;
        spanElement.innerHTML = mousePosition + "<br>" + eventTarget;
        spanElement.style.top = y + -50 + "px";
        spanElement.style.left = x + "px";
    }
    function logInfo(_event) {
        console.log(_event.type);
        console.log(_event.target);
        console.log(_event.currentTarget);
        console.log(_event.composedPath());
    }
})(EventInspector || (EventInspector = {}));
//# sourceMappingURL=event.js.map