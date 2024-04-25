// Задание:

// Создайте базовый класс Transport, представляющий транспортное средство.
// У транспортного средства должны быть следующие свойства:
// make (марка)
// model (модель)
// year (год выпуска)

// Добавьте в класс Transport метод displayMainInfo(), который выводит всю информацию о транспортном средстве в консоль.

// Создайте два подкласса, расширяющих класс Transport:

// Car - представляет автомобиль. Дополнительные свойства:
// numDoors (количество дверей)
// isConvertible (является ли кабриолетом)

// Motorcycle - представляет мотоцикл. Дополнительные свойства:
// numWheels (количество колес)
// hasSideCar (имеет ли боковую коляску)

// Создайте по два экземпляра для классов Car и Motorcycle
// Для демонстрации результатов вызовите метод displayMainInfo() для каждого экземпляра (4 вызова).






// class Transport {
//     constructor(make, model, year) {
//         this.make = make;
//         this.model = model;
//         this.year = year;
//     }

//     displayMainInfo() {
//         console.log(`Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`);
//     }
// };

// class Car extends Transport {
//     constructor(make, model, year, numDoors, isConvertible) {
//         super(make, model, year);
//         this.numDoors = numDoors;
//         this.isConvertible = isConvertible;
//     }

//     displayMainInfo() {
//         super.displayMainInfo();
//         console.log(`Number of Doors: ${this.numDoors}, Convertible: ${this.isConvertible}`);
//     }
// };

// class Motorcycle extends Transport {
//     constructor(make, model, year, numWheels, hasSideCar) {
//         super(make, model, year);
//         this.numWheels = numWheels;
//         this.hasSideCar = hasSideCar;
//     }

//     displayMainInfo() {
//         super.displayMainInfo();
//         console.log(`Number of Wheels: ${this.numWheels}, Has Side Car: ${this.hasSideCar}`);
//     }
// };

// const car1 = new Car("Toyota", "Corolla", 2020, 4, false);
// const car2 = new Car("Ford", "Mustang", 2018, 2, true);

// const motorcycle1 = new Motorcycle("Harley Davidson", "Street 750", 2019, 2, false);
// const motorcycle2 = new Motorcycle("Ural", "Retro", 2021, 2, true);

// car1.displayMainInfo();
// car2.displayMainInfo();
// motorcycle1.displayMainInfo();
// motorcycle2.displayMainInfo();






class Transport {
    constructor(make, model, year, image) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.image = image;
    }
}

class Car extends Transport {
    constructor(make, model, year, image) {
        super(make, model, year, image);
    }
}

class Motorcycle extends Transport {
    constructor(make, model, year, image) {
        super(make, model, year, image);
    }
}

const cars = [
    new Car('Toyota', 'Corolla', 2020, 'https://scene7.toyota.eu/is/image/toyotaeurope/offer_q1_24__0028_corolla_ts_team_d_40:Medium-Landscape?ts=1703146788636&resMode=sharp2&op_usm=1.75,0.3,2,0'),
    new Car('Ford', 'Mustang', 2018, 'https://edgecast-img.yahoo.net/mysterio/api/26E46BEA819DB78215C073C0B638815E6CCBBFB5385805489D568E30792EF467/autoblog/resizefill_w788_h525;quality_80;format_webp;cc_31536000;/https://s.aolcdn.com/commerce/autodata/images/USD20FOC052B021001.jpg')
];

const motorcycles = [
    new Motorcycle('Harley Davidson', 'Street 750', 2019, 'https://www.carandbike.com/_next/image?url=https%3A%2F%2Fimages.carandbike.com%2Fbike-images%2Fcolors%2Fharley-davidson%2Fstreet-750%2Fharley-davidson-street-750-vivid-black-deluxe.png%3Fv%3D1566901080&w=384&q=75'),
    new Motorcycle('Ural', 'Retro', 2021, 'https://img1.motorradonline.de/Ural-Gear-Up-Expedition-2023-169Gallery-7198568-2028471.jpg')
];

function createCard(vehicle) {
    let card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `<h3>${vehicle.make} ${vehicle.model}</h3>
                      <p>Year: ${vehicle.year}</p>
                      <img src="${vehicle.image}" alt="${vehicle.make} ${vehicle.model}" style="width:250px;">`;
    return card;
}

function displayVehicles() {
    const carContainer = document.getElementById('cars');
    const motorcycleContainer = document.getElementById('motorcycles');
    cars.forEach(car => carContainer.appendChild(createCard(car)));
    motorcycles.forEach(motorcycle => motorcycleContainer.appendChild(createCard(motorcycle)));
}

function createNewCar() {
    const newCar = new Car('Chevrolet', 'Camaro', 2021, 'https://edgecast-img.yahoo.net/mysterio/api/D7FF9DFD497BEC2E6E79C219AD51900CA865F779FB2712A945F9C4ADFB9699BB/autoblog/resizefill_w788_h525;quality_80;format_webp;cc_31536000;/https://s.aolcdn.com/commerce/autodata/images/USC90CHC021C021001.jpg');
    cars.push(newCar);
    document.getElementById('cars').appendChild(createCard(newCar));
}

function createNewMotorcycle() {
    const newMotorcycle = new Motorcycle('Ducati', 'Panigale', 2022, 'https://images.motoren-toerisme.be/2018-12/2019_ducati_panigalev4r_01.jpg?auto=format&fit=max&h=1024&ixlib=php-1.1.0&q=65&s=3dd1c93c3d1e0bb54511a141f0c5019d');
    motorcycles.push(newMotorcycle);
    document.getElementById('motorcycles').appendChild(createCard(newMotorcycle));
}

window.onload = displayVehicles;



// Попробовать сделать так, что бы при создании новой карточки мы выбирали марку, модель и год выпуска авто или мотоцикла в выпадающих списках выбора.
// Кнопка подтвердить выбор.
// И в соответствии с выбором появлялась карточка с фото выбранного авто или мото.