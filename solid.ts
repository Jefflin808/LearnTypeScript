interface Shape {
    area():number;
}
interface SolidShape extends Shape{
   volume():number;
}
interface ManageShape{
   calculate():void;
}
class Square implements Shape{
   length:number = 0;
   constructor(len:number){
       this.length = len;
   }
   area(){
       return Math.pow(this.length,2);
   }
}
class Circle implements Shape{
   radius:number = 0;
   constructor(r:number){
       this.radius = r;
   }
   area = ():number=>Math.PI*Math.pow(this.radius,2);
}
class Cubo implements SolidShape{
   length:number;
   constructor(len:number){
       this.length = len;
   }
   area(){
       return Math.pow(this.length,2);
   }
   volume(){
       return Math.pow(this.length,3);
   }
}
class Calculator{
   static Area(s:Shape[]){
       const area = [];
       for(let shape of s){
           area.push(shape.area());
       }
       return area.reduce(((prev,next)=>next +=prev),0);
   }
   static Volume(s:SolidShape[]){
       const volume = [];
       for(let solidshape of s){
           volume.push(solidshape.volume());
       }
       return volume.reduce((prev,next)=>next +=prev,0);        
   }
}
class SumCalculatorOputter{
   static JSON(result:number){
       return JSON.stringify(result);
   }
   static HMAL(rsult:number){
       return `HAML format output`;
   }
   static HTML(result:number){
       return `
           <h1>
               Sum of the areas of provided shapes:
               ${result}
           </h1>    
       `
   }
   static JADE(result:number){
       return `JADE format output`;
   }
}

const shapeArr = [
   new Circle(2),
   new Square(5),
   new Square(6)
]

const solidArr = [
   new Cubo(4)
]

console.log(SumCalculatorOputter.JSON(Calculator.Area(shapeArr)));
console.log(SumCalculatorOputter.HTML(Calculator.Volume(solidArr)));
