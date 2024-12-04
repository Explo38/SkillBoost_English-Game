"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var timer_1 = __importDefault(require("./components/Timer/timer"));
var rules_1 = __importDefault(require("./components/Rules/rules"));
var ToggleSwitch_1 = __importDefault(require("./components/ToggleSwitch/ToggleSwitch"));
var App = function () {
    return (react_1.default.createElement("div", null,
        react_1.default.createElement(timer_1.default, null),
        react_1.default.createElement(rules_1.default, null),
        react_1.default.createElement(ToggleSwitch_1.default, null)));
};
exports.default = App;
