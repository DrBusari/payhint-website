/* =========================================================
   PAYHINT — INTERACTIVE 3D PORTFOLIO
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       LOADER
    ===================================================== */

    const loader = document.querySelector(".loader");

    window.addEventListener("load", () => {

        setTimeout(() => {
            loader.classList.add("hide");
        }, 700);

    });


    /* =====================================================
       YEAR
    ===================================================== */

    const year = document.getElementById("year");

    if (year) {
        year.textContent = new Date().getFullYear();
    }


    /* =====================================================
       MOBILE MENU
    ===================================================== */

    const menuToggle = document.getElementById("menuToggle");
    const nav = document.getElementById("nav");

    if (menuToggle) {

        menuToggle.addEventListener("click", () => {

            nav.classList.toggle("active");

            menuToggle.textContent =
                nav.classList.contains("active")
                ? "×"
                : "☰";

        });

    }


    /* =====================================================
       CLOSE MOBILE MENU
    ===================================================== */

    document.querySelectorAll("nav a").forEach(link => {

        link.addEventListener("click", () => {

            nav.classList.remove("active");

            if (menuToggle) {
                menuToggle.textContent = "☰";
            }

        });

    });


    /* =====================================================
       TYPING EFFECT
    ===================================================== */

    const typingText = document.getElementById("typingText");

    const words = [
        "Web Developer",
        "UI/UX Designer",
        "Roblox Developer",
        "Creative Designer",
        "Digital Creator"
    ];

    let wordIndex = 0;
    let charIndex = 0;
    let deleting = false;

    function typeEffect() {

        if (!typingText) return;

        const currentWord = words[wordIndex];

        if (!deleting) {

            typingText.textContent =
                currentWord.substring(0, charIndex + 1);

            charIndex++;

            if (charIndex === currentWord.length) {

                deleting = true;

                setTimeout(typeEffect, 1400);

                return;
            }

        } else {

            typingText.textContent =
                currentWord.substring(0, charIndex - 1);

            charIndex--;

            if (charIndex === 0) {

                deleting = false;

                wordIndex++;

                if (wordIndex >= words.length) {
                    wordIndex = 0;
                }

            }

        }

        setTimeout(
            typeEffect,
            deleting ? 55 : 90
        );

    }

    typeEffect();


    /* =====================================================
       SCROLL REVEAL
    ===================================================== */

    const revealElements =
        document.querySelectorAll(".reveal");

    const revealObserver =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("show");

                        revealObserver.unobserve(
                            entry.target
                        );

                    }

                });

            },
            {
                threshold: .12
            }
        );

    revealElements.forEach(element => {

        revealObserver.observe(element);

    });


    /* =====================================================
       SKILL BARS
    ===================================================== */

    const skillBars =
        document.querySelectorAll(".skill-track span");

    const skillObserver =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        const width =
                            entry.target.dataset.width;

                        entry.target.style.width = width;

                        skillObserver.unobserve(
                            entry.target
                        );

                    }

                });

            },
            {
                threshold: .5
            }
        );

    skillBars.forEach(bar => {

        skillObserver.observe(bar);

    });


    /* =====================================================
       3D HERO MOUSE MOVEMENT
    ===================================================== */

    const scene =
        document.querySelector(".sticker-scene");

    if (scene && window.innerWidth > 800) {

        scene.addEventListener(
            "mousemove",
            event => {

                const rect =
                    scene.getBoundingClientRect();

                const x =
                    event.clientX - rect.left;

                const y =
                    event.clientY - rect.top;

                const centerX =
                    rect.width / 2;

                const centerY =
                    rect.height / 2;

                const rotateY =
                    (x - centerX) / 35;

                const rotateX =
                    (centerY - y) / 35;

                scene.style.transform =
                    `rotateX(${rotateX}deg)
                     rotateY(${rotateY}deg)`;

            }
        );

        scene.addEventListener(
            "mouseleave",
            () => {

                scene.style.transform =
                    "rotateX(0deg) rotateY(0deg)";

            }
        );

    }


    /* =====================================================
       3D CARD TILT
    ===================================================== */

    const tiltCards =
        document.querySelectorAll(".tilt");

    if (window.innerWidth > 800) {

        tiltCards.forEach(card => {

            card.addEventListener(
                "mousemove",
                event => {

                    const rect =
                        card.getBoundingClientRect();

                    const x =
                        event.clientX - rect.left;

                    const y =
                        event.clientY - rect.top;

                    const centerX =
                        rect.width / 2;

                    const centerY =
                        rect.height / 2;

                    const rotateX =
                        (centerY - y) / 18;

                    const rotateY =
                        (x - centerX) / 18;

                    card.style.transform =
                        `perspective(800px)
                         rotateX(${rotateX}deg)
                         rotateY(${rotateY}deg)
                         translateY(-8px)`;

                }
            );

            card.addEventListener(
                "mouseleave",
                () => {

                    card.style.transform =
                        "";

                }
            );

        });

    }


    /* =====================================================
       ACTIVE NAVIGATION
    ===================================================== */

    const sections =
        document.querySelectorAll("section[id]");

    const navLinks =
        document.querySelectorAll("nav a");

    window.addEventListener(
        "scroll",
        () => {

            let current = "";

            sections.forEach(section => {

                const sectionTop =
                    section.offsetTop - 180;

                if (
                    window.scrollY >= sectionTop
                ) {
                    current =
                        section.getAttribute("id");
                }

            });

            navLinks.forEach(link => {

                link.classList.remove("active");

                if (
                    link.getAttribute("href") ===
                    `#${current}`
                ) {
                    link.classList.add("active");
                }

            });

        }
    );


    /* =====================================================
       BACK TO TOP
    ===================================================== */

    const backToTop =
        document.getElementById("backToTop");

    window.addEventListener(
        "scroll",
        () => {

            if (window.scrollY > 600) {

                backToTop.classList.add("show");

            } else {

                backToTop.classList.remove("show");

            }

        }
    );

    backToTop.addEventListener(
        "click",
        () => {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        }
    );


    /* =====================================================
       THEME TOGGLE
    ===================================================== */

    const themeToggle =
        document.getElementById("themeToggle");

    const savedTheme =
        localStorage.getItem("payhint-theme");

    if (savedTheme === "light") {

        document.body.classList.add("light-mode");

        themeToggle.textContent = "☀";

    }

    themeToggle.addEventListener(
        "click",
        () => {

            document.body.classList.toggle(
                "light-mode"
            );

            const isLight =
                document.body.classList.contains(
                    "light-mode"
                );

            themeToggle.textContent =
                isLight ? "☀" : "☾";

            localStorage.setItem(
                "payhint-theme",
                isLight ? "light" : "dark"
            );

        }
    );


    /* =====================================================
       BUTTON RIPPLE
    ===================================================== */

    document.querySelectorAll(".btn").forEach(button => {

        button.addEventListener(
            "click",
            event => {

                const ripple =
                    document.createElement("span");

                ripple.style.position = "absolute";
                ripple.style.width = "10px";
                ripple.style.height = "10px";
                ripple.style.borderRadius = "50%";
                ripple.style.background =
                    "rgba(255,255,255,.5)";
                ripple.style.pointerEvents = "none";

                const rect =
                    button.getBoundingClientRect();

                ripple.style.left =
                    `${event.clientX - rect.left}px`;

                ripple.style.top =
                    `${event.clientY - rect.top}px`;

                ripple.animate(
                    [
                        {
                            transform:
                                "translate(-50%,-50%) scale(1)",
                            opacity: 1
                        },
                        {
                            transform:
                                "translate(-50%,-50%) scale(25)",
                            opacity: 0
                        }
                    ],
                    {
                        duration: 650,
                        easing: "ease-out"
                    }
                );

                button.appendChild(ripple);

                setTimeout(
                    () => ripple.remove(),
                    700
                );

            }
        );

    });


    /* =====================================================
       PARALLAX 3D STICKERS
    ===================================================== */

    const stickers =
        document.querySelectorAll(
            ".floating-sticker, .tech-sticker"
        );

    window.addEventListener(
        "scroll",
        () => {

            const scroll =
                window.scrollY;

            stickers.forEach(
                (sticker, index) => {

                    if (window.innerWidth < 700)
                        return;

                    const amount =
                        Math.sin(
                            scroll * .002 + index
                        ) * 4;

                    sticker.style.marginTop =
                        `${amount}px`;

                }
            );

        },
        {
            passive: true
        }
    );


    /* =====================================================
       DISCORD
    ===================================================== */

    const discord =
        document.getElementById("discordContact");

    if (discord) {

        discord.addEventListener(
            "click",
            event => {

                event.preventDefault();

                alert(
                    "Discord: 1397361833035432098 / 1538578434849251419"
                );

            }
        );

    }


    /* =====================================================
       CONTACT FORM
    ===================================================== */

    const form =
        document.getElementById("contactForm");

    if (form) {

        form.addEventListener(
            "submit",
            () => {

                const button =
                    form.querySelector("button");

                button.textContent =
                    "Sending...";

            }
        );

    }


    /* =====================================================
       CURSOR LIGHT
    ===================================================== */

    const cursorLight =
        document.createElement("div");

    cursorLight.style.position = "fixed";
    cursorLight.style.width = "220px";
    cursorLight.style.height = "220px";
    cursorLight.style.borderRadius = "50%";
    cursorLight.style.pointerEvents = "none";
    cursorLight.style.zIndex = "-2";
    cursorLight.style.background =
        "radial-gradient(circle, rgba(0,183,255,.09), transparent 70%)";
    cursorLight.style.transform =
        "translate(-50%,-50%)";

    document.body.appendChild(cursorLight);

    document.addEventListener(
        "mousemove",
        event => {

            cursorLight.style.left =
                `${event.clientX}px`;

            cursorLight.style.top =
                `${event.clientY}px`;

        }
    );

});