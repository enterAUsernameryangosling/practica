let checked = 0

function menu_burger() {
    let nav = document.getElementById("mobile_nav")

    if (checked === 0) {
        nav.style = "opacity: 1"
        checked = 1

        document.getElementById("logo_text").style.color = "#020617"
        document.getElementById("burger").style.color = "#020617"
    }
    else {
        nav.style = "opacity: 0"
        checked = 0

        document.getElementById("logo_text").style.color = "white"
        document.getElementById("burger").style.color = "white"
    }
}