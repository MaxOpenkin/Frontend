const strings = ["Строка 1", "Строка 2", "Строка 3"];

const container = document.getElementById("strings-container");

strings.forEach(string => {
    const div = document.createElement("div");
    div.textContent = string;
    container.appendChild(div);
});


const changeColorButton = document.getElementById("change-color-button");
const textDiv = document.getElementById("text-div");

changeColorButton.addEventListener("click", () => {
    textDiv.style.color = "red";
});


const addCardButton = document.getElementById("add-card-button");
const cardsContainer = document.getElementById("cards-container");

addCardButton.addEventListener("click", () => {
    const card = document.createElement("div");
    card.className = 'card';
    card.innerHTML = `
        <h3>Заголовок карточки</h3>
        <p>Текст карточки</p>
        <img src="https://via.placeholder.com/150" alt="Изображение карточки">
    `;
    card.style.border = "1px solid #000";
    card.style.padding = "10px";
    card.style.margin = "10px";
    card.style.width = "200px";
    card.style.height = "280px";
    cardsContainer.appendChild(card);
});