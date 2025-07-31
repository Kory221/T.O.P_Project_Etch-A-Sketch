const container = document.getElementById("container");


const btn = document.querySelector("button");
btn.addEventListener("click",() => {
    let oldDivs = document.querySelectorAll("#container div");
    oldDivs.forEach((oldDiv) => {
        container.removeChild(oldDiv);
    })
    
    let squares = prompt("how many squares per side? (Max 100)");
     
    if (squares > 100 || squares <= 0) {
        squares = 0;
        alert ("please choose a number between 1 and 100 (inclued)")
    }
    
    for (let i = 1; i <= squares*squares; i++) {
        const div = document.createElement("div");
        container.appendChild(div);
        div.classList.add(i);

        let calc = 1/squares*100;
        let percent = calc + "%";
        div.style.width = percent;
        div.style.height = percent;
    };


const grid = document.querySelectorAll("#container div");

grid.forEach((div) => {
    div.addEventListener("mouseenter", () => {
        div.style.background = "black";
    });
}) ;
})
