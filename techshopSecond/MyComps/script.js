let categoryinputs = document.querySelectorAll('.categoryinput')
let photourl = document.querySelector('.photourl')
let compimg = document.querySelector('.compimg')
let dataclean = document.querySelector('.dataclean')
let datasave = document.querySelector('.datasave')
let params = document.querySelector('.params')
let comptable = document.querySelector(".comptable")
let tbody = comptable.querySelector('tbody');
let trmodify = document.querySelector('.trmodify')
let compStorage = []
let modifyElementChecker
let compid = 1000
let modifyCheck = false

loadFromLocalStorage()

photourl.addEventListener('input',() => {
    compimg.src = photourl.value
})

dataclean.addEventListener('click', () => {
    deleteInfo()
});

// Inputs check
categoryinputs.forEach(item => {
    item.addEventListener('input', () => {
        if(item.value != ""){
            item.classList.remove('is-invalid')
            item.classList.add('is-valid')
            item.nextElementSibling.innerText = 'Düzdür'
            item.nextElementSibling.classList.remove('text-danger')
            item.nextElementSibling.classList.add('text-success')
        }
        else{
            item.classList.remove('is-valid')
            item.classList.add('is-invalid')
            item.nextElementSibling.innerText = 'Boş qoymayın'
            item.nextElementSibling.classList.remove('text-success')
            item.nextElementSibling.classList.add('text-danger')
        }
    })
})

// Add to page part-----------------------------------------------

datasave.addEventListener('click', (e) => {
    e.preventDefault()
    console.log(modifyCheck);

    let count = 0;
    categoryinputs.forEach(item => {
        if (item.value != "") {
            count++;
        }
    });

    if (count === 9) {
        tbody.innerHTML = ''
        compcreator()
        compStorage.forEach(elem => {
            displayNewComp(elem);
        })
        deleteInfo();
    } else {
        alert("Произошла ошибка");
    }
});


// Information delete from modal
function deleteInfo(){
    categoryinputs.forEach(item => {
        item.value = ""
        item.classList.remove('is-valid')
        item.classList.add('is-invalid')
        item.nextElementSibling.innerText = 'Bosh qoymayin'
        item.nextElementSibling.classList.remove('text-success')
        item.nextElementSibling.classList.add('text-danger')
    });
} 

// Functions

// Create laptop
function compcreator(){
    if(modifyCheck == false){
        compid++
        newcomp = {
            category: params.children[0].children[1].value,
            emeliyaddash: params.children[1].children[1].value,
            ad: params.children[2].children[1].value,
            cpu: params.children[3].children[1].value,
            cost: params.children[4].children[1].value,
            daimi: params.children[5].children[1].value,
            description: params.children[6].children[1].value,
            romcategory: params.children[7].children[1].value,
            usage: params.children[8].children[1].value,
            os: params.children[9].children[1].value,
            compimage: params.children[10].children[1].value,
            ram: params.children[11].children[1].value,
            idOfComp: compid
        }
        compStorage.push(newcomp)
    }
    else if(modifyCheck == true){
        const modifiedElement = compStorage.find(elem => elem.idOfComp == modifyElementChecker);
        if (modifiedElement) {
            modifiedElement.category = params.children[0].children[1].value;
            modifiedElement.emeliyaddash = params.children[1].children[1].value;
            modifiedElement.ad = params.children[2].children[1].value;
            modifiedElement.cpu = params.children[3].children[1].value;
            modifiedElement.cost = params.children[4].children[1].value;
            modifiedElement.daimi = params.children[5].children[1].value;
            modifiedElement.description = params.children[6].children[1].value;
            modifiedElement.romcategory = params.children[7].children[1].value;
            modifiedElement.usage = params.children[8].children[1].value;
            modifiedElement.os = params.children[9].children[1].value;
            modifiedElement.compimage = params.children[10].children[1].value;
            modifiedElement.ram = params.children[11].children[1].value;
        }
    }
    saveToLocalStorage()
}


// Display new laptop in table
function displayNewComp(newcomp){
    let comptr = document.createElement('tr')
    comptr.setAttribute('data-id', newcomp.idOfComp);
    tbody.append(comptr)
    //    ID
    let idtd = document.createElement('td')
    idtd.innerText = newcomp.idOfComp
    comptr.append(idtd)
    //    Td for laptop
    let comptd = document.createElement('td')
    comptd.innerText = newcomp.category
    comptr.append(comptd)
    //    Image
    let imagetd = document.createElement('td')
    comptr.append(imagetd)
    let imagecomp = document.createElement('img')
    imagecomp.src = newcomp.compimage
    imagecomp.classList.add('imagewidth')
    imagetd.append(imagecomp)
    // Price 
    let priceOfLaptop = document.createElement('td')
    priceOfLaptop.innerText = `${newcomp.cost}$`
    comptr.append(priceOfLaptop)
    //    Buttons
    let btntd = document.createElement('td')
    comptr.append(btntd)
    let deleteBtn = document.createElement('button')
    deleteBtn.innerText = 'Sil'
    deleteBtn.classList.add('btn', 'btn-danger', 'm-2', 'trdelete');
    btntd.append(deleteBtn)
    let modifyBtn = document.createElement('button')
    modifyBtn.innerText = 'Redakte'
    modifyBtn.classList.add('btn', 'btn-primary', 'trmodify');
    modifyBtn.setAttribute('data-bs-toggle', 'modal');
    modifyBtn.setAttribute('data-bs-target', '#addmodal');
    modifyBtn.setAttribute('data-id', newcomp.idOfComp);
    btntd.append(modifyBtn)
}

// Table row delete and modify
tbody.addEventListener('click', (item) => {
    if(item.target.classList.contains('trdelete')){
        const id = item.target.parentElement.parentElement.getAttribute('data-id');
        const index = compStorage.findIndex(element => element.idOfComp === parseInt(id, 10));
        if (index !== -1) {
            compStorage.splice(index, 1);
        }
        item.target.parentElement.parentElement.remove();
        saveToLocalStorage()
    }
    else if(item.target.classList.contains('trmodify')){
        modifyCheck = true;
        modifyElementChecker = item.target.getAttribute('data-id')
    }
});

document.addEventListener('click', (item) => {
    if(item.target.classList.contains('newcomp')){
        modifyCheck = false;
    }
})

// Save to local storage
function saveToLocalStorage() {
    localStorage.setItem('compStorageData', JSON.stringify(compStorage));
}

// Load data from local storage
function loadFromLocalStorage() {
    const storedData = localStorage.getItem('compStorageData');
    if (storedData) {
        compStorage = JSON.parse(storedData);
        compStorage.forEach((elem) => {
            displayNewComp(elem);
        });
    }
}

