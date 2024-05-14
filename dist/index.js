"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function MinLength(length) {
    return (target, propertyName) => {
        let value;
        const descriptor = {
            get() {
                return value;
            },
            set(newValue) {
                if (newValue.length < length)
                    throw new Error(`${propertyName} should be at least ${length} characters!`);
                value = newValue;
            },
        };
        Object.defineProperty(target, propertyName, descriptor);
    };
}
class User {
    constructor(password) {
        this.password = password;
    }
}
__decorate([
    MinLength(5)
], User.prototype, "password", void 0);
let user = new User("12345");
console.log(user.password);
function Size(maxSize) {
    return (target, propertyName) => {
        let value;
        const descriptor = {
            get() {
                return value;
            },
            set(newValue) {
                if (newValue.length < maxSize) {
                    throw new Error(`${propertyName} should be at least ${maxSize} characters long`);
                }
                value = newValue;
            },
        };
        Object.defineProperty(target, propertyName, descriptor);
    };
}
class Person {
    constructor(name) {
        this.name = name;
    }
}
__decorate([
    Size(3)
], Person.prototype, "name", void 0);
let person = new Person("hsn");
console.log(person.name);
//# sourceMappingURL=index.js.map