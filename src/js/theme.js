toggleThemeBtm.onclick = () => {
    document.querySelector('html').classList.toggle('dark')
    toggleThemeBtm.innerText = document.querySelector('html').classList.contains('dark') ? "chenge a theme" : "chenge a theme"
    localStorage.theme = document.querySelector('html').className || "light"
}

