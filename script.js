console.log("JS loaded");

gsap.registerPlugin(ScrollTrigger);

/* ---------------- HERO ---------------- */

gsap.to(".title", {
  scrollTrigger: {
    trigger: ".hero",
    start: "top top",
    end: "bottom top",
    scrub: true
  },
  y: -200,
  opacity: 0
});

gsap.to(".subtitle", {
  scrollTrigger: {
    trigger: ".hero",
    start: "top top",
    end: "bottom top",
    scrub: true
  },
  y: -100,
  opacity: 0
});

/* ---------------- ABOUT ---------------- */

gsap.from(".about-inner", {
  scrollTrigger: {
    trigger: ".about",
    start: "top center",
    end: "bottom center",
    scrub: true
  },
  opacity: 0,
  y: 100
});

/* ---------------- SKILLS ---------------- */

gsap.from(".skill", {
  scrollTrigger: {
    trigger: ".skills",
    start: "top 70%"
  },
  opacity: 0,
  y: 50,
  stagger: 0.2,
  duration: 1
});

/* ---------------- PARALLAX SCROLL ---------------- */

gsap.to(".back", {
  scrollTrigger: {
    trigger: ".parallax",
    start: "top bottom",
    end: "bottom top",
    scrub: true
  },
  y: -100
});

gsap.to(".mid", {
  scrollTrigger: {
    trigger: ".parallax",
    start: "top bottom",
    end: "bottom top",
    scrub: true
  },
  y: -200
});

gsap.to(".front", {
  scrollTrigger: {
    trigger: ".parallax",
    start: "top bottom",
    end: "bottom top",
    scrub: true
  },
  y: -300
});

/* ---------------- MOUSE PARALLAX (optimized) ---------------- */

let ticking = false;

document.addEventListener("mousemove", (e) => {
  if (!ticking) {
    requestAnimationFrame(() => {
      const x = (e.clientX / window.innerWidth - 0.5) * 10;
      const y = (e.clientY / window.innerHeight - 0.5) * 10;

      gsap.to(".back", { x: x * 0.2, y: y * 0.2, duration: 0.8 });
      gsap.to(".mid", { x: x * 0.4, y: y * 0.4, duration: 0.8 });
      gsap.to(".front", { x: x * 0.6, y: y * 0.6, duration: 0.8 });

      ticking = false;
    });

    ticking = true;
  }
});

/* ---------------- HORIZONTAL PROJECTS ---------------- */

window.addEventListener("load", () => {
  const container = document.querySelector(".projects-container");

  if (!container) return;

  const scrollAmount = container.scrollWidth - window.innerWidth;

  // Only apply if scrolling is actually needed
  if (scrollAmount > 0) {
    gsap.to(container, {
      x: -scrollAmount,
      ease: "none",
      scrollTrigger: {
        trigger: ".projects",
        start: "top top",
        end: "+=" + scrollAmount,
        scrub: true,
        pin: true,
        anticipatePin: 1
      }
    });
  }
});
