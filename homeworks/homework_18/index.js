// Создать персонажей для игры с помощью прототипного наследования и this.

// Создайте объект character, представляющий следующие характеристики и действие для всех персонажей:
// свойства:
// name (имя), 
// health (здоровье), 
// level (уровень)

// метод introduce для character, который выводит в консоль информацию о персонаже, 
// например: "Hello, my name is [name], I am at level [level], and I have [health] health." - 
// на квадратные скобки не обращайте внимание, они для схемы, чтобы указать на переменные значения.

// Создайте объект warrior, который будет наследовать свойства и методы от character, также при создании объекта добавьте в него:
// свойства name (имя), health (здоровье), level (уровень), weapon (оружие)
// метод attack, который выводит сообщение в консоль о нападении и название оружия (внутри использовать значение из weapon).

// Создайте объект wizard, наследующий свойства и методы от character, также при создании объекта добавьте в него:
// свойства name (имя), health (здоровье), level (уровень), spell (заклинание)
// метод castSpell, который выводит сообщение в консоль о том, как персонаж произносит заклинание.
// (внутри использовать значение из spell).

// Результат должен состоять из следующих действий:
// вызова метода introduce для каждого из объектов,
// вызова метода attack для объекта warrior,
// вызова метода castSpell для объекта wizard.



// Базовый объект персонажа:
function Character(name, health, level) {
    this.name = name;
    this.health = health;
    this.level = level;
};

// Метод introduce для всех персонажей:
Character.prototype.introduce = function () {
    console.log(`Hello, my name is ${this.name}, I am at level ${this.level}, and I have ${this.health} health.`);
};

// Создаем объект warrior, наследуя от character:
function Warrior(name, health, level, weapon) {
    Character.call(this,name,health,level);
    this.weapon = weapon;
};

// Наследуем методы от character:
Warrior.prototype = Object.create(Character.prototype);
Warrior.prototype.constructor = Warrior;

// Метод attack для warrior:
Warrior.prototype.attack = function(){
    console.log(`${this.name} attacks with the ${this.weapon}!`);
};

// Создаем объект wizard, наследуя от character:
function Wizard(name,health,level,spell){
    Character.call(this,name,health,level);
    this.spell = spell;
};

// Наследуем методы от character:
Wizard.prototype = Object.create(Character.prototype);
Wizard.prototype.constructor = Wizard;

// Метод castSpell для wizard:
Wizard.prototype.castSpell = function(){
    console.log(`${this.name} casts ${this.spell}!`);
};

// Создаем экземпляры каждого персонажа:
const aragorn = new Warrior('Aragorn', 100, 10, 'Elven Sword');
const gandalf = new Wizard('Gandalf', 80, 15, 'Light of Eärendil');

// Используем методы
aragorn.introduce();
aragorn.attack();
gandalf.introduce();
gandalf.castSpell();