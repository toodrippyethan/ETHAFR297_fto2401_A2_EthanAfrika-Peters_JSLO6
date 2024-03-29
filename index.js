// Sample menu data (Consider fetching this data from a server in a real-world scenario)
const menu = {
    Starters: [
        { name: "Garlic Bread", price :60 },
        { name: "Bruschetta", price: 50 }
    ],
    MainCourses: [
        { name: "Margherita Pizza", price: 70 },
        { name: "Spaghetti Carbonara", price: 60 }
    ],
    Desserts: [
        { name: "Tiramisu", price: 30 },
        { name: "Cheesecake", price: 40 }
    ]
};

// Function to display menu items by category
function displayMenuItems(menu) {
    // Get the menu container element from the HTML
    const menuContainer = document.getElementById('menu-container');

    // Loop through each category and its items in the menu object
    for (const category in menu) {
        if (menu.hasOwnProperty(category)) {
            // Create an element to represent the category
            const categoryElement = document.createElement('div');
            categoryElement.classList.add('category');
            
            // Set the text content of the category element to the category name
            categoryElement.textContent = category;
            
            // Append the category element to the menu container
            menuContainer.appendChild(categoryElement);
            
            // Create an element to represent a list of items
            const itemList = document.createElement('ul');
            itemList.classList.add('item-list');
            
            // Loop through the items in the category and create list items
            menu[category].forEach(item => {
                // Create a list item element
                const listItem = document.createElement('li');
                //This will allow it to display only the item
                listItem.textContent = item.name;
                
                // Attach a click event listener to the list item to add it to the order
                listItem.addEventListener('click', function() {
                    addToOrder(item.name, item.price);
                });
                
                // Append the list item to the list of items
                itemList.appendChild(listItem);
            });
            
            // Append a list of items element to the menu container
            menuContainer.appendChild(itemList);
        }
    }
}

// Callback function for adding an item to the order
function addToOrder(itemName, itemPrice) {
    // Get the order items list and the order total element from the HTML
    const orderItemsList = document.getElementById('order-items');
    const orderTotalElement = document.getElementById('order-total');
    
    // Create a list item for the order
    const orderItem = document.createElement('li');
    orderItem.textContent = itemName;
    
    // Append the list item to the order items list
    orderItemsList.appendChild(orderItem);
    
    // Update the total price
    updateOrderTotal(itemPrice);
}

// Function to update the order total
function updateOrderTotal(itemPrice) {
    // Get the order total element
    const orderTotalElement = document.getElementById('order-total');
    
    // Get the current total price from the order total element
    let currentTotal = parseFloat(orderTotalElement.textContent.replace('R', ''));
    
    // Add the price of the newly added item to the current total
    currentTotal += itemPrice;
    
    // Update the text content of the order total element with the new total
    orderTotalElement.textContent = `${currentTotal.toFixed(2)}`;
}

// Function to initialize the menu system
function initMenuSystem(menu) {
    // Call the function to display menu items
    displayMenuItems(menu);
}

// Start the menu system by calling the init function
initMenuSystem(menu);
