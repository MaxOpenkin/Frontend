const spaceship = {
    name: "Soyuz",
    manufacturer: "RosCosmos",
    crew: 6,
    maxSpeed: "21,000 km/h"
};

document.getElementById('name').innerText = spaceship.name;
document.getElementById('manufacturer').innerText = "Manufacturer: " + spaceship.manufacturer;
document.getElementById('crew').innerText = "Crew: " + spaceship.crew;
document.getElementById('maxSpeed').innerText = "Max-speed: " + spaceship.maxSpeed;

const btn = document.getElementById('toggle-manufacturer');
btn.addEventListener ('click', () => {
    const manufacturerDetails = document.getElementById('manufacturer');
    // manufacturerDetails.style.display = manufacturerDetails.style.display === 'none' ? '' : 'none';  // исчезает и пустое место заполняется
    manufacturerDetails.style.visibility = manufacturerDetails.style.visibility === 'hidden' ? '' : 'hidden'; // просто становится невидимым для глаз
    // btn.innerText = manufacturerDetails.style.display === 'none' ? 'Show manufacturer' : 'Hide manufacturer';
    btn.innerText = manufacturerDetails.style.visibility === 'hidden' ? 'Show manufacturer' : 'Hide manufacturer';
});