// Local Indian trivia questions
let questions = [
    {
        question: "Who is known as the 'Father of the Nation' in India?",
        correct_answer: "Mahatma Gandhi",
        incorrect_answers: ["Jawaharlal Nehru", "Subhash Chandra Bose", "Dr. B. R. Ambedkar"]
    },
    {
        question: "Which is the largest state in India by area?",
        correct_answer: "Rajasthan",
        incorrect_answers: ["Madhya Pradesh", "Uttar Pradesh", "Maharashtra"]
    },
    {
        question: "Who wrote the Indian National Anthem?",
        correct_answer: "Rabindranath Tagore",
        incorrect_answers: ["Bankim Chandra Chatterjee", "Sarojini Naidu", "Mahatma Gandhi"]
    },
    {
        question: "Which Indian city is also known as the Silicon Valley of India?",
        correct_answer: "Bengaluru",
        incorrect_answers: ["Mumbai", "Hyderabad", "Chennai"]
    },
    {
        question: "What is the currency of India?",
        correct_answer: "Indian Rupee",
        incorrect_answers: ["Dollar", "Euro", "Yen"]
    },
    {
        question: "Which river is the longest in India?",
        correct_answer: "Ganga",
        incorrect_answers: ["Yamuna", "Godavari", "Krishna"]
    },
    {
        question: "Who was the first Prime Minister of India?",
        correct_answer: "Jawaharlal Nehru",
        incorrect_answers: ["Mahatma Gandhi", "Lal Bahadur Shastri", "Sardar Vallabhbhai Patel"]
    },
    {
        question: "What is the capital of Arunachal Pradesh?",
        correct_answer: "Itanagar",
        incorrect_answers: ["Dispur", "Imphal", "Aizawl"]
    },
    {
        question: "What is the national animal of India?",
        correct_answer: "Tiger",
        incorrect_answers: ["Lion", "Elephant", "Peacock"]
    },
    {
        question: "Which Indian state is known as the 'Land of Five Rivers'?",
        correct_answer: "Punjab",
        incorrect_answers: ["Haryana", "Uttar Pradesh", "Himachal Pradesh"]
    },
    {
        question: "Which dance form is native to Kerala?",
        correct_answer: "Kathakali",
        incorrect_answers: ["Bharatanatyam", "Odissi", "Kuchipudi"]
    },
    {
        question: "What is the national fruit of India?",
        correct_answer: "Mango",
        incorrect_answers: ["Banana", "Apple", "Orange"]
    },
    {
        question: "Which festival is known as the 'Festival of Lights' in India?",
        correct_answer: "Diwali",
        incorrect_answers: ["Holi", "Eid", "Navratri"]
    },
    {
        question: "Which Mughal emperor built the Taj Mahal?",
        correct_answer: "Shah Jahan",
        incorrect_answers: ["Akbar", "Babur", "Aurangzeb"]
    },
    {
        question: "What is the primary language spoken in Tamil Nadu?",
        correct_answer: "Tamil",
        incorrect_answers: ["Telugu", "Kannada", "Malayalam"]
    },
    {
        question: "In which year did India gain independence?",
        correct_answer: "1947",
        incorrect_answers: ["1945", "1950", "1952"]
    },
    {
        question: "Which Indian state is famous for its tea gardens?",
        correct_answer: "Assam",
        incorrect_answers: ["West Bengal", "Kerala", "Sikkim"]
    },
    {
        question: "What is the national flower of India?",
        correct_answer: "Lotus",
        incorrect_answers: ["Rose", "Marigold", "Hibiscus"]
    },
    {
        question: "Which Indian sportsperson is known as the 'Flying Sikh'?",
        correct_answer: "Milkha Singh",
        incorrect_answers: ["Kapil Dev", "Sachin Tendulkar", "P. T. Usha"]
    },
    {
        question: "Which Indian city is also known as the 'Pink City'?",
        correct_answer: "Jaipur",
        incorrect_answers: ["Jodhpur", "Udaipur", "Agra"]
    },
    {
        question: "What is the national bird of India?",
        correct_answer: "Peacock",
        incorrect_answers: ["Crow", "Sparrow", "Eagle"]
    },
    {
        question: "Which freedom fighter gave the slogan 'Inquilab Zindabad'?",
        correct_answer: "Bhagat Singh",
        incorrect_answers: ["Mahatma Gandhi", "Bal Gangadhar Tilak", "Subhash Chandra Bose"]
    },
    {
        question: "What is the traditional art form of Odisha?",
        correct_answer: "Pattachitra",
        incorrect_answers: ["Madhubani", "Warli", "Tanjore"]
    },
    {
        question: "Which state in India is known for the Sundarbans forest?",
        correct_answer: "West Bengal",
        incorrect_answers: ["Odisha", "Assam", "Jharkhand"]
    },
    {
        question: "Which Indian cricketer is also known as 'The Little Master'?",
        correct_answer: "Sachin Tendulkar",
        incorrect_answers: ["Sunil Gavaskar", "Virat Kohli", "Kapil Dev"]
    }
];

let score = 0;
let currentQuestionIndex = 0;

// Function to display the current question and answers
function displayQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    const questionText = currentQuestion.question;
    const answers = [...currentQuestion.incorrect_answers, currentQuestion.correct_answer];
    shuffleArray(answers);

    document.getElementById('question').innerHTML = questionText;
    document.getElementById('answer-1').innerHTML = answers[0];
    document.getElementById('answer-2').innerHTML = answers[1];
    document.getElementById('answer-3').innerHTML = answers[2];
    document.getElementById('answer-4').innerHTML = answers[3];

    document.querySelectorAll('.answer-btn').forEach(button => {
        button.onclick = () => checkAnswer(button.innerHTML, currentQuestion.correct_answer);
    });
}

// Function to shuffle the answers
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Function to check if the answer is correct
function checkAnswer(selectedAnswer, correctAnswer) {
    if (selectedAnswer === correctAnswer) {
        score += 10;
    }
    document.getElementById('score-value').innerHTML = score;
    document.getElementById('next-question').style.display = 'block';
}

// Event listener for the "Next Question" button
document.getElementById('next-question').addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex >= questions.length) {
        currentQuestionIndex = 0; // Restart the quiz if we reach the end
    }
    displayQuestion();
    document.getElementById('next-question').style.display = 'none';
});

// Initial function call to set up the game
displayQuestion();
