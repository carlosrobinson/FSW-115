const myList = 
 [
        {
            "category": "Entertainment: Video Games",
            "type": "multiple",
            "difficulty": "medium",
            "question": "Who was the mascot of SEGA before &quot;Sonic the Hedgehog&quot;?",
            "correct_answer": "Alex Kidd",
            "incorrect_answers": [
                "Opa Opa",
                "NiGHTS",
                "Ristar"
            ]
        },
        {
            "category": "Geography",
            "type": "multiple",
            "difficulty": "medium",
            "question": "Which of the following countries banned the use of personal genetic ancestry tests?",
            "correct_answer": "Germany",
            "incorrect_answers": [
                "Austria",
                "Canada",
                "Sweden"
            ]
        },
        {
            "category": "Entertainment: Japanese Anime & Manga",
            "type": "multiple",
            "difficulty": "medium",
            "question": "Which band name isn&#039;t a Stand in &quot;JoJo&#039;s Bizzare Adventure&quot;?",
            "correct_answer": "AC/DC",
            "incorrect_answers": [
                "Green Day",
                "Survivor",
                "Red Hot Chili Peppers"
            ]
        },
        {
            "category": "Entertainment: Comics",
            "type": "multiple",
            "difficulty": "medium",
            "question": "In Calvin and Hobbes, what is the name of Susie&#039;s stuffed rabbit?",
            "correct_answer": "Mr. Bun",
            "incorrect_answers": [
                "Mr. Bunbun",
                "Mr. Rabbit",
                "Mr. Hoppy"
            ]
        },
        {
            "category": "Entertainment: Video Games",
            "type": "multiple",
            "difficulty": "medium",
            "question": "In the &quot;S.T.A.L.K.E.R.&quot; series, which of these items can&#039;t be used to lower the player&#039;s accumulated radiation?",
            "correct_answer": "Radioprotectant",
            "incorrect_answers": [
                "Anti-rad",
                "Medkit",
                "Vodka"
            ]
        }
    ]


    function myApiOutput(triva) {
        return `
        <div>
            <h4 id = "my-Category">
                ${triva.category}
            </h4>
            <ul id = "my-output">
                <li>
                    Type: ${triva.type}
                </li>
                <li>
                    Difficulty: ${triva.difficulty}
                </li>
                <li>
                    ${triva.question}
                </li>
                <li>
                    Correct Answer: ${triva.correct_answer}
                </li>
                <li>
                    Incorrect Answers: ${triva.incorrect_answers}
                </li>
            <ul/>

        </div>
        `
    }
document.getElementById("list").innerHTML = `<h3 class = "app-Title">Triva (${myList.length} results) <h3/>
${myList.map(myApiOutput).join('')}
`
 