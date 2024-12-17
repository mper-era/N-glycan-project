document.getElementById("open1").addEventListener("click", () => {
    document.getElementById("cont1").scrollTop = 0; // Set popup element's scroll bar to the top
    document.getElementById("cont1").classList.add("open"); // Open popup element
})

document.getElementById("open2").addEventListener("click", () => {
    document.getElementById("cont2").scrollTop = 0;
    document.getElementById("cont2").classList.add("open");
})

document.getElementById("open3").addEventListener("click", () => {
    document.getElementById("cont3").scrollTop = 0;
    document.getElementById("cont3").classList.add("open");
})

document.getElementById("open4").addEventListener("click", () => {
    document.getElementById("cont4").scrollTop = 0;
    document.getElementById("cont4").classList.add("open");
})

document.getElementById("open5").addEventListener("click", () => {
    document.getElementById("cont5").scrollTop = 0;
    document.getElementById("cont5").classList.add("open");
})

document.getElementById("open6").addEventListener("click", () => {
    document.getElementById("cont6").scrollTop = 0;
    document.getElementById("cont6").classList.add("open");
})

document.getElementById("close1").addEventListener("click", () => {
    document.getElementById("cont1").classList.remove("open"); // Close popup element
})

document.getElementById("close2").addEventListener("click", () => {
    document.getElementById("cont2").classList.remove("open");
})

document.getElementById("close3").addEventListener("click", () => {
    document.getElementById("cont3").classList.remove("open");
})

document.getElementById("close4").addEventListener("click", () => {
    document.getElementById("cont4").classList.remove("open");
})

document.getElementById("close5").addEventListener("click", () => {
    document.getElementById("cont5").classList.remove("open");
})

document.getElementById("close6").addEventListener("click", () => {
    document.getElementById("cont6").classList.remove("open");
})