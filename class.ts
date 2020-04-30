class Point {
    x: number;
    y: number;
    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
    add(point: Point) {
        return new Point(this.x + point.x, this.y + point.y);
    }
}
var p1 = new Point(0, 10);
var p2 = new Point(10, 20);
var p3 = p1.add(p2); // {x:10,y:30}

class Point3D extends Point {
    z: number;
    constructor(x: number, y: number, z: number) {
        super(x, y);
        this.z = z;
    }
    add(point: Point3D) {
        var point2D = super.add(point);
        return new Point3D(point2D.x, point2D.y, this.z + point.z);
    }
}

class Something {
    static instances = 0; //<--TypeScript classes support static
    constructor() {
        Something.instances++;
    }
}
var s1 = new Something();
var s2 = new Something();
console.log(Something.instances); // 2

/*
accessible on       public    protected     private
class               yes         yes         yes
class children      yes         yes         no
class instances     yes         no          no
*/

class FooBase {
    public x: number;
    private y: number;
    protected z: number;
}
// EFFECT ON INSTANCES
var foo = new FooBase();
foo.x; // okay
foo.y; // ERROR : private
foo.z; // ERROR : protected
// EFFECT ON CHILD CLASSES
class FooChild extends FooBase {
    constructor() {
        super();
        this.x; // okay
        this.y; // ERROR: private
        this.z; // okay
    }
}

/*
1. abstract classes cannot be directly instantiated. Instead the user must create some
class that inherits from the abstract class.
2. abstract members cannot be directly accessed and a child class must provide the
functionality
*/

//common pattern
class Foo {
    x: number;
    constructor(x: number) {
        this.x = x;
    }
}

//a shorthand
//notice public x: number
class Foo {
    constructor(public x: number) {
    }
}

//you can initianl member of the class outside the class constructor
class Foo {
    members = []; // Initialize directly
    add(x) {
        this.members.push(x);
    }
}