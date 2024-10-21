// Write a program to determine whether a triangle is equilateral, isosceles, or scalene.

// An equilateral triangle has all three sides the same length.

// An isosceles triangle has exactly two sides of the same length.

// A scalene triangle has all sides of different lengths.

// Note: For a shape to be a triangle at all, all sides must be of length > 0, and the sum of the lengths of any two sides must be greater than the length of the third side.

/*
- create a Triangle class
  - constructor:
    - properties: side1, side2, side3
    - run method: check if triangle is valid 

  - methods: 
    - kind 
      - checks if triangle isEquilateral(), isIsosceles(), or isScalene
      - returns this.kind
    - isEquilateral
      - side1 is equal to side2 and side2 is equal to side3
    - isIsosceles
       - side1 is equal to side2 or side1 is equal to side3 or side2 is equal to side3
    - checkValidity
        - throws error if any size is smaller than 0 
        - also throws error if any two sides aren't larger than the third side
*/

class Triangle {
  constructor(side1, side2, side3) {
    this.side1 = side1;
    this.side2 = side2; 
    this.side3 = side3;
    if (this.isInvalid()) throw new Error('Invalid side lengths');
  }

  kind() {
    if (this.isEquilateral()) return 'equilateral';
    if (this.isIsosceles()) return 'isosceles';
    else return 'scalene';
  }

  isEquilateral() {
    return (this.side1and2Equal() && this.side2and3Equal());
  }

  isIsosceles() {
    return (this.side1and2Equal() || this.side1and3Equal() || this.side2and3Equal());
  }

  side1and2Equal() {
    return this.side1 === this.side2;
  }

  side1and3Equal() {
    return this.side1 === this.side3;
  }

  side2and3Equal() {
    return this.side2 === this.side3;
  }

  isInvalid() {
    return this.invalidLength() || this.invalidSums();
  }

  invalidLength() {
    return this.side1 <= 0 || this.side2 <= 0 || this.side3 <= 0;
  }

  invalidSums() {
    return ((this.side1 + this.side2) <= this.side3 
    || (this.side1 + this.side3) <= this.side2
    || (this.side2 + this.side3) <= this.side1);
  }
}
module.exports = Triangle;
