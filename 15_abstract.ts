// abstract

abstract class Animal {
  abstract move(): void;
  eat(): void {
    console.log("Eat via mouth");
  }
}

class Cat extends Animal{
  move(): void {
    console.log("Using legs");
  }
}

class Bird extends Animal{
  move(): void {
    console.log("Using feathers");
  }
}

let animal1: Animal = new Cat();
animal1.eat();
animal1.move();
let animal2: Animal = new Bird();
animal2.eat();
animal2.move();