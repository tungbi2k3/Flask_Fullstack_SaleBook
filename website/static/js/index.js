const listImageHead=document.querySelector('.list-images')
const imgs=document.getElementsByClassName('slide-img')
const length=imgs.length
let current=0
console.log(imgs)
setInterval(() =>{
    
    console.log('500')
    if(current === length-1){
        current=0
        let width=imgs[0].offsetWidth
        listImageHead.style.transform=`translateX(0px)`
    }else{
        current++
        let width=imgs[0].offsetWidth
        listImageHead.style.transform=`translateX(${width*-1*current}px)`
    }            
},4000)

function showSlide(n) {
    current = (n + length) % length;
    let width = imgs[0].offsetWidth;
    listImageHead.style.transform = `translateX(${-width * current}px)`;
}

document.querySelector('.prev').addEventListener('click', function() {
    showSlide(current - 1);
});

document.querySelector('.next').addEventListener('click', function() {
    showSlide(current + 1);
});

// Optional: Nếu bạn muốn thêm hàm xử lý các điểm chuyển slide, bạn có thể sử dụng hàm currentSlide() như sau:
function currentSlide(n) {
    showSlide(n - 1);
}

const listImageProduct=document.querySelector('.show-products')
const imgproduct=document.getElementsByClassName('slide-product')
const imglength=imgproduct.length
let current1=0
console.log(imgs)
setInterval(() =>{
    
    console.log('500')
    if(current1 === imglength/2-1){
        current1=0
        let width=imgproduct[0].offsetWidth
        listImageProduct.style.transform=`translateX(0px)`
    }else{
        current1++
        let width=imgproduct[0].offsetWidth
        listImageProduct.style.transform=`translateX(${width*-2*current1}px)`
    }            
},4000)

// Set the date and time for the countdown (replace with your desired end time)
const countDownDate = new Date("April 30, 2024 23:59:59").getTime();

// Update the countdown every second
const countdown = setInterval(function() {

  // Get the current date and time
  const now = new Date().getTime();

  // Calculate the time remaining
  const distance = countDownDate - now;

  // Calculate days, hours, minutes, and seconds
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the countdown timer
  document.querySelector('.days').innerHTML = days.toString().padStart(2, '0');
  document.querySelector('.hours').innerHTML = hours.toString().padStart(2, '0');
  document.querySelector('.minutes').innerHTML = minutes.toString().padStart(2, '0');
  document.querySelector('.seconds').innerHTML = seconds.toString().padStart(2, '0');

  // If the countdown is over, display a message
  if (distance < 0) {
    clearInterval(countdown);
    document.querySelector('.cDown').innerHTML = "Sale Ended";
  }
}, 1000);


// product

