const texts = ["herbal tea", "green tea", "black tea", "chai tea", "iced tea"];

const input = document.getElementById("typingInput");

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function animatePlaceholder() {
  const currentText = texts[textIndex];

  if (!isDeleting) {
    input.setAttribute("placeholder", currentText.substring(0, charIndex + 1));

    charIndex++;

    if (charIndex === currentText.length) {
      isDeleting = true;
      setTimeout(animatePlaceholder, 1200);
      return;
    }
  } else {
    input.setAttribute("placeholder", currentText.substring(0, charIndex - 1));

    charIndex--;

    if (charIndex === 0) {
      isDeleting = false;
      textIndex = (textIndex + 1) % texts.length;
    }
  }

  setTimeout(animatePlaceholder, isDeleting ? 50 : 100);
}

//   Collapsible Header

const Header = document.getElementById("Header");
const Topbar = document.getElementById("Topbar");
const Navbar = document.getElementById("Navbar");
document.addEventListener("scroll", () => {
  Header.classList.remove("absolute");
  Header.classList.add("sticky");
  Topbar.classList.add("hidden");
  Navbar.classList.remove("w-full");
  Navbar.classList.add("");
});

// Blogs Card

const cards = document.querySelectorAll("#BlogCard");

cards.forEach((card) => {
  const secondDiv = card.children[1];

  // smooth transition
  secondDiv.style.transition = "transform 0.3s ease";

  card.addEventListener("mouseenter", function () {
    secondDiv.style.transform = "rotate(-10deg)";
  });

  card.addEventListener("mouseleave", function () {
    secondDiv.style.transform = "rotate(0deg)";
  });
});

animatePlaceholder();