
const menu = document.querySelector(".menu");

const respicon = document.querySelector(".resp-icon");

respicon.addEventListener("click", function() {
    menu.classList.toggle("active");
    document.addEventListener("click", function (e) {
        if (!e.composedPath().includes(respicon) &&
            !e.composedPath().includes(menu)
            ) {
                menu.classList.remove("active");
            }
    });
});