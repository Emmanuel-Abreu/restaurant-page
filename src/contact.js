const contactBtn = () => {
    const btn = document.createElement("button")
    btn.innerText = "Contact";
    btn.classList.add("contact-btn");

    return btn;
}

const contactPage = () =>{
    const contactPageContent = document.createElement("div");
    contactPageContent.classList.add('contact-page-content')
    console.log("Contact page displays now");
}

export { contactBtn, contactPage};