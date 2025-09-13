
let nombres = [];


function agregarAmigo() {
    let nombreIngresado = document.querySelector("#amigo");
    
    
    if (nombreIngresado.value == "") {
        alert("por favor, ingrese un nombre");    
    } else {
        document.querySelector("#listaAmigos").insertAdjacentHTML("beforeend", `<li class='list-item' role='listitem'>${nombreIngresado.value}</li>`);
        nombres.push(nombreIngresado.value);
        console.log(nombres);

        document.querySelector(".cantidad-numero").textContent = nombres.length;

    }

    nombreIngresado.value = "";


    return;

}

function sortearAmigo() {
    let nombreSorteado = document.querySelector(".result-list");
    
    if (nombres.length == 0) {
        alert("por favor, añada un nombre");
    } else {
        nombreSorteado.innerHTML = nombres[Math.floor(Math.random()*nombres.length)];

    }

    console.log(nombres);
    return console.log(Math.floor(Math.random()*nombres.length))


}


document.querySelector("#listaAmigos").addEventListener("click", function(e) {
    if (e.target && e.target.matches("li.list-item")) {
        e.target.remove();
        let ElementoNombres = e.target.textContent;
        let indexElementoNombres = nombres.indexOf(ElementoNombres);
        
        if (indexElementoNombres !== -1) { //verifica que exista el elemento en el array nombres
            nombres.splice(indexElementoNombres, 1); // Elimina el nombre del array
            console.log(nombres);
        }
        document.querySelector(".cantidad-numero").textContent = nombres.length;

    }
});