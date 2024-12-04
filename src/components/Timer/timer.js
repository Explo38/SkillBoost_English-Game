"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
require("./Timer.css");
var Timer = function () {
    var _a = (0, react_1.useState)(0), timeElapsed = _a[0], setTimeElapsed = _a[1]; // Temps écoulé en secondes
    var _b = (0, react_1.useState)(null), startTime = _b[0], setStartTime = _b[1]; // Temps de début du chronomètre
    var _c = (0, react_1.useState)(false), isRunning = _c[0], setIsRunning = _c[1]; // Indique si le chronomètre est en cours
    var _d = (0, react_1.useState)(0), lastStopTime = _d[0], setLastStopTime = _d[1]; // Temps où le chronomètre a été arrêté pour la reprise
    var _e = (0, react_1.useState)(false), isStarted = _e[0], setIsStarted = _e[1]; // Indique si le timer a été démarré (pour gérer l'affichage des boutons)
    // Démarrer le chronomètre
    var startTimer = function () {
        if (!isRunning) {
            var currentTime = Date.now();
            if (startTime === null) {
                setStartTime(currentTime); // Si le chronomètre est démarré pour la première fois
            }
            else {
                // Reprendre depuis où ça s'est arrêté
                setStartTime(currentTime - (lastStopTime * 1000)); // Calculer le bon temps de départ en fonction du temps déjà écoulé
            }
            setIsRunning(true); // Le chronomètre est en cours
            setIsStarted(true); // Le chronomètre a été démarré
        }
    };
    // Arrêter le chronomètre
    var stopTimer = function () {
        setIsRunning(false); // Le chronomètre s'arrête
        var stopTime = Date.now();
        setLastStopTime(Math.floor((stopTime - (startTime || stopTime)) / 1000)); // Mémoriser le temps au moment de l'arrêt
    };
    // Redémarrer le chronomètre
    var restartTimer = function () {
        setTimeElapsed(0); // Remise à zéro du chrono
        setLastStopTime(0); // Réinitialisation du temps de pause
        setStartTime(null); // Réinitialisation du startTime
        setIsRunning(false); // Le chronomètre est arrêté
        setIsStarted(false); // On revient à l'état initial où seul le bouton "Start" est affiché
    };
    (0, react_1.useEffect)(function () {
        // Si le chronomètre a commencé, met à jour le temps écoulé toutes les 250ms
        if (startTime !== null && isRunning) {
            var interval_1 = setInterval(function () {
                var currentTime = Date.now();
                setTimeElapsed(Math.floor((currentTime - startTime) / 1000)); // Calcul du temps écoulé en secondes
            }, 250);
            return function () { return clearInterval(interval_1); }; // Nettoyage de l'intervalle quand le composant se démonte
        }
    }, [startTime, isRunning]);
    (0, react_1.useEffect)(function () {
        flipAllCards(timeElapsed); // Mettre à jour l'affichage de l'horloge à chaque changement de temps
    }, [timeElapsed]);
    var flipAllCards = function (time) {
        var seconds = time % 60;
        var minutes = Math.floor(time / 60) % 60;
        flip('[data-minutes-tens]', Math.floor(minutes / 10));
        flip('[data-minutes-ones]', minutes % 10);
        flip('[data-seconds-tens]', Math.floor(seconds / 10));
        flip('[data-seconds-ones]', seconds % 10);
    };
    var flip = function (selector, newNumber) {
        var flipCard = document.querySelector(selector);
        var topHalf = flipCard.querySelector('.top');
        var startNumber = parseInt(topHalf.textContent || '0');
        if (newNumber === startNumber)
            return;
        var bottomHalf = flipCard.querySelector('.bottom');
        var topFlip = document.createElement('div');
        topFlip.classList.add('top-flip');
        var bottomFlip = document.createElement('div');
        bottomFlip.classList.add('bottom-flip');
        topFlip.textContent = startNumber.toString();
        bottomFlip.textContent = newNumber.toString();
        topFlip.addEventListener('animationstart', function () {
            topHalf.textContent = newNumber.toString();
        });
        topFlip.addEventListener('animationend', function () {
            topFlip.remove();
        });
        bottomFlip.addEventListener('animationend', function () {
            bottomHalf.textContent = newNumber.toString();
            bottomFlip.remove();
        });
        flipCard.append(topFlip, bottomFlip);
    };
    return (react_1.default.createElement("div", { className: "container" },
        react_1.default.createElement("div", { className: "timer-segment" },
            react_1.default.createElement("div", { className: "timer-time" },
                react_1.default.createElement("div", { className: "container-segment" },
                    react_1.default.createElement("div", { className: "segment-title" }, "Minutes"),
                    react_1.default.createElement("div", { className: "segment" },
                        react_1.default.createElement("div", { className: "flip-card", "data-minutes-tens": true },
                            react_1.default.createElement("div", { className: "top" }, "0"),
                            react_1.default.createElement("div", { className: "bottom" }, "0")),
                        react_1.default.createElement("div", { className: "flip-card", "data-minutes-ones": true },
                            react_1.default.createElement("div", { className: "top" }, "0"),
                            react_1.default.createElement("div", { className: "bottom" }, "0")))),
                react_1.default.createElement("div", { className: "container-segment" },
                    react_1.default.createElement("div", { className: "segment-title" }, "Seconds"),
                    react_1.default.createElement("div", { className: "segment" },
                        react_1.default.createElement("div", { className: "flip-card", "data-seconds-tens": true },
                            react_1.default.createElement("div", { className: "top" }, "0"),
                            react_1.default.createElement("div", { className: "bottom" }, "0")),
                        react_1.default.createElement("div", { className: "flip-card", "data-seconds-ones": true },
                            react_1.default.createElement("div", { className: "top" }, "0"),
                            react_1.default.createElement("div", { className: "bottom" }, "0"))))),
            react_1.default.createElement("div", { className: "buttons" }, !isStarted ? (react_1.default.createElement("button", { onClick: startTimer }, "Start Timer")) : (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement("button", { onClick: stopTimer, disabled: !isRunning }, "Stop Timer"),
                react_1.default.createElement("button", { onClick: restartTimer }, "Restart Timer")))))));
};
exports.default = Timer;
