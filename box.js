var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var FruitName;
(function (FruitName) {
    FruitName["APPLE"] = "Apple";
    FruitName["ORANGE"] = "Orange";
})(FruitName || (FruitName = {}));
var Fruit = /** @class */ (function () {
    function Fruit(weight) {
        this.weight = weight;
        this.weight = weight;
    }
    return Fruit;
}());
var Apple = /** @class */ (function (_super) {
    __extends(Apple, _super);
    function Apple() {
        return _super.call(this, 1.5) || this;
    }
    return Apple;
}(Fruit));
var Orange = /** @class */ (function (_super) {
    __extends(Orange, _super);
    function Orange() {
        return _super.call(this, 2.5) || this;
    }
    return Orange;
}(Fruit));
var Box = /** @class */ (function () {
    function Box() {
        this.weight = 0;
        this.box = [];
    }
    Box.prototype.add = function (fruit) {
        this.box.push(fruit);
        // добавить вес, который сохраняется в состоянии коробки
        this.weight += fruit.weight;
    };
    Box.prototype.addAll = function (fruits) {
        var _this = this;
        fruits.forEach(function (fruit) {
            _this.add(fruit);
        });
    };
    Box.prototype.getWeith = function () {
        return this.weight;
    };
    Box.prototype.compare = function (box) {
        return this.getWeith() == box.getWeith();
    };
    Box.prototype.shift = function (box) {
        box.addAll(this.box);
        this.box = [];
        this.weight = 0;
    };
    return Box;
}());
var box = new Box();
var orange = new Orange();
var orangeWeight = orange.weight;
console.log("Weight one orange = ".concat(orangeWeight));
var apple = new Apple();
var appleWeight = apple.weight;
console.log("Weight one apple = ".concat(appleWeight));
var addApple = box.addAll([apple, apple, apple]);
var weightBoxWithApple = box.getWeith();
console.log("Weight box with apples = ".concat(weightBoxWithApple));
var addOrange = box.addAll([orange, orange, orange, orange]);
var weightBoxWithOrange = box.getWeith();
console.log("Weight box with orenages = ".concat(weightBoxWithOrange));
var box1 = new Box();
var apple1 = new Apple();
var apple2 = new Apple();
var apple3 = new Apple();
var addAppleInBox1 = box1.addAll([apple1, apple2, apple3]);
var box2 = new Box();
var orange1 = new Orange();
var orange2 = new Orange();
var addOrangeInBox2 = box2.addAll([orange1, orange2]);
var box3 = new Box();
var box4 = new Box();
box3.addAll([apple1, apple2]);
console.log(box3.getWeith(), box4.getWeith());
box3.shift(box4);
console.log(box3.getWeith(), box4.getWeith());
var compareBox = box1.compare(box2);
console.log(compareBox);
var shift = box.shift(box1);
