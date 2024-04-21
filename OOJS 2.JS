// Definición de la clase Shape
class Shape {
    constructor(name, sides, sideLength) {
      this.name = name;
      this.sides = sides;
      this.sideLength = sideLength;
    }
  
    calcPerimeter() {
      const perimeter = this.sides * this.sideLength;
      console.log(`El perímetro de ${this.name} es: ${perimeter}`);
    }
  }
  
  // Definición de la clase Square que hereda de Shape
  class Square extends Shape {
    constructor(sideLength) {
      super("square", 4, sideLength);
    }
  
    calcArea() {
      const area = this.sideLength * this.sideLength;
      console.log(`El área del ${this.name} es: ${area}`);
    }
  }
  
  // Crear una instancia de Square
  const square = new Square(5);
  square.calcPerimeter();
  square.calcArea();
  