const container = document.getElementById("container");


const btn = document.querySelector("button");
btn.addEventListener("click",() => {
    let oldDivs = document.querySelectorAll("#container div");
    oldDivs.forEach((oldDiv) => {
        container.removeChild(oldDiv);
    })
    
    let squares = prompt("how many squares per side? (Max 100)");
        
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


// Prochaine recherche : comment limiter le prompt input à 100?
// et faire flex les petis carrés à l'intérieur (en hauteur et largeur).
// !!! quand je clique une 2e fois sur creer grille et je mets numero,
//ça crèe une grille en bas au lieu de le faire dans le container