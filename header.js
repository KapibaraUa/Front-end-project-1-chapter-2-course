const headerResponsiveStyle = `
<style>
@media (max-width: 1024px) {
  .btnimg { margin: 0 20px; }
  .containernav nav ul li a { font-size: 22px; }
}

@media (max-width: 768px) {
  .containerlogo {
    justify-content: space-between;
    padding: 10px 12px;
  }
  .btnimg {
    margin: 0;
    gap: 14px;
  }

  .containernav {
    justify-content: flex-start;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }
  .containernav nav ul {
    white-space: nowrap;
    padding: 10px 12px;
  }
  .containernav nav ul li {
    margin: 0 8px;
  }
  .containernav nav ul li a {
    font-size: 20px;
  }
}

@media (max-width: 520px) {
  .containerlogo {
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
  }

  .containerlogo > div:nth-child(2) {
    order: 1;
    width: 100%;
    display: flex;
    justify-content: center;
  }
  .containerlogo > div:nth-child(1) { order: 2; }
  .containerlogo > div:nth-child(3) { order: 3; }

  .btnimg img {
    width: 22px;
    height: 22px;
  }
}
</style>
`;

document.head.insertAdjacentHTML("beforeend", headerResponsiveStyle);

const header = `<header>
    <div class="containerMain">
        <div class="containerhighttext">
        <div class="contbuttons">
            <button class="contbuttons1">Men</button>
            <button class="contbuttons2">Women</button>
        </div>
            <p>New Arrivals</p>
            <div></div>
        </div>
        
        <div class="containerlogo">
        <div class="btnimg">
                <a href="login.html"><img  src="assets/img/login.svg" alt=""></a>
            </div>
            <div>
                <a href="index.html"><img src="assets/img/logo 1.svg" alt=""></a>
            </div>
            <div class="btnimg">
                <a href="#"><img src="assets/img/search.svg" alt=""></a>
                <a href="cart.html"><img src="assets/img/cart.svg" alt=""></a>
            </div>
        </div>
        <div class="containernav">
        <nav>
            <ul>
                <li><a href="#">Jewelry</a></li>
                <li><a href="#">Bags</a></li>
                <li><a href="#">Tops</a></li>
                <li><a href="#">Knitwear</a></li>
                <li><a href="#">ALL</a></li>
                <li><a href="#">Hoodie</a></li>
                <li><a href="#">Bottom</a></li>
                <li><a href="#">Accessories</a></li>
                <li><a href="#">More</a></li>
            </ul>
        </nav>
        </div>
    </div>
</header>`;

document.body.insertAdjacentHTML('afterbegin', header);
