
  (function ($) {
  
  "use strict";

    // COUNTER NUMBERS
    jQuery('.counter-thumb').appear(function() {
      jQuery('.counter-number').countTo();
    });
    
    // CUSTOM LINK
    $('.smoothscroll').click(function(){
    var el = $(this).attr('href');
    var elWrapped = $(el);
    var header_height = $('.navbar').height();

    scrollToDiv(elWrapped,header_height);
    return false;

    function scrollToDiv(element,navheight){
      var offset = element.offset();
      var offsetTop = offset.top;
      var totalScroll = offsetTop-navheight;

      $('body,html').animate({
      scrollTop: totalScroll
      }, 300);
    }
});
    
  })(window.jQuery);


document.addEventListener("DOMContentLoaded", function () {
  // Add click event listeners to dropdown toggles
  const dropdownToggles = document.querySelectorAll(".navbar .dropdown-toggle");

  dropdownToggles.forEach((toggle) => {
    toggle.addEventListener("click", function (e) {
      e.preventDefault(); // Prevent default link behavior

      const dropdownMenu = this.nextElementSibling;
      const isOpen = dropdownMenu.classList.contains("show");

      // Close all other dropdowns
      document.querySelectorAll(".navbar .dropdown-menu").forEach((menu) => {
        if (menu !== dropdownMenu) {
          menu.classList.remove("show");
        }
      });

      // Toggle the current dropdown
      dropdownMenu.classList.toggle("show");
    });
  });

  // Close dropdowns when clicking outside
  document.addEventListener("click", function (e) {
    if (!e.target.matches(".dropdown-toggle")) {
      document.querySelectorAll(".navbar .dropdown-menu").forEach((menu) => {
        menu.classList.remove("show");
      });
    }
  });
});