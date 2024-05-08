
    document.getElementById('ch1').onclick = function() {
       
        document.getElementById('chat').innerHTML += "<p class=\"user-message\">Models Available</p>";
       
        setTimeout(function() {
        document.getElementById('chat').innerHTML +="<p class=\"bot-message\">We Have DBS, DB12, VALOUR, VANTAGE, DBX707</p>";
        }, 800);
    }
    document.getElementById('ch2').onclick = function() {
       
        document.getElementById('chat').innerHTML += "<p class=\"user-message\">Test Drive Form </p>";
       
        setTimeout(function() {
        document.getElementById('chat').innerHTML +="<p class=\"bot-message\">Upon selecting your preferred vehicle, we'll deliver it to your address for a trial before finalizing the purchase</p>";
         }, 800);
    }
    document.getElementById('ch3').onclick = function() {
       
        document.getElementById('chat').innerHTML += "<p class=\"user-message\">About us</p>";
       

        document.getElementById('chat').innerHTML +="<p class=\"bot-message\">Aston Martin’s vision is to be the world’s most desirable, ultra-luxury British brand, creating the most exquisitely addictive performance cars.Founded in 1913 by Lionel Martin and Robert Bamford </p>";
        
    }
    const menuToggle=document.querySelector('.menuToggle');
    menuToggle.onclick = function(){
        menuToggle.classList.toggle('active');
    }