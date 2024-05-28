let checked = 0

function menu_burger() {
    let nav = document.getElementById("mobile_nav")

    if (checked === 0) {
        nav.style = "opacity: 1"
        checked = 1
    }
    else {
        nav.style = "opacity: 0"
        checked = 0
    }
}