gsap.registerPlugin(ScrollTrigger);

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

const timing = {
  reveal: 0.8,
  stagger: 0.1,
  hover: 0.25,
  transition: 0.6,
};

if (prefersReducedMotion.matches) {
  gsap.set(
    ".line-inner, .hero-role, .hero-mission, .rule, .skill-category, .project-card, .timeline-item, .timeline-line",
    { clearProps: "all", opacity: 1, y: 0, x: 0, scale: 1 }
  );
  document.querySelector(".loader")?.remove();
} else {
  initLoader();
  initHero();
  initParallax();
  initAbout();
  initProfile();
  initSkills();
  initProjects();
  initTimeline();
  initContact();
  initPageTransitions();
}

function initLoader() {
  const loader = document.querySelector(".loader");
  const line = document.querySelector(".loader-line");

  const tl = gsap.timeline({
    defaults: { ease: "power2.out" },
    onComplete: () => loader?.remove(),
  });

  tl.fromTo(line, { y: 12, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 })
    .to(line, { opacity: 0, duration: 0.4, delay: 0.3 })
    .to(loader, { opacity: 0, duration: 0.4 }, "-=0.2");
}

function initHero() {
  const heroTl = gsap.timeline({ defaults: { ease: "power2.out" }, delay: 0.1 });
  heroTl
    .to(".hero-badge", { opacity: 1, y: 0, duration: 0.6 })
    .to(".line-inner", { y: 0, duration: timing.reveal, stagger: 0.12 })
    .to(".hero-subtitle", { opacity: 1, y: 0, duration: 0.6 }, "-=0.4")
    .to(".hero-mission", { opacity: 1, y: 0, duration: 0.6 }, "-=0.3")
    .to(".hero-cta .button", { opacity: 1, y: 0, stagger: 0.1, duration: 0.5 }, "-=0.2")
    .to(".hero-scroll-indicator", { opacity: 1, duration: 0.6 }, "-=0.2");

  gsap.to(".hero-inner", {
    scale: 0.95,
    y: -80,
    ease: "none",
    scrollTrigger: {
      trigger: ".hero",
      start: "top top",
      end: "bottom top",
      scrub: true,
    },
  });
}

function initParallax() {
  const hero = document.querySelector(".hero");
  const items = document.querySelectorAll(".parallax");
  if (!hero || items.length === 0) return;

  const moveX = gsap.utils.mapRange(-0.5, 0.5, -20, 20);
  const moveY = gsap.utils.mapRange(-0.5, 0.5, -16, 16);
  const setters = Array.from(items).map((item) => ({
    x: gsap.quickTo(item, "x", { duration: 0.6, ease: "power2.out" }),
    y: gsap.quickTo(item, "y", { duration: 0.6, ease: "power2.out" }),
  }));

  hero.addEventListener("mousemove", (event) => {
    const bounds = hero.getBoundingClientRect();
    const relX = (event.clientX - bounds.left) / bounds.width - 0.5;
    const relY = (event.clientY - bounds.top) / bounds.height - 0.5;

    setters.forEach((setter, index) => {
      const depth = (index + 1) * 0.6;
      setter.x(moveX(relX) * depth);
      setter.y(moveY(relY) * depth);
    });
  });

  hero.addEventListener("mouseleave", () => {
    setters.forEach((setter) => {
      setter.x(0);
      setter.y(0);
    });
  });
}

function initAbout() {
  gsap.from(".about-text", {
    y: 20,
    opacity: 0,
    duration: 0.7,
    ease: "power2.out",
    stagger: 0.12,
    scrollTrigger: {
      trigger: ".about",
      start: "top 55%",
    },
  });

  gsap.to(".rule", {
    scaleX: 1,
    duration: 0.5,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".about",
      start: "top 55%",
    },
  });
}

function initProfile() {
  const frame = document.querySelector(".profile-frame");
  if (!frame) return;

  gsap.fromTo(
    frame,
    { rotateZ: -6, rotateY: -8, opacity: 0, y: 20 },
    {
      rotateZ: 0,
      rotateY: 0,
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".profile",
        start: "top 70%",
      },
    }
  );

  gsap.to(frame, {
    rotateZ: 6,
    rotateY: 12,
    ease: "none",
    scrollTrigger: {
      trigger: ".profile",
      start: "top bottom",
      end: "bottom top",
      scrub: true,
    },
  });
}

