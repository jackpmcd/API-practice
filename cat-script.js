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
    let catResponse = document.getElementById('catResponse');

    let image = document.createElement('img');
    image.src = imageData.url; 

    let imageInfo = document.createElement('p');
    imageInfo.textContent = "The cat's ID - " + imageData.id;
    
    catResponse.appendChild(imageInfo);
    catResponse.appendChild(image)
    
    console.log(imageData.id);
})
.catch(error => {
    console.error('Fetch error:', error);
});
