let apiKey = '644e346fcc3e1d1e8a4f0d54d4e5dfca'

let queryString = location.search
let queryStringObject = new URLSearchParams(queryString)
let busqueda = queryStringObject.get('buscar')
let pelibuscada = document.querySelector(".pelibuscada")

fetch (`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${busqueda}`)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        let info = data.results
        for(let i = 0; i <info.length; i++){
            pelibuscada.innerHTML += `<div class="favoritosPelis">
            <a link href="peliculas.html?id=${info[i].id}"><img src=https://image.tmdb.org/t/p/w500/${info[i].poster_path} class="posterPelis"></a>
            <h2>${info[i].title}</h2>
            <h2>${info[i].release_date}</h2>
            <a href="peliculas.html?id=${info[i].id}" class="linkPaginas">Más Información</a>
            </div>`
        }



    })
    .catch(function(error){
    console.log(error)
    })



    
    