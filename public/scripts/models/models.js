    //progress bar data
    var topSpeed = []
    var zeroToHundred = []
    var accelaration = []

    var topSpeedPercentage = []
    var zeroToHundredPercentage = []
    var accelarationPercentage  = []

    var topSpeedContainer = document.getElementById('top-speed')
    var zeroToHundredContainer = document.getElementById('zeroToHundred')
    var accelarationContainer = document.getElementById('accelaration')

    var carHeaders = []
    
    fetch("/api/cars").then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }
      return response.json();
    }).then(data => {
      data.map(car => {
        topSpeed.push(car.topSpeed)
        topSpeedPercentage.push((car.topSpeed / 400) * 100)
        zeroToHundred.push(Math.floor(car.zeroToHundredKmh))
        zeroToHundredPercentage.push((car.zeroToHundredKmh / 4) * 100)

        accelaration.push(car.acceleration)
        accelarationPercentage.push((car.acceleration/470) * 100)

        carHeaders.push({header:car.carName, subHeader: car.subBar, text:car.carDescription})
      })

      document.getElementById("loading-screen").style.display = "none"
      document.getElementById("car-models").style.display = "block"
      
    })
    
    const dbs = document.getElementById("dbs")
    const vantage = document.getElementById('vantage')
    const valour = document.getElementById('valour')
    const db12 = document.getElementById('db12')
    const dbx707 = document.getElementById('dbx707')



    dbs.onclick = () => {
      document.getElementById('videoSource').src ="/assets/vids/dbs_vid.mp4"
      document.querySelector(".overlay-container").classList.toggle('active')
      setTimeout(function() {
            var video = document.getElementById('overlayVideo');
            video.load()
            video.play();
        }, 500);
    }
    vantage.onclick = () => {
      document.getElementById('videoSource').src ="/assets/vids/vantage_vid.mp4"
      document.querySelector(".overlay-container").classList.toggle('active')
      setTimeout(function() {
            var video = document.getElementById('overlayVideo');
            video.load()
            video.play();
        }, 500);
    }
    valour.onclick = () => {
      document.getElementById('videoSource').src ="/assets/vids/valour_vid.mp4"
      document.querySelector(".overlay-container").classList.toggle('active')
      setTimeout(function() {
            var video = document.getElementById('overlayVideo');
            video.load()
            video.play();
        }, 500);
    }
    db12.onclick = () => {
      document.getElementById('videoSource').src ="/assets/vids/db12_vid.mp4"
      document.querySelector(".overlay-container").classList.toggle('active')
      setTimeout(function() {
            var video = document.getElementById('overlayVideo');
            video.load()
            video.play();
        }, 500);
    }
    dbx707.onclick = () => {
      document.getElementById('videoSource').src ="/assets/vids/dbx707_vid.mp4"
      document.querySelector(".overlay-container").classList.toggle('active')
      setTimeout(function() {
            var video = document.getElementById('overlayVideo');
            video.load()
            video.play();
        }, 500);
    }

    //CLOSE OVERLAY
    function toggleOverlay() {
      document.querySelector(".overlay-container").classList.toggle('active')
      var video = document.getElementById('overlayVideo');
      video.pause()
      video.currentTime = 0
    }


    

    const carHeader = document.getElementById('car-header')


    //default
    topSpeedContainer.style = `--p:${topSpeedPercentage[0]}; --v:${topSpeed[0]}`
    zeroToHundredContainer.style = `--p:${zeroToHundredPercentage[0]}; --v:${zeroToHundred[0]}`
    accelarationContainer.style = `--p:${accelarationPercentage[0]}; --v:${accelaration[0]}`



    //READY MADE FUNCTION
    var swiper = new Swiper(".mySwiper", {
      loop: true,
      slidesPerView: 1,
      width: screen.width/1.5,
      centeredSlides: true,
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination",
        type: "fraction",
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      grabCursor: true,
    });

    swiper.on('slideChange', () => {
          topSpeedContainer.style = `--p:${topSpeedPercentage[swiper.realIndex]}; --v:${topSpeed[swiper.realIndex]}`
            zeroToHundredContainer.style = `--p:${zeroToHundredPercentage[swiper.realIndex]}; --v:${zeroToHundred[swiper.realIndex]}`
            accelarationContainer.style = `--p:${accelarationPercentage[swiper.realIndex]}; --v:${accelaration[swiper.realIndex]}`
            carHeader.innerHTML = `<h1>${carHeaders[swiper.realIndex].header}</h1>
            <h2>${carHeaders[swiper.realIndex].subHeader}</h2>
            <p>${carHeaders[swiper.realIndex].text}</p>`
    })

      //configure button
    swiper.on('slideChange', () => {
      configureBtn=document.getElementById('configure-link');
      console.log('swiper.realIndex:', swiper.realIndex);
      const carModelIndex = swiper.realIndex;
      console.log('carModelIndex:', carModelIndex);
      let configHtml = '';
      switch (carModelIndex) {
        case 0:
          configHtml = '/models/config/dbs';
          break;
        case 1:
          configHtml = '/models/config/vantage';
          break;
        case 2:
          configHtml = '/models/config/dbx707';
          break;
        case 3:
          configHtml = '/models/config/valour';
          break;
        case 4:
          configHtml = '/models/config/db12';
          break;
      }
      console.log('configHtml:', configHtml);
      configureBtn.href = configHtml;
    });
    
    