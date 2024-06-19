// Wait for the DOM content to be loaded
document.addEventListener("DOMContentLoaded", function () {
  // Select the elements needed for the counting animation
  const nums = document.querySelectorAll(".page3 .nums .num");
  const section = document.querySelector(".page3");

  // Function to start the counting animation
  function startCount(el) {
    const goal = parseInt(el.dataset.goal); // Parse goal as integer
    const h4 = el.querySelector("h4");

    // Set the h4 visibility to visible
    h4.style.visibility = "visible";

    // Start counting animation
    let currentValue = 0;
    const interval = setInterval(() => {
      currentValue++;
      el.textContent = currentValue;

      if (currentValue >= goal) {
        clearInterval(interval);
        el.textContent = goal; // Ensure final value is exactly the goal
      }
    }, 2000 / goal);
  }

  // Create an Intersection Observer to trigger the counting animation
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Trigger the counting animation for each num element
        nums.forEach((num) => startCount(num));

        // Stop observing once animation starts
        observer.unobserve(section);
      }
    });
  });

  // Observe the section
  observer.observe(section);
});

document.addEventListener("DOMContentLoaded", function (event) {
  // array with texts to type in typewriter
  var dataText = ["ENGINEERING.", "And", "PERFORMANCE."];

  // type one text in the typwriter
  // keeps calling itself until the text is finished
  function typeWriter(text, i, fnCallback) {
    // chekc if text isn't finished yet
    if (i < text.length) {
      // add next character to h1
      document.querySelector(".big").innerHTML =
        text.substring(0, i + 1) + '<span aria-hidden="true"></span>';

      // wait for a while and call this function again for next character
      setTimeout(function () {
        typeWriter(text, i + 1, fnCallback);
      }, 100);
    }
    // text finished, call callback if there is a callback function
    else if (typeof fnCallback == "function") {
      // call callback after timeout
      setTimeout(fnCallback, 700);
    }
  }
  // start a typewriter animation for a text in the dataText array
  function StartTextAnimation(i) {
    if (typeof dataText[i] == "undefined") {
      setTimeout(function () {
        StartTextAnimation(0);
      }, 20000);
    }
    // check if dataText[i] exists
    if (i < dataText[i].length) {
      // text exists! start typewriter animation
      typeWriter(dataText[i], 0, function () {
        // after callback (and whole text has been animated), start next text
        StartTextAnimation(i + 1);
      });
    }
  }
  // start the text animation
  StartTextAnimation(0);
});

app.get("src/vantagr_car.html", (req, res) => {
  res.sendFile(path.join(__dirname, "src/vantagr_car.html"));
});
app.get("src/ ultimate_volante.html", (req, res) => {
  res.sendFile(path.join(__dirname, "src/ ultimate_volante.html"));
});
document.addEventListener("DOMContentLoaded", function () {
  // Smooth scroll for navigation links
  const navLinks = document.querySelectorAll(".a, .second-header ul li a");
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);
      targetSection.scrollIntoView({
        behavior: "smooth",
      });
    });
  });
});
