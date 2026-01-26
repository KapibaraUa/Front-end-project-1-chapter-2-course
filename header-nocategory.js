const headerResponsiveStyle = `
<style>
@media (max-width: 1024px) {
  .btnimg { margin: 0 20px; }
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
            <p>New Arrivals</p>
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
    </div>
</header>`;

document.body.insertAdjacentHTML('afterbegin', header);
