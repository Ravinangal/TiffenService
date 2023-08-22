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
    const plusBtn = document.querySelector('.plus-btn');
    const minusBtn = document.querySelector('.minus-btn');
    const productCount = document.querySelector('.product-count');
  
    let count = 0;
  
    plusBtn.addEventListener('click', function () {
      count++;
      productCount.textContent = count;
    });
  
    minusBtn.addEventListener('click', function () {
      if (count > 0) {
        count--;
        productCount.textContent = count;
      }
    });
  });
    