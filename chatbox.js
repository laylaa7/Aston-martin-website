
    document.getElementById('ch').onclick = function() {
       
        document.getElementById('chat').innerHTML += "<p class=\"user-message\">Models Available</p>";
       
        setTimeout(function() {
        document.getElementById('chat').innerHTML +="<p class=\"bot-message\">We Have DBS, DB12, VALOUR, VANTAGE, DBX707</p>";
        }, 800);
    }
    document.getElementById('ch2').onclick = function() {
       
        document.getElementById('chat').innerHTML += "<p class=\"user-message\">Models Available</p>";
       

        document.getElementById('chat').innerHTML +="<p class=\"bot-message\">We Have DBS, DB12, VALOUR, VANTAGE, DBX707</p>";
        
    }