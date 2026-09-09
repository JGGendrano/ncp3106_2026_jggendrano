document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll("a[href]");

    links.forEach(link => {
        const href = link.getAttribute("href");

        // Ignore hash links (#), external links, modal triggers, or new tab links
        if (
            !href || 
            href.startsWith("#") || 
            href.startsWith("http") || 
            link.getAttribute("target") === "_blank" || 
            link.getAttribute("data-bs-toggle")
        ) {
            return;
        }

        link.addEventListener("click", (e) => {
            e.preventDefault();

            // Trigger the exit CSS animation
            document.body.classList.add("page-exit");

            // Navigate after 200ms animation finishes
            setTimeout(() => {
                window.location.href = href;
            }, 200);
        });
    });
});

// Reset page visibility when returning via browser back/forward buttons
window.addEventListener("pageshow", (event) => {
    document.body.classList.remove("page-exit");
});