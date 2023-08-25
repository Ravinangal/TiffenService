// var tweet = prompt("compose your tweet");
// var tweetCount = tweet.length;
// alert("You have written " + tweetCount + ". You have "+
// (200-tweetCount )+" words left.");

$(document).ready(function(){
    $('.carousel').carousel({
        interval: 3000, // Set the interval in milliseconds (3 seconds in this case)
        pause: "hover" // Pause when mouse is hovered over
    });
});

document.addEventListener('DOMContentLoaded', function () {
  const products = document.querySelectorAll('.product');
  const cartItemsTable = document.querySelector('.cart-items tbody');
  const totalValueElement = document.querySelector('.total-value');
  const placeOrderBtn = document.querySelector('.place-order-btn');


  const prices = [5, 7, 9, 11, 12]; // Prices for the five products
  let cartTotal = 0;


  products.forEach((product, index) => {
    const plusBtn = product.querySelector('.plus-btn');
    const minusBtn = product.querySelector('.minus-btn');
    const productCount = product.querySelector('.product-count');

    let count = 0;
// Remove any existing event listeners
placeOrderBtn.removeEventListener('click', placeOrderBtn);

// Add the event listener
placeOrderBtn.addEventListener('click', placeOrderBtn);
    
    placeOrderBtn.addEventListener('click', function () {
      alert('Order placed successfully!');
      clearCart();
    });

    plusBtn.addEventListener('click', function () {
      count++;
      productCount.textContent = count;
      updateCart(product, count, prices[index]);
    });

    minusBtn.addEventListener('click', function () {
      if (count > 0) {
        count--;
        productCount.textContent = count;
        updateCart(product, count, prices[index]);
      }
    });
  });

  function updateCart(product, count, price) {
    const productName = product.querySelector('img').alt;
    const existingCartItem = cartItemsTable.querySelector(`tr[data-product="${productName}"]`);

    if (count === 0 && existingCartItem) {
      existingCartItem.remove();
    } else if (count > 0) {
      if (existingCartItem) {
        existingCartItem.querySelector('.cart-item-count').textContent = count;
        existingCartItem.querySelector('.cart-item-price').textContent = `₹${count * price}`;
      } else {
        const cartRow = document.createElement('tr');
        cartRow.dataset.product = productName;
        cartRow.innerHTML = `
          <td>${productName}</td>
          <td class="cart-item-count">${count}</td>
          <td class="cart-item-price">₹ ${count * price}</td>
        `;
        cartItemsTable.appendChild(cartRow);
      }
    }

    // Recalculate and update total value
    cartTotal = calculateTotal();
    totalValueElement.textContent = `₹${cartTotal}`;
  }

  function calculateTotal() {
    let total = 0;
    cartItemsTable.querySelectorAll('.cart-item-price').forEach(itemPrice => {
      total += parseInt(itemPrice.textContent.replace('₹', ''));
    });
    return total;
  }
  function clearCart() {
    cartItemsTable.innerHTML = '';
    cartTotal = 0;
    totalValueElement.textContent = '₹0';
  }
});
  

