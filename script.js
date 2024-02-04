// Header Code

document.addEventListener("DOMContentLoaded", function () {
    var header = document.getElementById("header");
  
    function updateHeaderStyle() {
      if (window.innerWidth > 700) {
        if (window.scrollY === 0) {
          header.style.width = "90%";
          header.style.top = ".5em";
          header.style.borderRadius = "25px";
        } else {
          header.style.width = "100%";
          header.style.top = "0";
          header.style.borderRadius = "0";
        }
      } else {
        header.style.width = "";
        header.style.top = "";
        header.style.borderRadius = "";
      }
    }
  
    updateHeaderStyle();
  
    window.addEventListener("scroll", updateHeaderStyle);
    window.addEventListener("resize", updateHeaderStyle);
  });
  
// Backsound Code

document.addEventListener("DOMContentLoaded", function () {
  var musicPlayer = document.getElementById("musicPlayer");
  var toggleButton = document.getElementById("toggleButton");

  function startMusic() {
      musicPlayer.play();
      document.removeEventListener("click", startMusic);
  }

  document.addEventListener("click", startMusic);

  function toggleMusic() {
      if (musicPlayer.paused) {
          musicPlayer.play();
          toggleButton.classList.remove("paused");
      } else {
          musicPlayer.pause();
          toggleButton.classList.add("paused");
      }
  }

  toggleButton.addEventListener("click", toggleMusic);
});