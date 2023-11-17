let apiKey = '644e346fcc3e1d1e8a4f0d54d4e5dfca'

fetch (`https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`)
    .then(function(response){
    return response.json()
    })
    .then(function(data){
        let info = data.genres
        let generos = document.querySelector('.generosPadre')
        for( let i = 0 ; i<info.length; i++){
            generos.innerHTML += `<div class="generosPadre">
            <a class="generosHijo" href="details-genres.html">${info[i].name}</a>
        </div>`
        }
    })
    .catch(function(error){
        console.log(error)
    })


fetch (`https://api.themoviedb.org/3/genre/tv/list?api_key=${apiKey}`)
    .then(function(response){
    return response.json()
    })
    .then(function(data){
        let info = data.genres
        console.log(info)
        let generos = document.querySelector('.GeSeries')
        for( let i = 0 ; i<info.length; i++){
            generos.innerHTML += `<div class="generosPadre">
            <a class="generosHijo" href="details-genres.html">${info[i].name}</a>
        </div>`
        }
    })
    .catch(function(error){
        console.log(error)
    })