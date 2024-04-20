document.addEventListener('DOMContentLoaded', function() {
    const items = [
      { name: 'Item 1', price: 150 },
      { name: 'Item 2', price: 95 },
      { name: 'Item 3', price: 200 }
    ];
  
    // Сохраняем копию исходного массива
    const originalItems = [...items];
  
    const sortOrderSelect = document.getElementById('sortOrder');
    const filterButton = document.getElementById('filterButton');
    const resetButton = document.getElementById('resetButton');
    const itemsContainer = document.getElementById('itemsContainer');
  
    filterButton.addEventListener('click', function() {
      const order = sortOrderSelect.value;
      const sortedItems = [...originalItems].sort((a, b) => {
        return order === 'asc' ? a.price - b.price : b.price - a.price;
      });
      displayItems(sortedItems);
    });
  
    resetButton.addEventListener('click', function() {
      displayItems(originalItems);
    });
  
    function displayItems(items) {
      itemsContainer.innerHTML = '';
      items.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('item');
        itemDiv.textContent = `${item.name}: ${item.price}`;
        itemsContainer.appendChild(itemDiv);
      });
    }
  
    displayItems(originalItems); // Display initially
  });