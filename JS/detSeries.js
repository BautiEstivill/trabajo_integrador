let apiKey = '644e346fcc3e1d1e8a4f0d54d4e5dfca'
let queryStringObject = new URLSearchParams(location.search);
let busqueda = queryStringObject.get('id');


fetch (`https://api.themoviedb.org/3/tv/${busqueda}?api_key=${apiKey}`)


    .then(function(response){
        return response.json()
    })
    .then(function (data) {
        console.log(data);


        let elementoSeries = document.querySelector('.seriesDetalle')
        let urlImagen = 'https://image.tmdb.org/t/p/w342/'
        elementoSeries.innerHTML += `<section class="seriesDetalle">
                                <h2>${data.original_name}</h2>
                                <p>Estreno: ${data.last_air_date}  |  ${data.number_of_episodes} episodios | genero: ${data.genres[0]["name"]} y ${data.genres[1]["name"]}  </p>
                                <div class="foto_trailer">
                                    <img src="${urlImagen + data.poster_path}" width="300px" height ='520px'>
                                   
                                </div>
                                <div class="generos"></div>
                                <p>${data.overview}</p>
                                <p>Calificacion: ${data.vote_average}</p>
                            </section>`
       






    })
    .catch(function(error){
        console.log(error)
    })



