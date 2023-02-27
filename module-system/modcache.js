


class Hero {
    constructor(name) {
        this.name = name;
    }

    get name() {
        return this._name;
    }

    set name(newName) {
        this._name = newName;
    }
}

module.exports = new Hero("Batman");