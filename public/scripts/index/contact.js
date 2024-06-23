//Contact Us (footer & navbar) script
   
function toggleNav() {
    var sideNav = document.getElementById("mySidenav");
    var menuBtn = document.getElementById("menuBtn");

    if (sideNav.style.width === "250px") {
        sideNav.style.width = "0";
        menuBtn.classList.remove("change");
        container2.style.zIndex = "1"; 
    } else {
        sideNav.style.width = "250px";
        menuBtn.classList.add("change");
        container2.style.zIndex = "-1"; 
    }

    }
   

    ScrollReveal({
       reset: true,
       distance: '60px',
       duration:2500,
       delay: 500,
       });

      ScrollReveal().reveal('.a1', { delay: 300, origin: 'bottom'});
      ScrollReveal().reveal('.a2', { delay: 400, origin: 'bottom'});
      ScrollReveal().reveal('.a3', { delay: 500, origin: 'bottom'});

      ScrollReveal().reveal('.contact-text', { delay: 500, origin: 'left'});


    document.querySelector('.a1').addEventListener('click', function() {
       document.getElementById('contact-text').innerHTML =
            'Aston Martin Client Support<br><br>\
            Tel: 44 (0) 1926 644722<br>\
            US customers: (866) 278-6661';
    });

    document.querySelector('.a2').addEventListener('click', function() {
        document.getElementById('contact-text').innerHTML = 
        'Please fill out your details and <br>we will be in touch shortly.<br><br><br>\
        <button class="discover-btn disc3" id="discover-btn"> \
        <a href="Reservation.html">Enquire</a> \
        <svg \
            xmlns="http://www.w3.org/2000/svg" \
            class="h-6 w-6" \
            fill="none" \
            viewBox="0 0 24 24" \
            stroke="currentColor" \
            stroke-width="4"> \
            <path \
                stroke-linecap="round" \
                stroke-linejoin="round" \
                d="M14 5l7 7m0 0l-7 7m7-7H3"></path> \
        </svg> \
        </button>';
    });
    

    document.querySelector('.a3').addEventListener('click', function() {
    document.getElementById('contact-text').innerHTML = `
    Contact Us Information
    <nav class="footer-social">
        <ul>
            <li class="logo">
                <a href="https://instagram.com/astonmartin" target="_blank">
                    <img src="/assets/img/instagram_733614.png" alt="">  
                </a>
            </li>
            <li class="logo">
                <a href="https://www.facebook.com/astonmartin/" target="_blank">
                    <img src="/assets/img/facebook_1384005.png" alt="">
                </a>
            </li>
            <li class="logo">
                <a href="https://twitter.com/astonmartin" target="_blank">
                    <img src="/assets/img/twitter_5968958.png" alt="">
                </a>
            </li>
            <li class="logo">
                <a href="https://www.youtube.com/user/AstonMartin" target="_blank">
                    <img src="/assets/img/youtube.png" alt="">
                </a>
            </li>
            <li class="logo">
                <a href="https://www.linkedin.com/company/aston-martin-lagonda-ltd/" target="_blank">
                    <img src="/assets/img/linkedin-logo.png" alt="">
                </a>
            </li>
        </ul>
    </nav>`;
    });


    // function openNav() {
        //     document.getElementById("mySidenav").style.width = "250px";
        // }

        // function closeNav() {
        //     document.getElementById("mySidenav").style.width = "0";
        // }
        // function myFunction(x) {
        //     x.classList.toggle("change");
        // } 