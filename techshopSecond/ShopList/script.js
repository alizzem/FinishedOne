let brandBtns = document.querySelectorAll('.brandBtn')
let compStorage = JSON.parse(localStorage.getItem('compStorageData'));
let compsDiv = document.querySelector('.compsDiv')
let selectorOfBrand
let phoneNum = localStorage.getItem('user')
let imageOfLaptopInModal = document.querySelector('.modal-body img')
let paramsOfLaptop = document.querySelectorAll('.paramsDiv p')

console.log(paramsOfLaptop);

const brandData = {
    asus: [
      {"category":"Asus","emeliyaddash":"1","ad":"1","cpu":"1","cost":"1","daimi":"1","description":"1","romcategory":"HDD","usage":"Yes","os":"1","compimage":"../images/asus.jpg","ram":"1","idOfComp":997},
      {"category":"Asus","emeliyaddash":"1","ad":"1","cpu":"1","cost":"1","daimi":"1","description":"1","romcategory":"HDD","usage":"Yes","os":"1","compimage":"../images/asus.jpg","ram":"1","idOfComp":998},
      {"category":"Asus","emeliyaddash":"1","ad":"1","cpu":"1","cost":"1","daimi":"1","description":"1","romcategory":"HDD","usage":"Yes","os":"1","compimage":"../images/asus.jpg","ram":"1","idOfComp":999}
    ],
    acer: [
      {"category":"Acer","emeliyaddash":"1","ad":"1","cpu":"1","cost":"1","daimi":"1","description":"1","romcategory":"HDD","usage":"Yes","os":"1","compimage":"../images/acer.jpg","ram":"1","idOfComp":996},
      {"category":"Acer","emeliyaddash":"1","ad":"1","cpu":"1","cost":"1","daimi":"1","description":"1","romcategory":"HDD","usage":"Yes","os":"1","compimage":"../images/acer.jpg","ram":"1","idOfComp":995},
      {"category":"Acer","emeliyaddash":"1","ad":"1","cpu":"1","cost":"1","daimi":"1","description":"1","romcategory":"HDD","usage":"Yes","os":"1","compimage":"../images/acer.jpg","ram":"1","idOfComp":994}
    ],
    dell: [
        {"category":"Dell","emeliyaddash":"1","ad":"1","cpu":"1","cost":"1","daimi":"1","description":"1","romcategory":"HDD","usage":"Yes","os":"1","compimage":"../images/dell.jpg","ram":"1","idOfComp":993},
        {"category":"Dell","emeliyaddash":"1","ad":"1","cpu":"1","cost":"1","daimi":"1","description":"1","romcategory":"HDD","usage":"Yes","os":"1","compimage":"../images/dell.jpg","ram":"1","idOfComp":992},
        {"category":"Dell","emeliyaddash":"1","ad":"1","cpu":"1","cost":"1","daimi":"1","description":"1","romcategory":"HDD","usage":"Yes","os":"1","compimage":"../images/dell.jpg","ram":"1","idOfComp":991}
      ],
      hp: [
        {"category":"Hp","emeliyaddash":"1","ad":"1","cpu":"1","cost":"1","daimi":"1","description":"1","romcategory":"HDD","usage":"Yes","os":"1","compimage":"../images/hp.jpg","ram":"1","idOfComp":990},
        {"category":"Hp","emeliyaddash":"1","ad":"1","cpu":"1","cost":"1","daimi":"1","description":"1","romcategory":"HDD","usage":"Yes","os":"1","compimage":"../images/hp.jpg","ram":"1","idOfComp":989},
        {"category":"Hp","emeliyaddash":"1","ad":"1","cpu":"1","cost":"1","daimi":"1","description":"1","romcategory":"HDD","usage":"Yes","os":"1","compimage":"../images/hp.jpg","ram":"1","idOfComp":988}
      ],
      lenovo: [
        {"category":"Lenovo","emeliyaddash":"1","ad":"1","cpu":"1","cost":"1","daimi":"1","description":"1","romcategory":"HDD","usage":"Yes","os":"1","compimage":"../images/lenovo.jpg","ram":"1","idOfComp":987},
        {"category":"Lenovo","emeliyaddash":"1","ad":"1","cpu":"1","cost":"1","daimi":"1","description":"1","romcategory":"HDD","usage":"Yes","os":"1","compimage":"../images/lenovo.jpg","ram":"1","idOfComp":986},
        {"category":"Lenovo","emeliyaddash":"1","ad":"1","cpu":"1","cost":"1","daimi":"1","description":"1","romcategory":"HDD","usage":"Yes","os":"1","compimage":"../images/lenovo.jpg","ram":"1","idOfComp":985}
      ]
};
    
