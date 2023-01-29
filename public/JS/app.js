let productContainer = document.querySelector(".product-container");


getData();

async function getData() {
    let response = await fetch("../../public/JSON/product.json");
    const data = await response.json();
    
    sendData(data);

    
}


function sendData(data){
    data.forEach((object, i)=>{
        productContainer.innerHTML +=
        `
                <a href="product.html?id=${object.id}">

                <div class="product-card" id="product-card">
                <div class="product-img">
                <span class="discount-tag">
                ${100-(Math.round((object.price * 100) / object.discount))}% off</span>
                <img src="${object.image}" 
                alt="card1" class="product-img">
                <div class="whislist-btn"><p>add to whislist</p></div>
                </div>
                <div class="card-texts">
                <h1>${object.brand}</h1>
                <p>${object.description}</p>
                <h2>$${object.price}  <span> $${object.discount}</span></h2>
                </div>
                </div>
                
                </a>
                `
            });
            
        }
        


