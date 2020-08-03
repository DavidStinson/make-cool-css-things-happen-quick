/*------------------------- Variables and Constants -------------------------*/



/*------------------------ Classes and Objects ------------------------------*/



/*---------------------------------- Cache ----------------------------------*/



/*----------------------------- Event Listeners -----------------------------*/



/*-------------------------------- Functions --------------------------------*/

class Shape {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  static getPosition() {
    return [this.x, this.y];
  }
}

console.log(Shape.getPosition())