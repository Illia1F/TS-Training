/**Variables in TypeScript*/

{// Common Types

  let alice: string = "Alice";
  // No type annotation needed -- 'myName' inferred as type 'string'
  let alice2 = "Alice";

  let score1: number = 50;
  let score2: number = 42.50;
  let boolv: boolean = true;
  const date: Date = new Date();
  const arr: number[] = [];

}

{//Extending a type via intersections

  type Point2D = {
    x: number,
    y: number
  }

  type Point3D = Point2D & { 
    z: number 
  }

  const position2D: Point2D = {
    x: 10,
    y: 20
  };

  console.log(position2D);

  const position3D: Point3D = {
    x: 10,
    y: 20,
    z: 30
  };

  console.log(position3D);

}