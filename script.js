// Preloader logika
        window.addEventListener("load", () => {
            const preloader = document.getElementById("preloader");
            const mainContent = document.querySelector("main");

            // plusz 1 másodperc várakozás a betöltés után
            setTimeout(() => {
                preloader.classList.add("hide");
                mainContent.classList.add("show");
                document.body.style.overflow = "auto";
            }, 1000);
        });
