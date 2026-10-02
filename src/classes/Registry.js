"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Registry = void 0;
class Registry {
    constructor() {
        this.items = [];
    }
    add(value) {
        this.items.push(value);
    }
    list() {
        return this.items;
    }
    find(condition) {
        return this.items.find(condition);
    }
}
exports.Registry = Registry;
