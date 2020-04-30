interface Point2D {
    x: number;
    y: number;
}
interface Point3D {
    x: number;
    y: number;
    z: number;
}
var point2D: Point2D = { x: 0, y: 10 }
var point3D: Point3D = { x: 0, y: 10, z: 20 }
function iTakePoint2D(point: Point2D) { /* do something */ }
iTakePoint2D(point2D); // exact match okay
iTakePoint2D(point3D); // extra information okay
iTakePoint2D({ x: 0 }); // Error: missing information `y`

//The following two are equivalent declarations, the first uses an inline annotation, the second
//uses an interface:
// Sample A
declare var myPoint: { x: number; y: number; };
// Sample B
interface Point {
    x: number; y: number;
}
declare var myPoint: Point;

//However the beauty of Sample B is that if someone authors a library that builds on the
//myPoint library to add new members, they can easily add to the existing declaration of
//myPoint :
// Lib a.d.ts
interface Point {
    x: number; y: number;
}
declare var myPoint: Point;
// Lib b.d.ts
interface Point {
    z: number;
}
// Your code
var myPoint.z; // Allowed!

//classes can implement interfaces
interface Point {
    x: number; y: number;
}
class MyPoint implements Point {
    x: number; y: number; // Same as Point
}

//Basically in the presence of that implements , any changes in that external Point interface
//will result in a compile error in your code base so you can easily keep it in sync:
interface Point {
    x: number; y: number;
    z: number; // New member
}
class MyPoint implements Point { // ERROR : missing member `z`
    x: number; y: number;
}

let foo:Point = new myPoint(2,3);

let foo1: Point = myPoint; // error
