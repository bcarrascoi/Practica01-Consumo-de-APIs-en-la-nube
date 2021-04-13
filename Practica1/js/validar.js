var datosepisodio = [];

function cargarDatos(){
    let res = document.querySelector('#tablaEpisodioDetalle');
    res.innerHTML = '';
    aux=0;

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
        html.innerHTML = '';
        for(var item of Object.values(datosepisodio)){
            console.log(Object.values(item));

            for(var i=0; i<item.length; i++){
                episodio = item [i].name;
                
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

