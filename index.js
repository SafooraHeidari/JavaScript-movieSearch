function Film(image, title, duration, description) {
    return {
        image,
        title,
        duration,
        description,
    };
}

function newCard(obj) {
    return `<div class = "movie-card">
            <img class = "movie-banner" src = ${obj.image}/>
            <h3 class = "movie-title">${obj.title}</h3>
            <h4 class = "movie-duration">${obj.duration}</h4>
            <p class = "movie-description">${obj.description}</p>
            </div>`
}

const album = document.getElementById('movies');

function addElement(obj) {
    const newDiv = document.createElement("div");
    newDiv.innerHTML = `${newCard(obj)}`;
    // newDiv.appendChild(`${newCard}`);
    album.appendChild(newDiv);
}

const filmArr = [];
filmArr.push(Film('images/avengers.jpg', 'Avengers: Endgame', '3HR 2MIN',
    'The Avengers must reunite and assemble again to reinvigorate their trounced allies and restore balance.'));
filmArr.push(Film('images/hobbs-and-shaw.jpg', 'Hobbs & shaw', '2HR 17MIN',
    'Hobbs & Shaw is a 2019 American action film directed by David Leitch and written by Chris Morgan.'));
filmArr.push(Film('images/John-Wick-3-1.jpg', 'John Wick 3', '2HR 34MIN',
    'John Wick is an American neo-noir action-thriller media franchise created by screenwriter Derek Kolstad.'));
filmArr.push(Film('images/deadpool-2-1.jpg', 'Deadpool 2', '2HR 7MIN',
    'Ajax, a twisted scientist, experiments on Wade Wilson, a mercenary, to cure him of cancer and give him healing powers.'));
filmArr.push(Film('images/TheLionKing.jpg', 'The lion King', '3HR 2MIN min',
    'As a cub, Simba is forced to leave the Pride Lands after his father Mufasa is murdered by his wicked uncle, Scar.'));
filmArr.push(Film('images/mad-max.jpg', 'Mad Max: Fury Road', '3HR 34MIN',
    'Mad Max: Fury Road is a 2015 Australian post-apocalyptic action film co-written, co-produced, and directed by George Miller.'));
filmArr.push(Film('images/aquaman.jpg', 'Aquaman', '120 min',
    'Half-human, half-Atlantean Arthur is born with the ability to communicate with marine creatures.'));
filmArr.push(Film('images/mission-impossible.jpg', 'Mission Impossible', '120 min',
    'Mission Impossible is a series of American action spy films based on the television series created by Bruce Geller.'));

for (let i = 0; i < filmArr.length; i++) {
    addElement(filmArr[i]);
}

function onSearch(element) {
    const query = element.value;
    const filteredCards = filmArr.filter(item => {
        return item.title.toLowerCase().includes(query)
    })
    console.log(filteredCards.length)
    album.innerHTML = '';
    for (let i = 0; i < filteredCards.length; i++) {
        addElement(filteredCards[i]);
    }

}