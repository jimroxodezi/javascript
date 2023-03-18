

// classes are templates for creating objects
class Rectangle {
    // a rectangle has a heigh and a width
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    calcArea() {
        return this.height * this.width;
    }

    get area() {
        return this.calcArea();
    }
};

class PrivatePropRectangle {
    // class field are similar to object properties.
    // no use of const, let or var.
    #width = 0;
    #height = 0;

    constructor(width, height) {
        this.#height = height;
        this.#width = width;
    }

    calcArea() {
        return this.#width * this.#height;
    }

    get area() {
        return this.calcArea();
    }
};


// const rect = new Rectangle(10,20);
// console.log(rect.height);   // accessible ---> 10
// console.log(rect.area);
// console.log(rect.calcArea());

// const privRect = new PrivatePropRectangle(10,20);
// console.log(privRect.height);   // Undefined
// console.log(privRect.area); // 200
// console.log(privRect.calcArea());   // 200

class StaticFieldRectangle{
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    get area() {
        return this.width * this.height;
    }

    static addArea(rect1, rect2) {
        return rect1.area + rect2.area;
    }
}

const rect1 = new StaticFieldRectangle(10,30);
const rect2 = new StaticFieldRectangle(10,20);
console.log(rect1.addArea());   // undefined: addArea method only bound to class and not instances.
console.log(StaticFieldRectangle.addArea(rect1, rect2));