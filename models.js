const dbs = document.getElementById("dbs")
    const vantage = document.getElementById('vantage')
    const valour = document.getElementById('valour')
    const db12 = document.getElementById('db12')

    dbs.onclick = () => {
      document.getElementById('videoSource').src ="vids/dbs_vid.mp4"
      document.querySelector(".overlay-container").classList.toggle('active')
      setTimeout(function() {
            var video = document.getElementById('overlayVideo');
            video.load()
            video.play();
        }, 500);
    }
    vantage.onclick = () => {
      document.getElementById('videoSource').src ="vids/vantage_vid.mp4"
      document.querySelector(".overlay-container").classList.toggle('active')
      setTimeout(function() {
            var video = document.getElementById('overlayVideo');
            video.load()
            video.play();
        }, 500);
    }
    valour.onclick = () => {
      document.getElementById('videoSource').src ="vids/valour_vid.mp4"
      document.querySelector(".overlay-container").classList.toggle('active')
      setTimeout(function() {
            var video = document.getElementById('overlayVideo');
            video.load()
            video.play();
        }, 500);
    }
    db12.onclick = () => {
      document.getElementById('videoSource').src ="vids/db12_vid.mp4"
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



    const topSpeed = [100,200,707,800,900]
    const zeroToHundred = [1.5,2,4,6,9]
    const accelaration = [122,121,222,445,450]

    const topSpeedPercentage = [45,55,69,78,67]
    const zeroToHundredPercentage = [34,56,56,78,12]
    const accelarationPercentage  = [23,12,45,67,45]

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

    
    swiper.on('slideChange', () => {
      configureBtn=document.getElementById('configure-link');
      console.log('swiper.realIndex:', swiper.realIndex);
      const carModelIndex = swiper.realIndex;
      console.log('carModelIndex:', carModelIndex);
      let configHtml = '';
      switch (carModelIndex) {
        case 0:
          configHtml = 'DBSconfig.html';
          break;
        case 1:
          configHtml = 'VANTAGEconfig.html';
          break;
        case 2:
          configHtml = 'DBX707config.html';
          break;
        case 3:
          configHtml = 'VALOURconfig.html';
          break;
        case 4:
          configHtml = 'DB12config.html';
          break;
      }
      console.log('configHtml:', configHtml);
      configureBtn.href = configHtml;
    });
