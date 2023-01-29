const productImageSlide = document.querySelector(".image-slider");
let activeImageSlide = 0;




// toggle size Buttons
const sizeBtns = document.querySelectorAll('.size-radio-btn');
let checkedBtn = 0;

sizeBtns.forEach((item, i)=>{
    item.addEventListener('click', ()=>{
        sizeBtns[checkedBtn].classList.remove('check');
        item.classList.add('check');
        checkedBtn=i;
    })
})

function sendProducts(item){
    console.log(item);
}
// =========================================================
let url = new URL(window.location);
let id = url.searchParams.get("id");

getProd();

async function getProd() {
    let response = await fetch("public/JSON/product.json");
    let data = await response.json();
    let prodt = data[id - 1];
    
    setPictures(prodt);
    setUI(prodt);
}


let brandName = document.querySelector(".product-brand");
let brandDesc = document.querySelector(".product-short-des");
let brandPrice = document.querySelector(".product-price");
let brandDiscount = document.querySelector(".product-actual-price");
let percentDiscount = document.querySelector(".product-discount");


function setUI(obj){
    brandName.innerHTML = `
    ${obj.brand} <span>${obj.brand_name}</span>
    `;
    
    brandDesc.textContent = obj.description;
    brandPrice.textContent = `$${obj.price}`;
    brandDiscount.textContent = `$${obj.discount}`;
    percentDiscount.textContent = 
    `( ${100 - (Math.round((obj.price * 100) / obj.discount))}% off )`;
    
}

let altImages = document.querySelector(".product-images");
function setPictures(obj) {
    productImageSlide.style.backgroundImage = `url(${obj.image})`;
    
    obj.alt_image.forEach(item=>{
        altImages.innerHTML+=
        `<img src="${item}">`;
        
        
    })
    const productImages = document.querySelectorAll('.product-images img');
    
    productImages.forEach((item, i) => {
        item.addEventListener('click', () => {
            productImages[activeImageSlide].classList.remove('active');
            item.classList.add('active');
            activeImageSlide = i;
            
            productImageSlide.style.backgroundImage = `url(${item.src})`;
        })
    })
}
let basket = [];
function sendtoBasket(e){
    if(!basket.includes(id)){
        basket.push(id);
        e.target.innerText='Added';
    }
    else{
        let indexBasket = basket.indexOf(id);
        basket.splice(indexBasket, 1);
        e.target.innerText = "Add To Cart";
    }

}
