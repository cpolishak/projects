let url = 'https://api.lyrics.ovh/v1';


function findLyrics() {
    let artist = document.getElementById('artist').value;
    let title = document.getElementById('title').value;

    fetch(`${url}/${artist}/${title}`) //could also use concatonation like so: fetch(url + '/' + artist + '/' + title)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            let lyrics = data.lyrics;
            lyrics = data.lyrics.replace(/\n/gi, '<br>');
            document.getElementById('displayLyrics').innerHTML = lyrics;
        })
        .catch(function(error) {
            document.getElementById('displayLyrics').innerHTML = `No lyrics found. Try again.`;
        });
};