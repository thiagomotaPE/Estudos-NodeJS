class Person {
    constructor(name) {
        this.name = name;
    }

    sayMyName() {
        return `oi ${this.name}`;
    }
}

module.exports = {
    Person,
}