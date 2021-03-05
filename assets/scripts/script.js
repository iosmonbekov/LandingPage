//Menu Burger
const burger = document.querySelector(".menu-burger");
const menuList = document.querySelector(".menu__list");
addEventListener("click", (e) => {
    if (e.target.dataset.burger) {
        if (burger.classList[1] === "active") {
            burger.classList.remove("active");
            menuList.classList.remove("active");
        } else {
            burger.classList.add("active");
            menuList.classList.add("active");
        }
    }
    if (e.target.dataset.link) {
        burger.classList.remove("active");
        menuList.classList.remove("active");
    }
});

//Smooth transition on the link
const links = document.querySelectorAll('a[href*="#"]');

for (let link of links) {
    link.addEventListener("click", function (e) {
        e.preventDefault();

        const blockID = link.getAttribute("href").substr(1);

        document.getElementById(blockID).scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    });
}
