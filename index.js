document.addEventListener("DOMContentLoaded", function(event) { 
    // Intersection Observer to add 'active' class to sections when they come into view
    var sections = document.querySelectorAll('section > div');
    var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            } else {
                entry.target.classList.remove('active');
            }
        });
    }, { threshold: 0.5 });

    sections.forEach(function(section) {
        observer.observe(section);
    });

    // Get the modal element
    var modal = document.getElementById("signupModal");

    // Get the button that opens the modal
    var btn = document.querySelector(".button-style");

    // Get the <span> element that closes the modal
    var span = document.querySelector(".close");

    // When the user clicks the button, open the modal
    btn.addEventListener("click", function() {
        modal.style.display = "block";
    });

    // When the user clicks on <span> (x), close the modal
    span.addEventListener("click", function() {
        modal.style.display = "none";
    });

    // When the user clicks anywhere outside of the modal, close it
    window.addEventListener("click", function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });

    // Toggle the class to show/hide the navigation links when clicking the hamburger menu button
    document.querySelector('.menu-toggle').addEventListener('click', function() {
        document.querySelector('nav ul').classList.toggle('open');
        // The following line should be removed as it toggles the 'open' class on the button itself
        // this.classList.toggle('open');
    });
});
