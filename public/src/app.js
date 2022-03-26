function sort(a,b){
    if (a > b){
        return 1;
    } else if(a < b){
        return -1
    }
    return 0;
}

function compare( a, b){
    return a >= b;
}

var b = true;
var a = b | undefined;
console.log(a);

var object = {
  name: 'Duaa',
  age: 25,
};

class Person {
    name;
    age;

    constructor( name , age){
        this.name = name;
        this.age = age;
    }
    getLegal(){
        return this.age > 18;
    }
}

console.log(new Person('Duaa', 30));
