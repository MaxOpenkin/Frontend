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



// function Character(name, health, level) {
//     this.name = name;
//     this.health = health;
//     this.level = level;
// };

// Character.prototype.introduce = function () {
//     console.log(`Hello, my name is ${this.name}, I am at level ${this.level}, and I have ${this.health} health.`);
// };

// function Warrior(name, health, level, weapon) {
//     Character.call(this,name,health,level);
//     this.weapon = weapon;
// };

// Warrior.prototype = Object.create(Character.prototype);
// Warrior.prototype.constructor = Warrior;

// Warrior.prototype.attack = function(){
//     console.log(`${this.name} attacks with the ${this.weapon}!`);
// };

// function Wizard(name,health,level,spell){
//     Character.call(this,name,health,level);
//     this.spell = spell;
// };

// Wizard.prototype = Object.create(Character.prototype);
// Wizard.prototype.constructor = Wizard;

// Wizard.prototype.castSpell = function(){
//     console.log(`${this.name} casts ${this.spell}!`);
// };

// const aragorn = new Warrior('Aragorn', 100, 10, 'Elven Sword');
// const gandalf = new Wizard('Gandalf', 80, 15, 'Light of Eärendil');

// aragorn.introduce();
// aragorn.attack();
// gandalf.introduce();
// gandalf.castSpell();




function Character(name, health, level) {
    this.name = name;
    this.health = health;
    this.level = level;
}

Character.prototype.introduce = function() {
    console.log(`Hello, my name is ${this.name}, I am at level ${this.level}, and I have ${this.health} health.`);
};

function Warrior(name, health, level, weapon) {
    Character.call(this, name, health, level);
    this.weapon = weapon;
}

Warrior.prototype = Object.create(Character.prototype);
Warrior.prototype.constructor = Warrior;

Warrior.prototype.attack = function(target) {
    const damage = Math.floor(Math.random() * 20) + 1;
    target.health -= damage;
    return `${this.name} attacks ${target.name} with the ${this.weapon} for ${damage} damage.`;
};

function Wizard(name, health, level, spell) {
    Character.call(this, name, health, level);
    this.spell = spell;
}

Wizard.prototype = Object.create(Character.prototype);
Wizard.prototype.constructor = Wizard;

Wizard.prototype.castSpell = function(target) {
    const damage = Math.floor(Math.random() * 15) + 5;
    target.health -= damage;
    return `${this.name} casts ${this.spell} on ${target.name} causing ${damage} damage.`;
};

const aragorn = new Warrior('Aragorn', 100, 10, 'Elven Sword');
const gandalf = new Wizard('Gandalf', 80, 15, 'Light of Eärendil');

function updateStats() {
    document.getElementById('name1').textContent = aragorn.name + ' (Warrior)';
    document.getElementById('health1').textContent = 'Health: ' + aragorn.health;
    document.getElementById('name2').textContent = gandalf.name + ' (Wizard)';
    document.getElementById('health2').textContent = 'Health: ' + gandalf.health;
}

function logAction(action) {
    document.getElementById('log').innerHTML += `<p>${action}</p>`;
    updateStats();
    checkGameOver();
}

function aragornTurn() {
    if (gandalf.health > 0) {
        const action = aragorn.attack(gandalf);
        logAction(action);
    }
}

function gandalfTurn() {
    if (aragorn.health > 0) {
        const action = gandalf.castSpell(aragorn);
        logAction(action);
    }
}

function checkGameOver() {
    if (aragorn.health <= 0 || gandalf.health <= 0) {
        const winner = aragorn.health > 0 ? aragorn.name : gandalf.name;
        document.getElementById('log').innerHTML += `<p><strong>${winner} wins!</strong></p>`;
        document.getElementById('character1').querySelector('button').disabled = true;
        document.getElementById('character2').querySelector('button').disabled = true;
    }
}

window.onload = updateStats;