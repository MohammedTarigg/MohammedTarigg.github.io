/*-----------------Page Loader-----------------*/
function pageLoader() {
  window.addEventListener("load",() => {
    document.getElementById("page-loader").classList.add("slide-out");
  });
}
pageLoader();
/*-----------------background animation effect-----------------*/
function bgAnimation() {
  const rows = 8,
    columns = 12;
  for (let i = 0; i < rows; i++) {
    for (let y = 0; y < columns; y++) {
      const particle = document.createElement("i");
      i % 2 == 0 ? (particle.dataset.i = "1") : (particle.dataset.i = "2");
      document.querySelector(".bg-animation").appendChild(particle);
    }
  }
}
bgAnimation();

/*-----------------burger handler-----------------*/
function burgerHandler() {
  const bt = document.querySelector(".burger");
  bt.addEventListener("click",() => {
    bt.classList.toggle("active-burger");
    showLinksMenu();
  });
}
burgerHandler();

function showLinksMenu() {
  document.querySelector(".links").classList.toggle("show-header");
  document.querySelector(".header").classList.toggle("glass");
}
/*------------------------------- overlay effect -----------------------------------*/
function overlayEffect() {
  for (let i = 0; i < 7; i++) {
    var overlayingItem = document.createElement("div");
    overlayingItem.classList.add("overlaying-item");
    document.querySelector(".overlaying-effect").appendChild(overlayingItem);
  }
}
overlayEffect();
/*------------------------------- hide and show sections -----------------------------------*/

document.addEventListener("click",(e) => {
  if (linkRules(e)) {
    const hash = e.target.hash;
    // console.log(location.hash);console.log(hash);
    for (link of document.getElementsByClassName("link-item")) {
      link.classList.remove("active-link-item");
      // console.log(link.id);console.log(link.hash); console.log(link);
      if (link.hash == e.target.hash && link.classList.contains("bt")) {
        link.classList.add("active-link-item");
      }
    }
    toggleOverLayEffect();
    setTimeout(() => {
      activeSection(hash);
    },300);
    setTimeout(() => {
      toggleOverLayEffect();
      document.querySelector(".overlaying-effect").style.display = "none";
    },1000);
  }
});

function linkRules(click) {
  if (
    click.target.classList.contains("link-item") &&
    click.target.hash !== "" &&
    click.target.hash !== location.hash
  )
    return true;
  else return false;
}
function activeSection(sectionId) {
  // console.log(sectionId);
  document
    .querySelector("section.active-section")
    .classList.remove("active-section");
  document.querySelector(sectionId).classList.add("active-section");
  // window.scrollTo(0.0);
}
/*------------------------------- toggle overlay effect -----------------------------------*/
function toggleOverLayEffect() {
  document.querySelector(".overlaying-effect").style.display = "flex";
  for (overlayItem of document.getElementsByClassName("overlaying-item")) {
    overlayItem.classList.toggle("overlay-active");
  }
}

/*-----------------blob animation-----------------*/
const blobAnimation = KUTE.fromTo(
  "#blob1",
  { path: "#blob1" },
  { path: "#blob2" },
  { repeat: 999,duration: 3000,yoyo: true }
);
blobAnimation.start();

/*-----------------On reload-----------------*/
function withReload() {
  window.addEventListener("load",() => {
    const elements = document.getElementsByClassName("bt link-item");
    for (link of elements) {
       link.classList.remove("active-link-item");
      if ((window.location.href).includes(link.getAttribute("href"))) {
        activeSection(link.hash);
        link.classList.add("active-link-item");
      }
    }
  });
}
withReload();
