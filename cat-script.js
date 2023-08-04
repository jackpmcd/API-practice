// script.js

const apiUrl = 'https://api.thecatapi.com/v1/images/search';
const apiKey = 'live_ycr3p4vgOGp2dXKBfFQ6lfTIW1H1JgUQ85KqkErQKvaRHYCcSYjjxaIQxtilYldT';

const headers = new Headers();
headers.append('Authorization', `Bearer ${apiKey}`);

fetch(apiUrl, {
    method: 'GET',
    headers: headers
})
.then(response => {
    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
})
.then(data => {
    let imageData = data[0];
    let apiResponse = document.getElementById('apiResponse');

    let image = document.createElement('img');
    image.src = imageData.url; 

    apiResponse.appendChild(image);
    console.log(imageData.url);
})
.catch(error => {
    console.error('Fetch error:', error);
});
