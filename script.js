window.onload = function() {
    const resP = document.querySelector("#res");
    const button = document.querySelector("#button");

    const possibilities = ["'s first name comes first alphabetically",
        "'s last name comes first alphabetically",
        "'s first name comes last alphabetically",
        "'s last name comes last alphabetically",
        "most recently finished reading a book",
        "'s phone number has the lowest last digit",
        "'s phone number has the highest last digit",
        "'s phone number has the lowest first digit",
        "'s phone number has the highest first digit",
        "has the closest birthday to today",
        "stayed up the latest last night",
        "got up the earliest this morning",
        "has the longest hair",
        "has the shortest hair",
        "took the most recent photo",
        "watched a movie most recently",
        "watched the most TV last night",
        "listened to music most recently",
        "has the shortest pinky",
        "is the tallest",
        "is the shortest",
        "has more pets",
        "has fewer pets",
        "has more siblings",
        "has fewer siblings",
        "remembers the most dreams from last night",
        "wins Rock, Paper, Scissors right now",
        "has the longest name (first + last)",
        "has the shortest name (first + last)",
        "was born in the earlier month of the year",
        "was born in the later month of the year",
        "drank water most recently",
        "made their bed most recently",
        "started their homework the earliest yesterday",
        "started their homework the latest yesterday",
        "is carrying the most writing utensils"
    ];
    
    function newRes() {
        let random = Math.floor(Math.random() * possibilities.length);
        resP.innerText = "Whoever " + possibilities[random];
    }
    
    newRes()
    
    button.addEventListener('click', newRes);
}


