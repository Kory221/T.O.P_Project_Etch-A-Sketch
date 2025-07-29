const container = document.getElementById("container");

for (let i = 1; i <= 256; i++) {
    const div = document.createElement("div");
    container.appendChild(div);
    div.classList.add(i);
};

const grid = document.querySelectorAll("#container div");

grid.forEach((div) => {
    div.addEventListener("mouseenter", () => {
        div.style.background = "black";
    });
}) ;