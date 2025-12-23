function getUser() {
    let user = localStorage.getItem("user");
    if (user) {
        return JSON.parse(user);
    }

    user = {
        name: "Дмитрий",
        bonuses: 220,
        discount: 5,
        lastName: "",
        firstName: "",
        middleName: "",
        phone: "",
        email: "",
        sms: true,
        mail: true
    };

    localStorage.setItem("user", JSON.stringify(user));
    return user;
}

function getFavorites() {
    let fav = localStorage.getItem("favorites");
    if (fav) {
        return JSON.parse(fav);
    }

    fav = [
        {
            id: "puffer",
            title: "Puffer",
            sub: "Black | M |",
            price: 190,
            img: "image/jacket/jacket1.svg"
        },
        {
            id: "gloves",
            title: "Gloves",
            sub: "Emperial | S |",
            price: 55,
            img: "image/glove/glove.svg"
        }
    ];

    localStorage.setItem("favorites", JSON.stringify(fav));
    return fav;
}

function getCart() {
    let cart = localStorage.getItem("cart");
    if (cart) {
        return JSON.parse(cart);
    }
    cart = [];
    localStorage.setItem("cart", JSON.stringify(cart));
    return cart;
}

function setActiveTab(tabName) {
    const items = document.querySelectorAll(".menu-item");
    const tabs = document.querySelectorAll(".tab");

    items.forEach(function (el) {
        if (el.dataset.tab === tabName) {
            el.classList.add("active");
        }
        else
        {
            el.classList.remove("active");
        }
    });

    tabs.forEach(function (el) {
        el.classList.remove("active");
    });

    if (tabName === "personal") {
        document.getElementById("tab-personal").classList.add("active");
    }
    else if (tabName === "fav") {
        document.getElementById("tab-fav").classList.add("active");
    }
    else
    {
        document.getElementById("tab-orders").classList.add("active");
    }
}

function renderFavorites() {
    const list = document.getElementById("favList");
    const favorites = getFavorites();

    list.innerHTML = "";

    if (favorites.length === 0) {
        list.innerHTML = `<div class="empty">Избранное пустое</div>`;
        return;
    }

    favorites.forEach(function (p) {
        const div = document.createElement("div");
        div.className = "fav-item";

        div.innerHTML = `
            <img src="${p.img}" alt="">
            <div>
                <div class="fav-title">${p.title}</div>
                <div class="fav-sub">${p.sub}</div>
                <div class="fav-price">${p.price} $</div>
                <div class="fav-actions">
                    <button class="add" data-id="${p.id}">добавить в корзину</button>
                    <button class="trash" data-id="${p.id}">🗑</button>
                </div>
            </div>
        `;

        list.appendChild(div);
    });

    list.querySelectorAll(".add").forEach(function (btn) {
        btn.addEventListener("click", function () {
            const id = btn.dataset.id;
            const favorites = getFavorites();
            const product = favorites.find(function (x) { return x.id === id; });

            if (product) {
                const cart = getCart();
                const exists = cart.find(function (x) { return x.id === id; });

                if (exists) {
                    exists.qty = (exists.qty || 1) + 1;
                }
                else
                {
                    cart.push({ id: product.id, title: product.title, price: product.price, img: product.img, qty: 1 });
                }

                localStorage.setItem("cart", JSON.stringify(cart));
                alert("Добавлено в корзину");
            }
        });
    });

    list.querySelectorAll(".trash").forEach(function (btn) {
        btn.addEventListener("click", function () {
            const id = btn.dataset.id;
            let favorites = getFavorites();
            favorites = favorites.filter(function (x) { return x.id !== id; });
            localStorage.setItem("favorites", JSON.stringify(favorites));
            renderFavorites();
        });
    });
}

const data = getUser();

document.getElementById("userName").textContent = data.name;
document.getElementById("bonuses").textContent = data.bonuses;
document.getElementById("discount").textContent = data.discount;

document.getElementById("lastName").value = data.lastName;
document.getElementById("firstName").value = data.firstName;
document.getElementById("middleName").value = data.middleName;
document.getElementById("phone").value = data.phone;
document.getElementById("email").value = data.email;
document.getElementById("sms").checked = data.sms;
document.getElementById("mail").checked = data.mail;

document.getElementById("tab-personal").addEventListener("input", function () {
    data.lastName = document.getElementById("lastName").value;
    data.firstName = document.getElementById("firstName").value;
    data.middleName = document.getElementById("middleName").value;
    data.phone = document.getElementById("phone").value;
    data.email = document.getElementById("email").value;
    data.sms = document.getElementById("sms").checked;
    data.mail = document.getElementById("mail").checked;

    localStorage.setItem("user", JSON.stringify(data));
});

document.querySelectorAll(".menu-item").forEach(function (item) {
    item.addEventListener("click", function () {
        setActiveTab(item.dataset.tab);
        if (item.dataset.tab === "fav") {
            renderFavorites();
        }
    });
});

setActiveTab("personal");
renderFavorites();
