//navbar bottom bar

const highlightMenu = () => {
  const elem = document.querySelector(".highlight");
  const homeMenu = document.querySelector("#home-page");
  const productMenu = document.querySelector("#products-page");
  const queryMenu = document.querySelector("#query-page");
  const aboutMenu = document.querySelector("#about-page");
  const quizMenu = document.querySelector("#quiz-page");
  const galleryMenu = document.querySelector("#gallary-page");
  const sitemapMenu = document.querySelector("#sitemap-page");
  let scrollPos = window.scrollY;

  if (scrollPos < 600) {
    homeMenu.classList.add("highlight");
    productMenu.classList.remove("highlight");
    return;
  } else if (scrollPos < 1400) {
    productMenu.classList.add("highlight");
    homeMenu.classList.remove("highlight");
    queryMenu.classList.remove("highlight");
    return;
  } else if (scrollPos < 2100) {
    queryMenu.classList.add("highlight");
    productMenu.classList.remove("highlight");
    aboutMenu.classList.remove("highlight");
    return;
  } else if (scrollPos < 2800) {
    aboutMenu.classList.add("highlight");
    queryMenu.classList.remove("highlight");
    quizMenu.classList.remove("highlight");
    return;
  } else if (scrollPos < 3300) {
    quizMenu.classList.add("highlight");
    aboutMenu.classList.remove("highlight");
    galleryMenu.classList.remove("highlight");
    return;
  } else if (scrollPos < 3900) {
    galleryMenu.classList.add("highlight");
    quizMenu.classList.remove("highlight");
    sitemapMenu.classList.remove("highlight");
    return;
  } else if (scrollPos < 4800) {
    sitemapMenu.classList.add("highlight");
    galleryMenu.classList.remove("highlight");
    return;
  }

  if ((elem && scrollPos < 600) || elem) {
    elem.classList.remove("highlight");
  }
};

window.addEventListener("scroll", highlightMenu);
window.addEventListener("click", highlightMenu);

//pause & play music

const mySong = document.getElementById("mySong");
const icon = document.getElementById("icon");

icon.onclick = function () {
  if (mySong.paused) {
    mySong.play();
    icon.src = "media/pause.png";
  } else {
    mySong.pause();
    icon.src = "media/play.png";
  }
};
