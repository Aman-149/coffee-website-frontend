const navLinks=document.querySelectorAll(" .nav-menu .nav-link")
const menuOpenButton=document.querySelector("#menu-open-button")
const menuCloseButton=document.querySelector("#menu-close-button")
menuOpenButton.addEventListener("click", ()=>{
    //toggle the class "show-mobile-menu" on the body element
    document.body.classList.toggle("show-mobile-menu");
})
menuCloseButton.addEventListener("click", ()=> menuOpenButton.click())

navLinks.forEach(link => {
    link.addEventListener("click", () => menuOpenButton.click())
    //remove the class "show-mobile-menu" from the body element
})


