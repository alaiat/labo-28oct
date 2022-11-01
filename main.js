 fetch("http://ikasten.io:3000/https://aenui.org/actas/indice_e.html")
    .then(response => response.text())
    .then(r => {
        r=r.replace('(src=")', 'src="https://aenui.org/actas/')
        r=r.replace('href="','href="https://aenui.org/actas/')
        document.getElementsByTagName("html")[0].innerHTML=r

        document.querySelectorAll(".portada img")
        .forEach(img => img.remove());

        var link = document.createElement('link');
        link.href = "https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css"
        link.rel = "stylesheet"
        link.integrity = "sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi"
        link.crossOrigin = "anonymous"
        var elemDiv = document.createElement('div');
        elemDiv.className = "container-fluid text-center"
        //document.body.appendChild(elemDiv)
        //let elements = []
        //elements = document.body.getElementsByTagName("*");
        let elements = document.body.childNodes
        //console.log(document.body.getElementsByClassName("container fluid text-center")[0])
        for (let e of elements) {
            document.body.removeChild(e)
            //document.body.getElementsByClassName("container fluid text-center")[0].appendChild(e)
            elemDiv.appendChild(e)
        }
        document.head.appendChild(link)
        document.body.appendChild(elemDiv)
        console.log(document.body)
    })
/*let proba=document.getElementById("id_jenui_1997")
console.log(proba)*/