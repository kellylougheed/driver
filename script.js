window.onload = function() {
    const resP = document.querySelector("#res");
    const button = document.querySelector("#button");

    const possibilities = ["has a first name that begins with a letter closest to the beginning of the alphabet",
        "has a last name that begins with a letter closest to the beginning of the alphabet",
        "has a first name that begins with a letter closest to the end of the alphabet",
        "has a last name that begins with a letter closest to the end of the alphabet",
        "has the most letters in their name",
        "most recently finished reading a book",
        "subscribes to more magazines",
        "has a phone number with the lowest last digit",
        "has a phone number with the highest last digit",
        "has a phone number with the lowest first digit",
        "has a phone number with the highest first digit",
        "has the most number of buttons on their clothing",
        "has the least number of buttons on their clothing",
        "has the closest birthday to today",
        "has the smallest street address number",
        "has the highest street address number",
        "stayed up the latest last night",
        "traveled farthest to get here",
        "takes more buses/trains in their commute",
        "has the most pockets",
        "has the longest hair",
        "took the most recent photo",
        "went to the movies most recently",
        "went to a museum most recently",
        "watched the most TV last night",
        "can name the most song titles with 'love' in them",
        "listened to museum most recently",
        "has the shortest pinky",
        "is the tallest",
        "is the shortest",
        "has more pets",
        "has fewer pets",
        "has more siblings",
        "has fewer siblings",
        "remembers the most dreams from last night",
        "wins Rock, Paper, Scissors right now"
    ];
    
    function newRes() {
        let random = Math.floor(Math.random() * possibilities.length);
        resP.innerText = "Whoever " + possibilities[random];
    }
    
    newRes();
    
    button.addEventListener('click', newRes);
}


