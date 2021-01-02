var myApi = {
    results:
    
[
 
        {
            "category": "Geography",
            "type": "boolean",
            "difficulty": "easy",
            "question": "Greenland is covered with grass and Iceland covered with ice.",
            "correct_answer": "False",
            "incorrect_answers": [
                "True"
            ]
        },
        {
            "category": "Entertainment: Music",
            "type": "multiple",
            "difficulty": "hard",
            "question": "Which of the following is NOT a real song from the band Thousand Foot Krutch?",
            "correct_answer": "Limitless Fury",
            "incorrect_answers": [
                "Let The Sparks Fly",
                "Down",
                "Give Up The Ghost"
            ]
        },
        {
            "category": "Geography",
            "type": "multiple",
            "difficulty": "medium",
            "question": "What tiny principality lies between Spain and France?",
            "correct_answer": "Andorra",
            "incorrect_answers": [
                "Liechtenstein",
                "Monaco",
                "San Marino"
            ]
        },
        {
            "category": "Science: Computers",
            "type": "multiple",
            "difficulty": "medium",
            "question": "In programming, the ternary operator is mostly defined with what symbol(s)?",
            "correct_answer": "?:",
            "incorrect_answers": [
                "??",
                "if then",
                "?"
            ]
        },
        {
            "category": "Geography",
            "type": "multiple",
            "difficulty": "hard",
            "question": "The emblem on the flag of the Republic of Tajikistan features a sunrise over mountains below what symbol?",
            "correct_answer": "Crown",
            "incorrect_answers": [
                "Bird",
                "Sickle",
                "Tree"
            ]
        }
    ]
}
var myDiv = document.getElementById("my-root")
var newApi = []
for(i = 0; i < myApi.results.length; i++) {
    newApi.push(myApi.results[i])
    
}

 document.getElementById("my-pag").innerHTML = JSON.stringify(newApi)





