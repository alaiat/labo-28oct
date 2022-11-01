 fetch("http://ikasten.io:3000/https://aenui.org/actas/indice_e.html")
    .then(response => response.text())
    .then(r => {
        r=r.replace('(src=")', 'src="https://aenui.org/actas/')
        r=r.replace('href="','href="https://aenui.org/actas/')
        document.getElementsByTagName("html")[0].innerHTML=r

        document.querySelectorAll(".portada img")
        .forEach(img => img.remove());

        var elemDiv = document.createElement('div');
        elemDiv.className = "container fluid text-center"
        document.body.appendChild(elemDiv)
        let elements = []
        elements = document.body.getElementsByTagName("*");
        console.log(document.body.getElementsByClassName("container fluid text-center")[0])
        for (let e of elements) {
            document.body.removeChild(e)
            document.body.getElementsByClassName("container fluid text-center")[0].appendChild(e)
        }
        console.log(document.body)
    })
/*let proba=document.getElementById("id_jenui_1997")
console.log(proba)*/