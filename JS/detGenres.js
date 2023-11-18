let apiKey = '644e346fcc3e1d1e8a4f0d54d4e5dfca'
let queryString = location.search
let queryStringObject = new URLSearchParams(queryString)
let id = queryStringObject.get('id') 
let nombre = queryStringObject.get('nombre')
let tipo = queryStringObject.get('tipo')

console.log(id)
console.log(nombre)
console.log(tipo);


if(tipo=="Pelicula"){
    fetch (`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=es&page=1&sort_by=popularity.desc&with_genres=${id}&api_key=${apiKey}`)
        .then(function(response){
            return response.json();
        })
        .then(function(data){
            let info = data.results
            let pelisP = document.querySelector('.favoritosOrganizado')
            for( let i = 0 ; i<5; i++){
                pelisP.innerHTML += `<div class="peliculasDetalle">
                <a link href="peliculas.html?id=${info[i].id}"><img src=https://image.tmdb.org/t/p/w500/${info[i].poster_path} class="posterPelis"></a>
                <h2>${info[i].title}</h2>
                <h2>${info[i].release_date}</h2>
                <a href="peliculas.html?id=${info[i].id}" class="linkPaginas">Más Información</a>
                </div></article>`
            }
        })
    .catch(function(error){
        console.log(error);
    })
}
else if(tipo=="Serie"){
    fetch(`https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=es&page=1&sort_by=popularity.desc&with_genres=${id}&api_key=${apiKey}`)
        .then(function(response){
            return response.json();
        })
        .then(function(data){
            let info = data.results
            let seriesP = document.querySelector('.favoritosOrganizado')
            for( let i = 0 ; i<5; i++){
                seriesP.innerHTML += `<div class="seriesDetalle">
                <a link href="series.html?id=${info[i].id}"><img src=https://image.tmdb.org/t/p/w500/${info[i].  poster_path} class="posterPelis"></a>
                <h2 class="titu">${info[i].name}</h2>
                <h2>${info[i].first_air_date}</h2>
                <a href="series.html?id=${info[i].id}" class="linkPaginas">Más Información</a>
            </div>`
            }
    })
}