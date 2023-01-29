const createNav = ()=>{
    let header = document.querySelector(".header");

    header.innerHTML = 
        `
                <div class="container">
            <div class="header-content split">
                <a href="/" class="logo"><img src="img/dark-logo.png" alt="Logo"></a>
                <div class="nav-items">
                    <div class="search">
                        <input type="text" class="search-box" placeholder="Search Brand, Product...">
                        <button class="search-btn">Search</button>
                    </div>
                    <img src="img/user.png" class="user-img" alt="User">
                    <img src="img/cart.png" id="basket" class="user-img" alt="Shopping-cart">
                </div>
            </div>
            <div class="search">
                <input type="text" class="search-box" placeholder="Search Brand, Product...">
                <button class="search-btn">Search</button>
            </div>
            
            <nav class="nav" id="nav">
                <hr style="opacity: .5;">
                <ul class="nav-list split">
                    <li class="nav-link"><a href="index.html">Home</a></li>
                    <li class="nav-link"><a href="#">Men</a></li>
                    <li class="nav-link"><a href="#">Women</a></li>
                    <li class="nav-link"><a href="#">Kids</a></li>
                    <li class="nav-link"><a href="#">Accessories</a></li>
                </ul>
            </nav>
        </div>
        `
}

createNav();