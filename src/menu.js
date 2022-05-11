const menuBtn = () => {
    const btn = document.createElement("button")
    btn.innerText = "Menu";
    btn.classList.add("menu-btn");

    return btn;
}

const menuPage = () => {
    console.log("Menu page displays now");
    menuBtn();
}

export {menuBtn, menuPage};