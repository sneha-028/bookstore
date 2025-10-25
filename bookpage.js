

const descButtons = document.querySelectorAll('.desc-btn');

descButtons.forEach(button => {
  button.addEventListener('click', () => {
    const desc = button.nextElementSibling;

    if (desc.style.maxHeight && desc.style.maxHeight !== "0px") {
      // Close
      desc.style.maxHeight = "0";
      desc.style.paddingTop = "0";
      desc.style.paddingBottom = "0";
      desc.style.borderTop = "none";
    } else {
      // Open
      desc.style.maxHeight = desc.scrollHeight + "px";
      desc.style.paddingTop = "15px";
      desc.style.paddingBottom = "15px";
      desc.style.borderTop = "1px solid rgba(0, 0, 0, 0.3)";
    }
  });
});


const addCartButtons = document.querySelectorAll('.add-cart-btn');

addCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        const bookCard = button.parentElement;
        const title = bookCard.querySelector('.book-title').innerText;
        const price = bookCard.querySelector('.price').innerText;

        // Save cart in localStorage
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.push({ title, price });
        localStorage.setItem('cart', JSON.stringify(cart));

        // Redirect to cart page
        window.location.href = 'cart.html';
    });
});
