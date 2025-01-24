window.onload = function() {
    const resP = document.querySelector("#res");
    const button = document.querySelector("#button");

    const possibilities = ["'s first name comes first alphabetically",
        "'s last name comes first alphabetically",
        "'s first name comes last alphabetically",
        "'s last name comes last alphabetically",
        "has the most letters in their name",
        "most recently finished reading a book",
        "'s phone number has the lowest last digit",
        "'s phone number has the highest last digit",
        "'s phone number has the lowest first digit",
        "'s phone number has the highest first digit",
        "has the most number of buttons on their clothing",
        "has the least number of buttons on their clothing",
        "has the closest birthday to today",
        // "has the smallest street address number",
        // "has the highest street address number",
        "stayed up the latest last night",
        "has the most pockets",
        "has the longest hair",
        "took the most recent photo",
        "watched a movie most recently",
        "watched the most TV last night",
        "can name the most song titles with 'love' in them",
        "listened to music most recently",
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
    
    newRes()
    
    button.addEventListener('click', newRes);
}


