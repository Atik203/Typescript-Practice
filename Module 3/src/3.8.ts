/*
 * Title: Polymorphism in typescript
 * Description:
 * Author: Md. Atikur Rahaman
 * Date: 06-05-2024
 */
{
  class Shape {
    constructor(public width: number, public height: number) {}
    area(): number {
      return this.width * this.height;
    }
  }

  class Rectangle extends Shape {
    constructor(width: number, height: number) {
      super(width, height);
    }
  }

  class Triangle extends Shape {
    constructor(width: number, height: number) {
      super(width, height);
    }
    area(): number {
      return super.area() / 2;
    }
  }

  class Square extends Shape {
    constructor(width: number) {
      super(width, width);
    }
  }

  const rectangle = new Rectangle(10, 5);
  console.log(rectangle.area());
  const triangle = new Triangle(10, 5);
  console.log(triangle.area());

  const square = new Square(10);
  console.log(square.area());
}
