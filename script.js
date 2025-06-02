document.addEventListener("DOMContentLoaded", function () {
    const fadeElement = document.querySelector('.fade-in-element');

    window.addEventListener('scroll', function () {
        const scrollPosition = window.scrollY;
        const elementPosition = fadeElement.offsetTop;

        if (scrollPosition + window.innerHeight > elementPosition) {
            fadeElement.style.opacity = '1';
        }
    });
});


// container


var qualityServiceElement = document.getElementById('container1');

if (qualityServiceElement) {
    qualityServiceElement.addEventListener('click', function() {
        qualityServiceElement.style.backgroundColor = '#f3eeea'; // Change to your desired color
    });
}
//  about section






// Section-Title

function animateValue(elementId, start, end, duration) {
    var range = end - start;
    var current = start;
    var increment = end > start ? 1 : -1;
    var stepTime = Math.abs(Math.floor(duration / range));
    var element = document.getElementById(elementId);

    function updateValue() {
        element.innerHTML = current;
        current += increment;
        if ((increment > 0 && current <= end) || (increment < 0 && current >= end)) {
            setTimeout(updateValue, stepTime);
        }
    }

    updateValue();
}

// Animate from 0 to 20 in 2 seconds for the first element

animateValue('animatedValue1', 0, 20, 2000);

// Example: Animate from 0 to 10 in 2 seconds for the second element
animateValue('animatedValue2', 0, 10, 2000);

document.addEventListener("DOMContentLoaded", function () {
    const animatedElement = document.getElementById("animatedValue2Container");

    function handleScroll() {
        const scrollPosition = window.scrollY;
        const elementPosition = animatedElement.offsetTop;

        if (scrollPosition + window.innerHeight > elementPosition) {
            animatedElement.classList.add("show");
        }
    }

    // Listen for the scroll event
    window.addEventListener("scroll", handleScroll);

    // Call the handleScroll function once to check if the element is already visible on page load
    handleScroll();
});