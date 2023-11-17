let apiKey = '644e346fcc3e1d1e8a4f0d54d4e5dfca'

fetch (`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        let info = data.results
        let pelisP = document.querySelector('.matirulo')
        for( let i = 0 ; i<5; i++){
            pelisP.innerHTML += `<div class="peliculasDetalle">
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


    fetch (`https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}`)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        let info = data.results
        let seriesP = document.querySelector('.seriesPop')
        for( let i = 0 ; i<5; i++){
            seriesP.innerHTML += `<div class="seriesDetalle">
            <a link href="series.html?id=${info[i].id}"><img src=https://image.tmdb.org/t/p/w500/${info[i].poster_path} class="posterPelis"></a>
            <h2 class="titu">${info[i].name}</h2>
            <h2>${info[i].first_air_date}</h2>
            <a href="series.html?id=${info[i].id}" class="linkPaginas">Más Información</a>
        </div>`
        }
    })
    .catch(function(error){
        console.log(error)
    })


fetch (`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`)
        .then(function(response){
        return response.json()
    })
    .then(function(data){
        let info = data.results
        console.log(info)
        let mejorRate = document.querySelector('.mejorRate')
        for( let i = 0 ; i<5; i++){
            mejorRate.innerHTML += `<div class="favoritosPelis bestRate">
            <a link href="series.html?id=${info[i].id}"><img src=https://image.tmdb.org/t/p/w500/${info[i].poster_path} class="posterPelis"></a>
            <h2>${info[i].title}</h2>
            <h2>${info[i].release_date}</h2>
            <a href="series.html?id=${info[i].id}" class="linkPaginas">Más Información</a>
        </div>`
        }
    })
    .catch(function(error){
        console.log(error)
    })

