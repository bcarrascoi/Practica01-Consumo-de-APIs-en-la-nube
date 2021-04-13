var datosepisodio = [];

function cargarDatos(){
    let res = document.querySelector('#tablaEpisodioDetalle');
    res.innerHTML = '';
    for(let item of Object.values(datosepisodio)){
        console.log(Object.values(item));
        
        for(var i=0; i < item.length; i++){
            res.innerHTML +=
            `<tr class="row justify-content-center">
                <td class="col text-center">${item[i].name}</td>
                <td class="col text-center">${item[i].air_date}</td>
                <td class="col text-center">${item[i].episode}</td>
                <td class="col text-center">${item[i].url}</td>
                <td class="col text-center">${item[i].created}</td>
                </tr>
            `
        }
    }
}

function buscar(event){
    if(event.key == 'Enter'){
        let datosepisodio = document.querySelector('#txtapp');
        let episodio ="";
        let html = document.querySelector('#tablaEpisodioDetalle');
        if(datosepisodio.length <=episodio.length && datosepisodio.length !=0 && episodio.length !=0){
            if(datosepisodio.toLowerCase() == name.toLowerCase() ){
                var n = document.createElement("LI");
                var txtn= document.createTextNode(datosepisodio[episodio]);
                n.appendChild(txtn);
                document.getElementById("demo").appendChild(n);
            }else {
                alert ('error')
            }
        }
    }
}
function cargarDatosEpisodio(){
    var url = 'https://rickandmortyapi.com/api/episode';
    var APi = new XMLHttpRequest();
    APi.open('GET', url, true);
    APi.send();
    APi.onreadystatechange = function(){
        if (this.status == 200 && this.readyState ==4){
            datosepisodio = JSON.parse(this.responseText);
        }
    }
}

