let inputs1 = document.querySelectorAll('.input1')
let input2 = document.querySelector('.input2')
let reg_form = document.querySelector('.registration_form')
let enterbtn = document.querySelector('.enter')
let flag1 = false
let flag2 = false


inputs1.forEach(item => {
    item.addEventListener('input', () => {
            if(item.value != "" && item.value.length >= 2){
                item.classList.remove('is-invalid')
                item.classList.add('is-valid')
                item.nextElementSibling.innerText = 'Düzdür'
                item.nextElementSibling.style.color = 'green'
                flag1 = true
            }
            else{
                item.classList.remove('is-valid')
                item.classList.add('is-invalid')
                item.nextElementSibling.innerText = 'Boş qoymayın. Minimum 2, maksimum 30 simvol ola bilər'
                item.nextElementSibling.style.color = '#b41917'
            }
        })
})

input2.addEventListener('input', () => {
    if(input2.checkValidity() == true && input2.value != ""){
        input2.classList.remove('is-invalid')
        input2.classList.add('is-valid')
        input2.nextElementSibling.innerHTML = 'Düzgündür'
        input2.nextElementSibling.style.color = 'green'
        flag2 = true
    }
    else if(input2.checkValidity() == false){
        input2.classList.remove('is-valid')
        input2.classList.add('is-invalid')
        input2.nextElementSibling.innerHTML = 'Telefon düzgün formada yazılmayıb. Bu (000-000-0000) formatda yazılmalıdır'
        input2.nextElementSibling.style.color = '#b41917'
    }
})

enterbtn.addEventListener('click', () => {
    if(flag1 == true && flag2 == true){
        alert("Registration is successfull!")
        const user = {
            login: reg_form.children.item(1).value,
            username: reg_form.children.item(7).value,
            phone: reg_form.children.item(4).value,
            password: reg_form.children.item(10).value
        }
        localStorage.setItem('user',JSON.stringify(user))
        document.location.href = "../Login/index.html"
    }
    else{
        alert("Registration failed!")
    }
})