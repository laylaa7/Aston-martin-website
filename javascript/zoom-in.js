// const { innerHeight } = window;

// gsap.to("#home p", {
//     scale: 20, stagger: 0.25, duration: 3,
//     scrollTrigger: {
//         trigger: "#home",
//         pin: true,
//         end: `+=${innerHeight * 0.9}`,
//         scrub: 3,
//         onComplete: () => {
//             gsap.to(".video-container1", { opacity: 1, visibility: "visible", duration: 1 });
//         }
//     }
// });

// const { innerHeight } = window;

// gsap.to("#home p", {
//     scale: 20, stagger: 0.25, duration: 3,
//     scrollTrigger: {
//         trigger: "#home",
//         pin: true,
//         end: `+=${innerHeight * 0.9 + 5}`, // Adding a delay of 5 units
//         scrub: 3,
//         onComplete: () => {
//             gsap.to(".video-container1", { opacity: 1, visibility: "visible", duration: 1 });
//             document.querySelector(".video").play(); // Start playing the video
//         }
//     }
// });


// const { innerHeight } = window;

// gsap.to("#home p", {
//     scale: 10,
//     stagger: 0.25,
//     duration: 3,
//     scrollTrigger: {
//         trigger: "#home",
//         pin: true,
//         end: `+=${innerHeight * 0.9}`,
//         scrub: 3,
//         onComplete: () => {
//             // Delay the video animation by 3 seconds (duration of the scaling animation)
//             gsap.to(".video-container1", { opacity: 1, visibility: "visible", duration: 1, delay: 3 });
//         }
//     }
// });

//----------------------------------

// console.clear();

// const svg = document.querySelector("#svg");
// const img = document.querySelector("#img");
// const circle = document.querySelector("#circle");
// const pad = 4;

// let radius = +circle.getAttribute("r");
// let imgWidth, imgHeight;

// gsap.set(img, {
//   scale: 5,
//   xPercent: -50,
//   yPercent: -50
// });

// var tl = gsap.timeline({
//     scrollTrigger: {  
//       trigger: '.image-unmask',
//       pin: true,
//       start: "top top",
//       end: '+=2500',
//       //end: "bottom bottom",
//       scrub: 0.2,
//     },
//     defaults: {
//       duration: 1
//     }
//   })
//   .to(circle, {
//     attr: {
//       r: () => radius
//     }
//   }, 0)
//   .to(img, {
//     scale: 1,
//     opacity: 1,
//   }, 0)
//   .to("#whiteLayer", {
//     alpha: 0,
//     ease: "power1.in",
//     duration: 1 - 0.25
//   }, 0.25)
// ;
  


// window.addEventListener("load", init);
// window.addEventListener("resize", resize);

// function init() {
      
//   imgWidth = img.naturalWidth;
//   imgHeight = img.naturalHeight;
    
//   resize();  
// }

// function resize() {
    
//   tl.progress(0);
  
//   const r = svg.getBoundingClientRect();
//   const rectWidth = r.width + pad;
//   const rectHeight = r.height + pad;
  
//   const rx = rectWidth / imgWidth;
//   const ry = rectHeight / imgHeight;
  
//   const ratio = Math.max(rx, ry);
  
//   const width = imgWidth * ratio;
//   const height = imgHeight * ratio;
    
//   const dx = rectWidth / 2;
//   const dy = rectHeight / 2;
//   radius = Math.sqrt(dx * dx + dy * dy);
            
//   gsap.set(img, { width, height });
    
//   tl.invalidate();
  
//   ScrollTrigger.refresh();
  
// }


//-------------------------
// console.clear();

//   const vid = document.querySelector("#vid");
//   const text = document.querySelector(".image-text");
//   const pad = 4;

//   let imgWidth, imgHeight;

//   gsap.set(text, {
//     scale: 1, // Initial scale (zoomed out)
//     opacity: 1, // Hide initially
//   });
  

//   var tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: '.image-unmask',
//         pin: true,
//         start: "top top",
//         end: '+=2500',
//         scrub: 1.5,
//         onToggle: self => {
//           if (!self.isActive) {
//             vid.play();
//           }
//         }
//       },
//       defaults: {
//         duration: 1
//       }
//     })
//     .to(text, {
//       scale: 6, // Final scale (zoomed in)
//       opacity: 1, // Show when zoomed in
//     }, 0)
//     .to("#mask rect", {
//       alpha: 0,
//       ease: "power1.in",
//       duration: 1 - 0.25
//     }, 0.25);

//   window.addEventListener("load", init);
//   window.addEventListener("resize", resize);

//   function init() {
//     resize();
//   }

//   function resize() {
//     tl.progress(0);
//     tl.invalidate();
//     ScrollTrigger.refresh();
//   }

//--------------------
const { innerHeight } = window;

gsap.to("#home p", {
    scale: 20, stagger: 0.25, duration: 3,
    scrollTrigger: {
        trigger: "#home",
        pin: true,
        end: `+=${innerHeight * 0.9}`,
        scrub: 3,
       
    }
});

// const vid = document.querySelector("#vid");

// gsap.set(vid, {
//   opacity: 0,
// });

// gsap.timeline({
//   scrollTrigger: {
//     trigger: '.image-unmask',
//     start: "top top",
//     end: '+=2500',
//     scrub: 3,
//     onToggle: self => {
//       if (!self.isActive) {
//         vid.play();
//       }
//     }
//   },
//   defaults: {
//     duration: 3
//   }
// }).to(vid, {
//   opacity: 1,
// }, 0).to("#mask", {
//   opacity: 0,
//   ease: "power1.in",
//   duration: 1 - 0.6
// }, 0.6);
