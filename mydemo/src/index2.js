// function Animal() {
//     this.eat = function(){
//         console.log('Animal can eat!')
//     }
// }
// function Dog() {
//     this.say = function(){
//         console.log('Dog can bark!')
//     }
// }
// Dog.prototype = new Animal();
// var hashiqi = new Dog();
// hashiqi.say();
// hashiqi.eat();



class Animal{
    constructor(name) {
        this.name = name;
    }
    eat () {
        console.log(`${this.name} can eat!`);
    }
}
class Dog extends Animal {
    constructor(name) {
        super(name)
        this.name = name;
    }
    say() {
        console.log(`${this.name} can say!`)
    }
}

var dog = new Dog('哈士奇');
dog.say();
dog.eat();