// selecting side nav bar
var sidenavbar = document.querySelector(".side-navbar")

// selecting toggle mark
var togglemark = document.querySelector(".navbar-menu-toggle")

//selecting cross mark
var crossmark = document.querySelector(".cross-mark")
//open side bar
togglemark.addEventListener("click", function () {
    sidenavbar.style.left = "0"
    togglemark.style.display = "none"
})
//close side bar
crossmark.addEventListener("click", function () {
    sidenavbar.style.left = "-60%"
    togglemark.style.display = "block"
})