function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    const profilePic = document.querySelector("#profile-pic");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
    
    if (menu.classList.contains("open")) {
        profilePic.style.display = "none";
    } else {
        profilePic.style.display = "block";
    }
}
