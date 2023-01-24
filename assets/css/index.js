window.onload = function(){
    // Smooth scroll to sections
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    /* Typing effect on the about section
    const aboutText = "Hi 👋 I'm Allan";
    const aboutHeading = document.querySelector(".cursor");
    let i = 0;

    const typeWriter = () => {
        if (i < aboutText.length) {
            aboutHeading.innerHTML += aboutText.charAt(i);
            i++;
            setTimeout(typeWriter, 50);
        }
    }

    typeWriter();*/
let i = 0;
let text = "Hi 👋 I'm Allan";
let speed = 50;

function typeWriter() {
    if (i < text.length) {
        document.getElementById("name").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    } 
    else {
        setTimeout(function(){
            document.querySelector('.cursor').style.visibility = 'visible';
        }, 1000);
    }
}
window.onload = typeWriter ();

    // Project hover effect
    const projectItems = document.querySelectorAll("#projects ul li a");

    projectItems.forEach(item => {
        item.addEventListener("mouseover", e => {
            item.style.backgroundColor = "cyan";
        });

        item.addEventListener("mouseout", e => {
            item.style.backgroundColor = "transparent";
        });
    });
//Dropdown menu
 const menuButton = document.querySelector("#menu-button");
const dropdownMenu = document.querySelector("#dropdown-menu");

menuButton.addEventListener("click",window.onload = function () {
    menuButton.classList.toggle("close");
    dropdownMenu.classList.toggle("show");
});
}
