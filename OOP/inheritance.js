

class TwoDSHape {
    constructor(side) {
        this.side = side;
    }

    get sidelength() {
        return this.side.length;
    }
}

class Rectangle extends TwoDSHape {
    constructor({length, width}) {
        super({length, width});
    }
}


const rect = new Rectangle(10,20);
// console.log(rect.sides);