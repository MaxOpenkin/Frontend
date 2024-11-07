// Получаем элементы
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const closeBtn = document.getElementById("close");

// Добавляем обработчики событий на каждое изображение
document.querySelectorAll('.clickable-image').forEach(img => {
  img.onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src;
  }
});

// Закрываем модальное окно при нажатии на "крестик"
closeBtn.onclick = function() {
  modal.style.display = "none";
};

// Закрываем модальное окно при клике вне изображения
modal.onclick = function(event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};