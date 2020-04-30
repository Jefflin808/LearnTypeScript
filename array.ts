//两种定义和使用数组的方法
class Frame{
    arr1: number[] = [];
    arr2: Array<number> = new Array();
    arr3:number[];
    constructor(){
        this.arr3 = [];
    }
}

class Point2D{
    x: number;
    y: number;
}

class Snake{
    data: Point2D[]; 
    position: Array<Point2D>;
}

class Pig<T>{
    data: T[]; 
    position: Array<T>;
}

let p = new Pig<Point2D>();

