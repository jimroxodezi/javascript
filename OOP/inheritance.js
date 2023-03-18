

// class TwoDSHape {
//     constructor(side) {
//         this.side = side;
//     }

//     get sidelength() {
//         return this.side.length;
//     }
// }

// class Rectangle extends TwoDSHape {
//     constructor({length, width}) {
//         super({length, width});
//     }
// }


// const rect = new Rectangle(10,20);
// // console.log(rect.sides);


class Color {
    #values = [0,0,0];
    constructor(r, g, b) {
      this.#values = [r, g, b];
    }
    get red() {
      return this.#values[0];
    }
    set red(value) {
      if (value < 0 || value > 255) {
        throw new RangeError("Invalid R value");
      }
      this.#values[0] = value;
    }

    toString() {
        return this.#values.join(", ")
    }

    static isValid(r, g, b) {
        return r >= 0 && r <= 255 && g >= 0 && g <= 255 && b >= 0 && b <= 255;
    }
}
  

// color type with a fourth value for setting
// transparency
class ColorWithAlpha extends Color {
    #alpha = 0.1;
    constructor(r, g, b, a) {
      super(r, g, b);
      this.#alpha = a;
    }

    get alpha() {
      return this.#alpha;
    }

    set alpha(value) {
      if (value < 0 || value > 1) {
        throw new RangeError("Alpha value must be between 0 and 1");
      }
      this.#alpha = value;
    }

    toString() {
        // Call the parent class's toString() and build on the return value
        return `${super.toString()}, ${this.#alpha}`;
    }

    // can inherit static members too!
    static isValid(r, g, b, a) {
        // Call the parent class's isValid() and build on the return value
        return super.isValid(r, g, b) && a >= 0 && a <= 1;
    }
    
}


const color = new ColorWithAlpha(255, 0, 0, 0.5);
const colour = new Color(255,255,255);
console.log(color.red); // 255
console.log(color.toString());