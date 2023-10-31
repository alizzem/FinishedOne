let log_input = document.querySelector(".input1")
let pass_input = document.querySelector(".input2")
let confirm_btn = document.querySelector(".enter")

let check = false

confirm_btn.addEventListener('click', () => {
    if(log_input.value == JSON.parse(localStorage.getItem('user')).login && pass_input.value == JSON.parse(localStorage.getItem('user')).password){
        alert('Access granter!')
        check = true
        document.location.href = '../Homepage/index.html'
    }
    else{
        alert('Access denied!')
    }
    localStorage.setItem('check',check)
})
