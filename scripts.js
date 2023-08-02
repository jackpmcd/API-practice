var request = new XMLHttpRequest()

request.open('GET', 'https://jsonplaceholder.typicode.com/jackpmcd/API-practice', true)

request.onload = function () {
    var data = JSON.parse(this.response)

    if (request.status >= 200 && request.status < 400){
        data.forEach((movie) => {
            console.log(movie.title)
        })
    } else{
        console.log('error')
    }
}

request.send()