compStorage.forEach(comp => {
    let brand = comp.category.toLowerCase();
    if (brandData.hasOwnProperty(brand)) {
      brandData[brand].push(comp);
    } else {
      console.log('problem');
    }
});

document.addEventListener('click', (elem) => {
    if (elem.target.classList.contains('brandBtn')) {
      let selectedBrand = elem.target.getAttribute('value');
      brandBtns.forEach(item => {
        if (item === elem.target) {
          bodyChanger(brandData[selectedBrand]);
          item.classList.remove('btn-light');
          item.classList.add('btn-primary');
        } else {
          item.classList.remove('btn-primary');
          item.classList.add('btn-light');
        }
      });
    }
});

function bodyChanger(brandStorage){
    compsDiv.innerHTML = ''
    brandStorage.forEach(elem => {
        let comp = document.createElement('div')
        comp.classList.add('comp')
        comp.setAttribute('laptopId', elem.idOfComp);
        compsDiv.append(comp)
        // image of laptop
        let laptopImage = document.createElement('img')
        laptopImage.src = elem.compimage
        laptopImage.classList.add('w-75','mb-4')
        comp.append(laptopImage)
        // paragraphs div
        let paragraphsDiv = document.createElement('div')
        paragraphsDiv.classList.add('row','align-items-left')
        comp.append(paragraphsDiv)
        // comps paragraps
        let nameParagraph = document.createElement('p')
        nameParagraph.innerText = `Ad: ${elem.category}`
        paragraphsDiv.append(nameParagraph)
        let descriptionParagraph = document.createElement('p')
        descriptionParagraph.innerText = `Tesvir: ${elem.description}`
        paragraphsDiv.append(descriptionParagraph)
        let price = document.createElement('p')
        price.innerText = `Qiymet: ${elem.cost}`
        paragraphsDiv.append(price)
        let newOrNot = document.createElement('p')
        newOrNot.innerText = `Yeni: ${elem.usage}`
        paragraphsDiv.append(newOrNot)
        let phoneNumber = document.createElement('p')
        phoneNumber.innerText = `Telefon: ${JSON.parse(phoneNum).phone}`
        paragraphsDiv.append(phoneNumber)
        // details button
        let detailsButton = document.createElement('button')
        detailsButton.innerText = 'Etrafli'
        detailsButton.classList.add('btn','btn-warning','w-75','mt-2','detailShowButton')
        detailsButton.setAttribute('data-bs-toggle', 'modal');
        detailsButton.setAttribute('data-bs-target', '#detailsOfLaptop');
        comp.append(detailsButton)
    })
}

document.addEventListener('click', (item) => {
  if(item.target.classList.contains('detailShowButton')){
    let laptopId = item.target.parentElement.getAttribute('laptopId');
    for (const brand in brandData) {
      const laptops = brandData[brand];
      for (const laptop of laptops) {
        if (laptop.idOfComp == laptopId) {
          updateModalWithLaptopDetails(laptop);
          break;
        }
      }
    }
  }
})

// Modal changes for each laptop
function updateModalWithLaptopDetails(laptop) {
  imageOfLaptopInModal.src = laptop.compimage;
  paramsOfLaptop[0].innerText = `Ad: ${laptop.ad}`;
  paramsOfLaptop[1].innerText = `Tesvir: ${laptop.description}`;
  paramsOfLaptop[2].innerText = `Qiymet: ${laptop.cost}`;
  paramsOfLaptop[3].innerText = `Telefon: ${JSON.parse(phoneNum).phone}`;
  paramsOfLaptop[4].innerText = `Yeni: ${laptop.usage}`;
  paramsOfLaptop[5].innerText = `Emeli Yaddash: ${laptop.emeliyaddash}`;
  paramsOfLaptop[6].innerText = `CPU: ${laptop.cpu}`;
  paramsOfLaptop[7].innerText = `Daimi Yaddash: ${laptop.daimi}`;
  paramsOfLaptop[8].innerText = `Daimi Yaddash Tipi: ${laptop.romcategory}`;
  paramsOfLaptop[9].innerText = `Emeliyyat sistemi: ${laptop.os}`;
  paramsOfLaptop[10].innerText = `Videokart: ${laptop.ram}`;
}



