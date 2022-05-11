const homeBtn = () => {
    const btn = document.createElement("button")
    btn.innerText = "Home";
    btn.classList.add("home-btn");

    return btn;
}

const homePage = () => {
    console.log("Home page displays now");
}

export {homeBtn, homePage};