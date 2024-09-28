// Add some basic jQuery features
$(document).ready(function() {
    // Add a smooth scrolling effect to the navigation menu
    $('nav a').on('click', function(event) {
        event.preventDefault();
        var target = $(this.hash);
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 500);
    });
});