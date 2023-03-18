// classes are templates for creating objects
class Rectangle {
    // a rectangle has a heigh and a width
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
}

const rect = new Rectangle(10,20);
console.log(rect.height);