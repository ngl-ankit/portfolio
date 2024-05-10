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
    var moreText = document.getElementById("more");
    var btnText = document.querySelector(".content button");
  
    if (moreText.style.display === "none" || moreText.style.display === "") {
      moreText.style.display = "inline";
      btnText.textContent = "Read less";
    } else {
      moreText.style.display = "none";
      btnText.textContent = "Read more";
    }
  }