function initSkills() {
  const pinEl = document.querySelector(".skills-pin");
  if (!pinEl) return;

  ScrollTrigger.create({
    trigger: pinEl,
    start: "top top",
    end: "+=120%",
    pin: true,
    pinSpacing: true,
  });

  gsap.to(".progress-bar", {
    scaleY: 1,
    ease: "none",
    scrollTrigger: {
      trigger: ".skills",
      start: "top top",
      end: "+=120%",
      scrub: true,
    },
  });

  const categories = gsap.utils.toArray(".skill-category");
  const railItems = gsap.utils.toArray(".skills-rail-list li");
  categories.forEach((category) => {
    const direction = category.dataset.direction === "right" ? 60 : -60;
    const items = category.querySelectorAll(".skill-chip");

    gsap.fromTo(
      category,
      { x: direction, opacity: 0, y: 20, rotateZ: -2 },
      {
        x: 0,
        y: 0,
        rotateZ: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: category,
          start: "top 70%",
        },
      }
    );

    gsap.fromTo(
      category,
      { "--sheen": "-60%" },
      {
        "--sheen": "60%",
        ease: "none",
        scrollTrigger: {
          trigger: category,
          start: "top 90%",
          end: "bottom 10%",
          scrub: true,
        },
      }
    );

    gsap.to(category, {
      rotateY: category.dataset.direction === "right" ? -6 : 6,
      rotateX: 2,
      ease: "none",
      scrollTrigger: {
        trigger: category,
        start: "top 80%",
        end: "bottom 20%",
        scrub: true,
      },
    });

    gsap.from(items, {
      y: 12,
      opacity: 0,
      duration: 0.6,
      stagger: timing.stagger,
      ease: "power2.out",
      scrollTrigger: {
        trigger: category,
        start: "top 70%",
      },
    });
  });

  categories.forEach((category, index) => {
    const railItem = railItems[index];
    if (!railItem) return;
    ScrollTrigger.create({
      trigger: category,
      start: "top 55%",
      end: "bottom 55%",
      onEnter: () => railItem.classList.add("is-active"),
      onEnterBack: () => railItem.classList.add("is-active"),
      onLeave: () => railItem.classList.remove("is-active"),
      onLeaveBack: () => railItem.classList.remove("is-active"),
    });
  });
}

function initProjects() {
  gsap.utils.toArray(".project-card").forEach((card) => {
    gsap.to(card, {
      scale: 1,
      opacity: 1,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: card,
        start: "top 80%",
      },
    });
  });
}

function initTimeline() {
  gsap.to(".timeline-line", {
    scaleY: 1,
    ease: "none",
    scrollTrigger: {
      trigger: ".timeline",
      start: "top 80%",
      end: "bottom 20%",
      scrub: true,
    },
  });

  gsap.utils.toArray(".timeline-item").forEach((item) => {
    const side = item.dataset.side === "right" ? 40 : -40;
    gsap.to(item, {
      opacity: 1,
      y: 0,
      x: 0,
      duration: 0.7,
      ease: "power2.out",
      scrollTrigger: {
        trigger: item,
        start: "top 80%",
      },
    });

    gsap.fromTo(
      item,
      { x: side },
      {
        x: 0,
        duration: 0.7,
        ease: "power2.out",
        scrollTrigger: {
          trigger: item,
          start: "top 80%",
        },
      }
    );
  });
}

function initContact() {
  const form = document.querySelector(".contact-form");
  const status = document.querySelector(".form-status");
  if (!form || !status) return;

  gsap.set(status, { y: 8 });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    gsap.to(status, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" });
  });
}

function initPageTransitions() {
  const transition = document.querySelector(".page-transition");
  if (!transition) return;

  document.querySelectorAll("a").forEach((link) => {
    const href = link.getAttribute("href") || "";
    const isHash = href.startsWith("#");
    const isExternal = href.startsWith("http");

    if (isHash || isExternal) return;

    link.addEventListener("click", (event) => {
      event.preventDefault();
      gsap.to(transition, {
        y: "-100%",
        duration: timing.transition,
        ease: "power2.inOut",
        onComplete: () => {
          window.location.href = href;
        },
      });
    });
  });
}
