enum FruitName {
  APPLE = "Apple",
  ORANGE = "Orange",
}

abstract class Fruit {
  name: FruitName;
  constructor(public weight: number) {
    this.weight = weight;
  }
}

class Apple extends Fruit {
  name: FruitName.APPLE;
  constructor() {
    super(1.5);
  }
}

class Orange extends Fruit {
  name: FruitName.ORANGE;
  constructor() {
    super(2.5);
  }
}

class Box<T extends Fruit> {
  private weight: number = 0;
  private box: T[] = [];

  public add(fruit: T): void {
    this.box.push(fruit);
    // добавить вес, который сохраняется в состоянии коробки
    this.weight += fruit.weight;
  }

  public addAll(fruits: T[]): void {
    fruits.forEach((fruit) => {
      this.add(fruit);
    });
  }

  public getWeith() {
    return this.weight;
  }

  public compare(box: Box<Fruit>): boolean {
    return this.getWeith() == box.getWeith();
  }

  public shift(box: Box<T>) {
    box.addAll(this.box);
    this.box = [];
    this.weight = 0;
  }
}

const box = new Box();

const orange = new Orange();
const orangeWeight = orange.weight;
console.log(`Weight one orange = ${orangeWeight}`);

const apple = new Apple();
const appleWeight = apple.weight;
console.log(`Weight one apple = ${appleWeight}`);

const addApple = box.addAll([apple, apple, apple]);
const weightBoxWithApple = box.getWeith();
console.log(`Weight box with apples = ${weightBoxWithApple}`);

const addOrange = box.addAll([orange, orange, orange, orange]);
const weightBoxWithOrange = box.getWeith();
console.log(`Weight box with orenages = ${weightBoxWithOrange}`);

const box1 = new Box<Apple>();
const apple1 = new Apple();
const apple2 = new Apple();
const apple3 = new Apple();
const addAppleInBox1 = box1.addAll([apple1, apple2, apple3]);

const box2 = new Box<Orange>();
const orange1 = new Orange();
const orange2 = new Orange();
const addOrangeInBox2 = box2.addAll([orange1, orange2]);

const box3 = new Box<Apple>();
const box4 = new Box<Apple>();

box3.addAll([apple1, apple2]);

console.log(box3.getWeith(), box4.getWeith());
box3.shift(box4);
console.log(box3.getWeith(), box4.getWeith());
const compareBox = box1.compare(box2);
console.log(compareBox);

const shift = box.shift(box1);
