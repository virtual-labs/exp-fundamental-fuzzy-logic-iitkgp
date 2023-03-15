var quizJSON = {
    "info": {
        "name": "Test Your Knowledge!!",
        "main": "<p>Think you're smart enough to be on Jeopardy? Find out with this super crazy knowledge quiz!</p>",
        "results": "<p>Learn More.</p>",
        "level1": "Jeopardy Ready",
        "level2": "Jeopardy Contender",
        "level3": "Jeopardy Amateur",
        "level4": "Jeopardy Newb",
        "level5": "Stay in school, kid..." // no comma here
    },
	"questions": [
        {// Question 4
            "q": "Given A= {-3, 2, 4} B = {-1, 0, 6}.Then ( A &plus; B ) will be?",
            "a": [
                {"option": "{-2, 0, 4}", "correct": false},
                {"option": "{-4, 2, 10}", "correct": true},
                {"option": "{-4, 0, 2}", "correct": false},
                {"option": "{2, 2, 4}", "correct": false} // no comma here
            ],
            "correct": "",
            "incorrect": "" // no comma here
        },
        {// Question 4
            "q": "Given A= {1, 2, -4} B = {2, -4, 6}.Then ( A &minus; B ) will be?",
            "a": [
                {"option": "{-5, 6, -6}", "correct": true},
                {"option": "{-1, 6, -10}", "correct": false},
                {"option": "{1, -2, 2}", "correct": false},
                {"option": "{-5, -6, 2}", "correct": false} // no comma here
            ],
            "correct": "",
            "incorrect": "" // no comma here
        },
    
        {// Question 1 - Multiple Choice, Single True Answer
            "q": "If A and B are two fuzzy sets with membership functions A(x) = {0.6, 0.5, 0.1, 0.7, 0.8} B(x) = {0.9, 0.2, 0.6, 0.8, 0.5}.Then the value of  Complement A &cup; B(x) will be? ",
            "a": [
                {"option": "{0.9, 0.5, 0.6, 0.8, 0.8} ", "correct": false},
                {"option": "{0.6, 0.2, 0.1, 0.7, 0.5} ", "correct": false},
                {"option": "{0.1, 0.5, 0.4, 0.2, 0.2} ", "correct": true},
                {"option": "{0.1,0.5,0.4,0.2,0.3} ", "correct": false} // no comma here
            ],
            "correct": "",
            "incorrect": "" // no comma here
        },
        {// Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "Given U = {1, 2, 3, 4, 5, 6, 7} A = {(3, 0.7), (5, 1), (6, 0.8)} then &sim; A will be : (where &sim; &rarr;complement)",
            "a": [
                {"option": "{(4, 0.7), (2, 1), (1, 0.8)}", "correct": false},
                {"option": "{(4, 0.3), (5, 0), (6, 0.2)}", "correct": false},
                {"option": "{(1, 1), (2, 1), (3, 0.3), (4, 1), (6, 0.2), (7, 1)}", "correct": true},
                {"option": "{(3, 0.3), (6.0.2)} ", "correct":false } // no comma here
            ],
            "correct": "",
            "incorrect": "" // no comma here
        },
        {// Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "If A and B are two fuzzy sets with membership functions &mu;A(x) = {0.2, 0.5, 0.6, 0.1, 0.9} &mu;B(x) = {0.1, 0.5, 0.2, 0.7, 0.8} Then the value of &mu; A &cup; B?",
            "a": [
                {"option": "{0.2, 0.5, 0.6, 0.7, 0.9}", "correct": false},
                {"option": "{0.2, 0.5, 0.2, 0.1, 0.8}", "correct": false},
                {"option": "{0.1, 0.5, 0.6, 0.1, 0.8}", "correct":false},
                {"option": "{0.1, 0.5, 0.2, 0.1, 0.8}", "correct": true} // no comma here
            ],
            "correct": "",
            "incorrect": "" // no comma here
        }
    ]
};// JavaScript Document