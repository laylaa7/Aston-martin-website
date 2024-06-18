const dbs = document.getElementById("dbs")
    const vantage = document.getElementById('vantage')
    const valour = document.getElementById('valour')
    const db12 = document.getElementById('db12')

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

    //CLOSE OVERLAY
    function toggleOverlay() {
      document.querySelector(".overlay-container").classList.toggle('active')
      var video = document.getElementById('overlayVideo');
      video.pause()
      video.currentTime = 0
    }


    //progress bar data
    const topSpeed = [339,325,310,321,325]
    const zeroToHundred = [3,4,2,4,3]
    const accelaration = [122,121,222,445,450]

    const topSpeedPercentage = [75,68,60,65,67]
    const zeroToHundredPercentage = [70,75,56,80,70]
    const accelarationPercentage  = [23,67,45,67,45]

    const topSpeedContainer = document.getElementById('top-speed')
    const zeroToHundredContainer = document.getElementById('zeroToHundred')
    const accelarationContainer = document.getElementById('accelaration')

    const carHeaders = [{header: "DBS", subHeader:"770 ULTIMATE", text:"For over half a century, the name DBS has meant just one thing: the ultimate production Aston Martin."},
    {header: "VANTAGE", subHeader:"F1 EDITION", text:"The Vantage F1® Edition is a new breed of Aston Martin. One that celebrates the marques return to Formula 1® for the first time in over 60 years."},
    {header: "DBX707", subHeader:"707", text:"The most powerful and efficient ‘DB’ production model in Aston Martin’s history, DB11 is the ultimate Grand Tourer, and the standard-bearer for an all-new generation of cars."},
    {header: "VALOUR", subHeader:"DB11", text:"The most powerful and efficient ‘DB’ production model in Aston Martin’s history, DB11 is the ultimate Grand Tourer, and the standard-bearer for an all-new generation of cars."},
    {header: "DB12", subHeader:"VOLANTE", text:"The most powerful and efficient ‘DB’ production model in Aston Martin’s history, DB11 is the ultimate Grand Tourer, and the standard-bearer for an all-new generation of cars."}]

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
    
