const container = document.getElementById("container");


const btn = document.querySelector("button");
btn.addEventListener("click",() => {
    let squares = prompt("how many squares per side?");
    for (let i = 1; i <= squares*squares; i++) {
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
})

