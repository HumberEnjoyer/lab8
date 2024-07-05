//event listener 
document.getElementById('getFoxBtn').addEventListener('click', fetchRandomFox);


//function to fetch a random fox image from the API

function fetchRandomFox() {
    //use fetch API to get data from the random fox API
    fetch('https://randomfox.ca/floof')
        //pass the JSON response
        .then(response => response.json()) 
        .then(data => {
            //get the image element by its ID
            const foxImage = document.getElementById('foxImage');
            //update the src attribute of the image element with the URL from the API response
            foxImage.src = data.image;
        })
}
