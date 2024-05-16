document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        smoothScrollTo(targetSection.offsetTop, 500);
    });
});

function smoothScrollTo(targetPosition, duration) {
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let start = null;

    function step(timestamp) {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        const percent = Math.min(progress / duration, 1);
        window.scrollTo(0, startPosition + distance * easeInOutQuad(percent));

        if (progress < duration) {
            window.requestAnimationFrame(step);
        }
    }

    function easeInOutQuad(t) {
        return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    }

    window.requestAnimationFrame(step);
};

function toggleReadMore() {
    let moreText = document.getElementById("more");
    let btnText = document.querySelector(".content button");

    if (moreText.style.display === "none" || moreText.style.display === "") {
        moreText.style.display = "inline";
        btnText.textContent = "Read less";
    } else {
        moreText.style.display = "none";
        btnText.textContent = "Read more";
    }
};
document.addEventListener('DOMContentLoaded', function() {
    const toggleIcons = document.querySelectorAll('.toggle-icon');
  
    toggleIcons.forEach(icon => {
      icon.addEventListener('click', function() {
        const educationEntry = this.closest('.education-entry');
        const details = educationEntry.querySelector('.details');
  
        // Toggle the details visibility
        details.classList.toggle('active');
        educationEntry.classList.toggle('active');
  
        // Change the icon from plus to minus when details are shown
        if (details.classList.contains('active')) {
          this.classList.add('open');
        } else {
          this.classList.remove('open');
        }
      });
    });
  });
  
document.addEventListener("DOMContentLoaded", function () {
    const contactSection = document.querySelector('.contact');

    if (!contactSection) {
        console.error('Contact section not found.');
        return;
    }

    const handleIntersect = function (entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    };

    const observer = new IntersectionObserver(handleIntersect, {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    });

    observer.observe(contactSection);
});

document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.querySelector('.navbar-toggle');
    const navbarLinks = document.querySelector('.navbar');

    toggleButton.addEventListener('click', function() {
        navbarLinks.classList.toggle('active');
    });
});
