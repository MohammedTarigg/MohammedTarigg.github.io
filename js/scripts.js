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
  document
    .querySelector("section.active-section")
    .classList.remove("active-section");
  document.querySelector(sectionId).classList.add("active-section");
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

/*-----------------Mail Function-----------------*/
const form = document.getElementById('contact-form');

form.addEventListener('submit',(e) => {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const subject = document.getElementById('subject').value;
  const message = document.getElementById('message').value;
  let params = {
    from_name: name,email_id: email,subject: subject,message: message
  }
  function valid() {
    errors = [];
    if (name.length === 0) {
      errors.push("Name must have a value")
    }
    if (email.length === 0) {
      errors.push(" Email must have a value")
    }
    if (subject.length === 0) {
      errors.push(" Subject must have a value")
    }
    if (message.length === 0) {
      errors.push(" Message must have a value")
    }
    return errors;
  }
  if (valid().length === 0) {
    emailjs.send("service_1xt1ehu","template_7r4py37",params).then((res) => { alert("Message sent successfully!") })
    // Email.send({
    //   Host: "smtp.elasticemail.com",
    //   Username: "mohamed.tarigsdd@gmail.com",
    //   Password: "FB0997147217E091FE7A073C5606B3204968",
    //   To: 'mohamed.tarigsd@gmail.com',
    //   From: `kasber@outlook.sa`,
    //   Subject: `${subject} sent by ${name} <${email}>`,
    //   Body: `${message}`
    // }).then(response => {
    //   if (response === 'OK') {
    //     alert('Message sent successfully!');
    //     form.reset();
    //   } else {
    //     console.log(response);
    //     throw new Error('Failed to send message.');

    //   }
    // })
    //       .catch(error => {
    //         console.log(error);
    //         alert("An error has occured");
    //       });
    //   } else {
    //     alert(errors);
    //   }
  }
});

/*-----------------On reload-----------------*/
function withLoad() {
  window.addEventListener("load",() => {
    const elements = document.getElementsByClassName("bt link-item");
    if (!window.location.href.includes("#")) {
      return;
    }
    for (link of elements) {
      link.classList.remove("active-link-item");
      if ((window.location.href).includes(link.getAttribute("href"))) {
        activeSection(link.hash);
        link.classList.add("active-link-item");
      }
    }
  }
  );
}
withLoad();