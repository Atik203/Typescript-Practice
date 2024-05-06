/*
 * Title: Encapsulation
 * Description:
 * Author: Md. Atikur Rahaman
 * Date: 06-05-2024
 */

{
  class Circle {
    private radius: number;
    constructor(radius: number) {
      this.radius = radius;
    }
    getRadius(): number {
      return this.radius;
    }
    setRadius(radius: number): void {
      this.radius = radius;
    }
  }

  const circle = new Circle(10);
  console.log(circle.getRadius());
  circle.setRadius(15);
  console.log(circle.getRadius());
}
