let apiKey = '644e346fcc3e1d1e8a4f0d54d4e5dfca'

fetch (`https://api.themoviedb.org/3/movie/${id_pelicula}?api_key=${apiKey}`)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        let info = data.results
        console.log(info)




    })
    .catch(function(error){
        console.log(error)
    })