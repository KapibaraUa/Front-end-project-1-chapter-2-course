const user = {
    name: "Дмитрий",
    bonuses: 220,
    discount: 5
};

if (!localStorage.getItem("user")) {
    localStorage.setItem("user", JSON.stringify(user));
}
else
{
    user.name = JSON.parse(localStorage.getItem("user")).name || user.name;
    user.bonuses = JSON.parse(localStorage.getItem("user")).bonuses || user.bonuses;
    user.discount = JSON.parse(localStorage.getItem("user")).discount || user.discount;
}

document.getElementById("userName").textContent = user.name;
document.getElementById("bonuses").textContent = user.bonuses;
document.getElementById("discount").textContent = user.discount;

const menu = document.getElementById("menu");
const tabs = {
    profile: document.getElementById("tab-profile"),
    favorites: document.getElementById("tab-favorites"),
    orders: document.getElementById("tab-orders")
};

menu.addEventListener("click", function (e) {
    if (e.target.dataset.tab)
    {
        const key = e.target.dataset.tab;

        for (let i = 0; i < menu.children.length; i++)
        {
            menu.children[i].classList.remove("active");
        }
        e.target.classList.add("active");

        tabs.profile.classList.remove("active");
        tabs.favorites.classList.remove("active");
        tabs.orders.classList.remove("active");

        tabs[key].classList.add("active");
    }
});

document.getElementById("orderDetailsBtn").addEventListener("click", function () {
    window.open("", "_blank").document.write("<h2>Заказ #29923912</h2><p>Статус: Завершен</p><p>Дата: 10 марта 2023</p>");
});
