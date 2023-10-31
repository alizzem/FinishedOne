var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
  });


let check = localStorage.getItem('check')
let userp = document.querySelector('.username')
let exit = document.querySelector('.exit')
let accountinfo = document.querySelector('.accountinfo')
let mycomps = document.querySelector('.mycomps')
let login = document.querySelector('.login')
let balance = document.querySelector('.balance')

if(check == 'true'){
    login.style = 'display: none'
    mycomps.style.display = 'inline'
    userp.innerHTML = `İstifadıçi adı: ${JSON.parse(localStorage.getItem('user')).username}`
    exit.style = 'display: inline'
}

exit.addEventListener('click', () => {
    localStorage['check'] = false
    alert('You have left your account!')
    login.style = 'display: inline'
    mycomps.style.display = 'none'
    userp.innerHTML = 'İstifadəçi adı:'
    exit.style = 'display: none'
})