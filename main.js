// fetch('http://ikasten.io:3000/https://aenui.org/actas/indice_e.html#arribaDelTodo').then(r => r.text()).then(r => document.write(r))
 //fetch('http://ikasten.io:3000/https://aenui.org/actas/indice_e.html').then(r => r.json()).then(r => console.log(r))
 fetch("http://ikasten.io:3000/https://aenui.org/actas/indice_e.html")
    .then(response => response.text())
    .then(r => {
        r=r.replace('(src=")', 'src="https://aenui.org/actas/')
        r=r.replace('href="','href="https://aenui.org/actas/')
        document.getElementsByTagName("html")[0].innerHTML=r
    })
let proba=document.getElementById("id_jenui_1997")
console.log(proba)