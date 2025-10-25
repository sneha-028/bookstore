// Get cart from localStorage or empty array
var cart = JSON.parse(localStorage.getItem('cart')) || [];

// Function to render cart items
function renderCart() {
    var cartItemsDiv = document.getElementById('cart-items');
    cartItemsDiv.innerHTML = '';

    if(cart.length === 0){
        cartItemsDiv.innerHTML = '<p>Your cart is empty.</p>';
    } else {
        for(var i = 0; i < cart.length; i++){
            var item = cart[i];
            var div = document.createElement('div');

            div.innerHTML = '<span><strong>' + item.title + '</strong> - $' + item.price + ' x ' + (item.quantity || 1) + '</span>' +
                            '<span>' +
                            '<button class="minus" data-index="' + i + '">-</button>' +
                            '<button class="plus" data-index="' + i + '">+</button>' +
                            '<button class="delete" data-index="' + i + '">Delete</button>' +
                            '</span>';

            cartItemsDiv.appendChild(div);
        }
    }
}

// Function to update cart in localStorage and render
function updateCart(){
    localStorage.setItem('cart', JSON.stringify(cart));
    renderCart();
}

// Clear cart
document.getElementById('clear-cart').onclick = function(){
    cart = [];
    updateCart();
};

// Place order
document.getElementById('place-order').onclick = function(){
    if(cart.length === 0){
        alert('Cart is empty!');
    } else {
        alert('Order placed successfully!');
        cart = [];
        updateCart();
    }
};

// Handle +, -, delete buttons using event delegation
document.getElementById('cart-items').onclick = function(e){
    var index = e.target.getAttribute('data-index');
    if(index === null) return;

    if(e.target.className === 'plus'){
        cart[index].quantity = (cart[index].quantity || 1) + 1;
        updateCart();
    }

    if(e.target.className === 'minus'){
        cart[index].quantity = (cart[index].quantity || 1) - 1;
        if(cart[index].quantity <= 0){
            cart.splice(index, 1);
        }
        updateCart();
    }

    if(e.target.className === 'delete'){
        cart.splice(index, 1);
        updateCart();
    }
};

// Initial render
renderCart();
