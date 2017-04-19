
var parrafo = document.createElement("h2");
parrafo.innerText = "Nuestras Coders";
document.body.appendChild(parrafo);

var hr = document.createElement("div");
hr.setAttribute("id", "hr");
hr.style.height = "4px";
hr.style.width = "75px";
hr.style.background = "black";
document.body.appendChild(hr);

var div = [];
var imagen = [];
var span = [];
    for(var i=1; i <= 6; i++){

        div[i] = document.createElement("div");
        imagen[i] = document.createElement("img");
        imagen[i].setAttribute("src", "assets/img/"+i+".png");

        span[i] = document.createElement("span");
        span[i].setAttribute("color", "white");

        document.body.appendChild(div[i]);
        div[i].appendChild(imagen[i]);
        div[i].appendChild(span[i]);
    }

span[1].innerText = "Flor de Cantuta Tello";
span[2].innerText = "Naomi Villanueva";
span[3].innerText = "Miriam Peralta";
span[4].innerText = "Karin Alejo";
span[5].innerText = "Liliana Peña";
span[6].innerText = "Ruth Salvador";
