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

  products.forEach(product => {
    const plusBtn = product.querySelector('.plus-btn');
    const minusBtn = product.querySelector('.minus-btn');
    const productCount = product.querySelector('.product-count');

    let count = 0;

    plusBtn.addEventListener('click', function () {
      count++;
      productCount.textContent = count;
      updateCart(product, count);
    });

    minusBtn.addEventListener('click', function () {
      if (count > 0) {
        count--;
        productCount.textContent = count;
        updateCart(product, count);
      }
    });
  });

  function updateCart(product, count) {
    const productName = product.querySelector('img').alt;
    const existingCartItem = cartItemsTable.querySelector(`tr[data-product="${productName}"]`);

    if (count === 0 && existingCartItem) {
      existingCartItem.remove();
    } else if (count > 0) {
      if (existingCartItem) {
        existingCartItem.querySelector('.cart-item-count').textContent = count;
      } else {
        const cartRow = document.createElement('tr');
        cartRow.dataset.product = productName;
        cartRow.innerHTML = `
          <td>${productName}</td>
          <td class="cart-item-count">${count}</td>
        `;
        cartItemsTable.appendChild(cartRow);
      }
    }
  }
});
