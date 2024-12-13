
// counter design
document.addEventListener("DOMContentLoaded", () => {
    function counter(id, start, end, duration) {
        let obj = document.getElementById(id),
            current = start,
            range = end - start,
            increment = end > start ? 1 : -1,
            step = Math.abs(Math.floor(duration / range)),
            timer = setInterval(() => {
                current += increment;
                obj.textContent = current;
                if (current == end) {
                    clearInterval(timer);
                }
            }, step);
    }
    counter("count1", 0, 1287, 3000);
    counter("count2", 100, 5786, 2500);
    counter("count3", 0, 1440, 3000);
    counter("count4", 0, 7110, 3000);
});


document.querySelector('.scroll-btn').addEventListener('click',() => {
  document.querySelector('html').style.scrollBehavior='smooth';
  setTimeout(() =>{
      document.querySelector('html').style.scrollBehavior='unset';
  },1000);
});
/*
//this is where we apply opacity to the arrow
$(window).scroll( function(){

    //get scroll position
    var topWindow = $(window).scrollTop();
    //multipl by 1.5 so the arrow will become transparent half-way up the page
    var topWindow = topWindow * 1.5;
    
    //get height of window
    var windowHeight = $(window).height();
        
    //set position as percentage of how far the user has scrolled 
    var position = topWindow / windowHeight;
    //invert the percentage
    position = 1 - position;
  
    //define arrow opacity as based on how far up the page the user has scrolled
    //no scrolling = 1, half-way up the page = 0
    $('.arrow-wrap').css('opacity', position);
  
  });
  
  
  
  
  
  
  //Code stolen from css-tricks for smooth scrolling:
  $(function() {
    $('a[href*=#]:not([href=#])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });
  });*/
