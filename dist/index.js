"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function Log(target, methodName, descriptor) {
    const original = descriptor.value;
    descriptor.value = function (...args) {
        console.log("before");
        original.call(this, "blue sky");
        original.call(this, ...args);
        console.log("after");
    };
}
class Person {
    say(message) {
        console.log("person say " + message);
    }
    tell(message) {
        console.log("hello there " + message);
    }
}
__decorate([
    Log
], Person.prototype, "say", null);
__decorate([
    Log
], Person.prototype, "tell", null);
const person = new Person();
person.tell("Hello");
//# sourceMappingURL=index.js.map