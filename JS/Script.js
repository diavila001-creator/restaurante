// DATOS DEL MENÚ

const menuItems = [
    { 
        id: 1, 
        name: "Pastel de chocolate", 
        category: "postres", 
        price: "$74", 
        image: "https://images.pexels.com/photos/33522477/pexels-photo-33522477.jpeg",
        description: "Delicioso pastel de 3 leches sabor chocolate, con un toque de licor de café."
    },
  

    { 
        id: 2, 
        name: "Tacos Colombianos", 
        category: "entradas", 
        price: "$129", 
        image: "https://images.pexels.com/photos/33614228/pexels-photo-33614228.jpeg",
        description: "Tacos al mojo de ajo al único y estilo colombiano, dandole un toque cultural a paladar."
    },
      

    { 
        id: 3, 
        name: "Elixir", 
        category: "bebidas", 
        price: "$49.99", 
        image: "https://images.pexels.com/photos/2795026/pexels-photo-2795026.jpeg",
        description: "Bebida refrescante sabor tropiacal, dicen que te hace rejuvenecer"
    },
        

    { 
        id: 1, 
        name: "Rebye", 
        category: "entradas", 
        price: "$249", 
        image: "https://images.pexels.com/photos/8477294/pexels-photo-8477294.jpeg",
        description: "Corte de carne reybay al estilo mexicano, sasonado con ingredientes naturales de la casa y cocido al gusto."
    }
];

// FILTRADO DEL MENÚ
function displayMenuItems(category = 'all') {
    const menuContainer = document.querySelector('.menu-items');
    
    // Limpiar el contenedor
    menuContainer.innerHTML = '';
    
    // Filtrar elementos según la categoría
    const filteredItems = category === 'all' 
        ? menuItems 
        : menuItems.filter(item => item.category === category);
    
    // Mostrar mensaje si no hay elementos
    if (filteredItems.length === 0) {
        menuContainer.innerHTML = `
            <div class="no-items-message">
                <p>No hay elementos en esta categoría.</p>
            </div>
        `;
        return;
    }
    
    // Generar HTML para cada elemento del menú
    filteredItems.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.classList.add('menu-item');
        menuItem.dataset.category = item.category;
        
        menuItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="menu-item-content">
                <h3>${item.name}</h3>
                <p>${item.description}</p>
                <span>${item.price}</span>
            </div>
        `;
        
        menuContainer.appendChild(menuItem);
    });
}

// Función para manejar los botones de filtrado
function setupFilterButtons() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remover clase active de todos los botones
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Agregar clase active al botón clickeado
            button.classList.add('active');
            
            // Obtener la categoría del botón
            const category = button.dataset.category;
            
            // Mostrar los elementos de la categoría seleccionada
            displayMenuItems(category);
        });
    });
}

// INICIALIZACIÓN
document.addEventListener('DOMContentLoaded', () => {
    displayMenuItems(); // Carga todos los elementos al inicio
    setupFilterButtons(); // Configura los eventos de los botones de filtrado
});