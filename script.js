let wafle = document.querySelector("header .hamburger")
let nav = document.querySelector("header nav")

wafle.addEventListener("click", () => {
    nav.classList.toggle("active")
})




  let active = null;

  document.querySelectorAll("main .arrivals li").forEach(li => {
    li.addEventListener("click", () => {

      // vorige resetten
      if (active && active !== li) {
        active.style.transform = "scale(1)";
        active.style.zIndex = "";
        active.style.position = "";
      }

      // toggle huidige
      if (li === active) {
        li.style.transform = "scale(1)";
        li.style.zIndex = "";
        li.style.position = "";
        active = null;
      } else {
        li.style.transform = "scale(1.5)";
        li.style.transition = "transform 0.3s ease";
        li.style.position = "relative";
        li.style.zIndex = "1000";

        // 👉 centraal in beeld scrollen
        li.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "center"
        });

        active = li;
      }
    });
    let omhoog = document.querySelector("footer")

    omhoog.addEventListener("click", () => {
    window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
  });



