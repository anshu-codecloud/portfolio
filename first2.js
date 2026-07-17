
const cards = document.querySelectorAll(".project-card");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

let current = 0;

function updateSlider() {

    cards.forEach(card => {
        card.classList.remove("active", "left", "right", "hide");
    });

    let left = (current - 1 + cards.length) % cards.length;
    let right = (current + 1) % cards.length;

    cards[current].classList.add("active");
    cards[left].classList.add("left");
    cards[right].classList.add("right");

    cards.forEach((card, index) => {
        if (
            index !== current &&
            index !== left &&
            index !== right
        ) {
            card.classList.add("hide");
        }
    });
}

next.addEventListener("click", () => {
    current++;
    if (current >= cards.length) {
        current = 0;
    }
    updateSlider();
});

prev.addEventListener("click", () => {
    current--;
    if (current < 0) {
        current = cards.length - 1;
    }
    updateSlider();
});

// Auto Slide
setInterval(() => {
    current++;
    if (current >= cards.length) {
        current = 0;
    }
    updateSlider();
}, 4000);

updateSlider();




const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.clientHeight;

        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});

navLinks.forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        target.scrollIntoView({
            behavior: "smooth"
        });
    });
});

emailjs.init("OQ6_i0KXcnKXXkj_2cqcC");

const form = document.getElementById("contact-form");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.sendForm(
        "service_y39gucm",
        "template_hlzpesd",
        this
    )
    .then(() => {
        alert("Message Sent Successfully!");
        form.reset();
    })
    .catch((error) => {
        alert("Failed to send message");
        console.log(error);
    });
});