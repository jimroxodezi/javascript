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


const rect = new Rectangle(10,20);
console.log(rect.height);   // accessible ---> 10
console.log(rect.area);
console.log(rect.calcArea());

const privRect = new PrivatePropRectangle(10,20);
console.log(privRect.height);   // Undefined
console.log(privRect.area); // 200
console.log(privRect.calcArea());   // 200