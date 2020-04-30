// The key motivation for generics is to provide meaningful type constraints between members.
// The members can be:
// Class instance members
// Class methods
// function arguments
// function return value

//Generic on class level
class Queue {// Javascript 
    private data = [];
    push = (item) => this.data.push(item);
    pop = () => this.data.shift();
}

class QueueT<T>{
    private data: T[] = [];
    push = (item: T) => this.data.push(item);
    pop = (): T => this.data.shift();
}

const queueT = new QueueT<number>();
queueT.push(100);
queueT.push('1'); // ERROR: cannot push a string. Only numbers allowed

//Generic on function level
function reverse<T>(items: T[]): T[] {
    var toreturn = [];
    for (let i = items.length - 1; i >= 0; i--) {
        toreturn.push(items[i]);
    }
    return toreturn;
}
var sample = [1, 2, 3];
var reversed = reverse(sample);
console.log(reversed); // 3,2,1
// Safety!
reversed[0] = '1'; // Error!
reversed = ['1', '2']; // Error!
reversed[0] = 1; // Okay
reversed = [1, 2]; // Okay

//generics created just for a member function in a class
class Utility {
    reverse<T>(items: T[]): T[] {
        var toreturn = [];
        for (let i = items.length - 1; i >= 0; i--) {
            toreturn.push(items[i]);
        }
        return toreturn;
    }
}

