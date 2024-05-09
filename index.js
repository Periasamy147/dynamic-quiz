// Function to generate a quiz with 20 general knowledge questions
function generateGeneralQuiz() {
    // Sample quiz questions
    var quiz = [
        {
            question: "What is the capital of France?",
            options: ["London", "Paris", "Berlin", "Rome"],
            answer: "Paris"
        },
        {
            question: "What is the chemical symbol for water?",
            options: ["H2O", "CO2", "O2", "H2SO4"],
            answer: "H2O"
        },
        // Add more questions as needed
        {
            question: "What is the largest ocean on Earth?",
            options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
            answer: "Pacific Ocean"
        },
        {
            question: "Who wrote 'Romeo and Juliet'?",
            options: ["William Shakespeare", "Jane Austen", "Charles Dickens", "Mark Twain"],
            answer: "William Shakespeare"
        },
        {
            question: "Which planet is known as the Red Planet?",
            options: ["Jupiter", "Mars", "Venus", "Mercury"],
            answer: "Mars"
        },
        {
            question: "What is the chemical symbol for gold?",
            options: ["Au", "Ag", "Fe", "Cu"],
            answer: "Au"
        },
        {
            question: "Who painted the Mona Lisa?",
            options: ["Leonardo da Vinci", "Vincent van Gogh", "Pablo Picasso", "Claude Monet"],
            answer: "Leonardo da Vinci"
        },
        {
            question: "What is the tallest mammal?",
            options: ["Giraffe", "Elephant", "Hippo", "Rhino"],
            answer: "Giraffe"
        },
        {
            question: "What is the currency of Japan?",
            options: ["Yuan", "Won", "Yen", "Ringgit"],
            answer: "Yen"
        },
        {
            question: "Who is known as the 'Father of Computers'?",
            options: ["Bill Gates", "Alan Turing", "Steve Jobs", "Charles Babbage"],
            answer: "Charles Babbage"
        },
        // Add more questions as needed
    ];
    return quiz;
}
// Function to create and append quiz elements to the quiz container
function displayQuiz(quiz) {
    var quizContainer = document.getElementById("quiz-container");
    if (!quizContainer)
        return;
    quizContainer.innerHTML = ""; // Clear previous quiz content
    quiz.forEach(function (question, index) {
        var questionElement = document.createElement("div");
        questionElement.classList.add("question");
        questionElement.innerHTML = "\n      <h3>".concat(index + 1, ". ").concat(question.question, "</h3>\n      ").concat(question.options.map(function (option) { return "\n        <label>\n          <input type=\"radio\" name=\"question".concat(index, "\" value=\"").concat(option, "\">\n          ").concat(option, "\n        </label>\n      "); }).join(""), "\n    ");
        quizContainer.appendChild(questionElement);
    });
}
// Function to check the submitted answers and display the result
function checkAnswers(quiz, difficulty) {
    var score = 0;
    var totalQuestions = quiz.length;
    quiz.forEach(function (question, index) {
        var selectedOption = document.querySelector("input[name=\"question".concat(index, "\"]:checked"));
        if (selectedOption && selectedOption.value === question.answer) {
            score++;
        }
    });
    var percentage = (score / totalQuestions) * 100;
    var resultElement = document.getElementById("result");
    if (resultElement) {
        resultElement.innerHTML = "\n      <p>Your score: ".concat(score, "</p>\n      <p>Total questions: ").concat(totalQuestions, "</p>\n      <p>Percentage: ").concat(percentage, "%</p>\n    ");
    }
    return percentage;
}
// Function to generate a new quiz based on the difficulty level
function generateNewQuiz(difficulty) {
    var newQuiz;
    if (difficulty === "easy") {
        // Generate a quiz with 10 simple math questions
        newQuiz = generateSimpleMathQuiz();
    }
    else if (difficulty === "hard") {
        // Generate a quiz with 10 hard computer questions
        newQuiz = generateHardComputerQuiz();
    }
    else {
        // Generate the initial general quiz
        newQuiz = generateGeneralQuiz();
    }
    displayQuiz(newQuiz); // Display the new quiz on the page
    checkAnswers(newQuiz, difficulty); // Check answers for the new quiz
}
// Function to generate a quiz with 10 simple math questions
function generateSimpleMathQuiz() {
    // Sample simple math quiz questions
    var quiz = [
        {
            question: "What is 2 + 2?",
            options: ["3", "4", "5", "6"],
            answer: "4"
        },
        {
            question: "What is the formula for the area of a rectangle?",
            options: ["length * width", "2 * (length + width)", "length + width", "length / width"],
            answer: "length * width"
        },
        {
            question: "What is 3 * 5?",
            options: ["12", "15", "18", "20"],
            answer: "15"
        },
        {
            question: "What is the square root of 64?",
            options: ["6", "7", "8", "9"],
            answer: "8"
        },
        {
            question: "What is 12 / 3?",
            options: ["2", "3", "4", "6"],
            answer: "4"
        },
        {
            question: "What is 7 - 4?",
            options: ["2", "3", "4", "5"],
            answer: "3"
        },
        {
            question: "What is 10 % 3?",
            options: ["1", "2", "3", "4"],
            answer: "1"
        },
        {
            question: "What is 4 squared?",
            options: ["8", "12", "16", "20"],
            answer: "16"
        },
        {
            question: "What is 15 + 20?",
            options: ["25", "30", "35", "40"],
            answer: "35"
        },
        {
            question: "What is the result of 10 + 10 * 2?",
            options: ["20", "30", "40", "50"],
            answer: "30"
        }
    ];
    return quiz;
}
// Function to generate a quiz with 10 hard computer questions
// Function to generate a quiz with 10 hard computer questions
function generateHardComputerQuiz() {
    // Sample hard computer quiz questions
    var quiz = [
        {
            question: "Who is the inventor of the World Wide Web?",
            options: ["Tim Berners-Lee", "Bill Gates", "Steve Jobs", "Mark Zuckerberg"],
            answer: "Tim Berners-Lee"
        },
        {
            question: "What does CPU stand for?",
            options: ["Central Processing Unit", "Computer Processing Unit", "Central Processor Unit", "Computer Processor Unit"],
            answer: "Central Processing Unit"
        },
        {
            question: "What is the main function of RAM in a computer?",
            options: ["Long-term storage", "Temporary storage", "Processing data", "Displaying graphics"],
            answer: "Temporary storage"
        },
        {
            question: "Which programming language is commonly used for building web applications?",
            options: ["Java", "Python", "C++", "JavaScript"],
            answer: "JavaScript"
        },
        {
            question: "What is the purpose of an operating system?",
            options: ["Manage hardware resources", "Compile code", "Design user interfaces", "Run antivirus software"],
            answer: "Manage hardware resources"
        },
        {
            question: "Which company developed the first commercially successful microprocessor?",
            options: ["Intel", "AMD", "Apple", "IBM"],
            answer: "Intel"
        },
        {
            question: "What does HTML stand for?",
            options: ["Hyper Text Markup Language", "Hyperlink and Text Markup Language", "Home Tool Markup Language", "Hyperlinks and Textual Markup Language"],
            answer: "Hyper Text Markup Language"
        },
        {
            question: "Which of the following is a relational database management system?",
            options: ["MongoDB", "SQLite", "Redis", "Elasticsearch"],
            answer: "SQLite"
        },
        {
            question: "What is the purpose of a firewall in computer networks?",
            options: ["Data encryption", "Preventing unauthorized access", "Routing data packets", "Optimizing network speed"],
            answer: "Preventing unauthorized access"
        },
        {
            question: "What is the function of an API (Application Programming Interface)?",
            options: ["Manage user interfaces", "Access web servers", "Interact with databases", "Enable communication between software applications"],
            answer: "Enable communication between software applications"
        },
        // Add more hard computer questions
    ];
    return quiz;
}
// Example usage:
var generalQuiz = generateGeneralQuiz();
displayQuiz(generalQuiz); // Display the initial general quiz
var submitButton = document.getElementById("submit-btn");
if (submitButton) {
    submitButton.addEventListener("click", function () {
        var resultPercentage = checkAnswers(generalQuiz, "easy"); // Check answers for the general quiz
        // Update fields with easy quiz result
        var easyScoreElement = document.getElementById("easy-score");
        if (easyScoreElement) {
            easyScoreElement.textContent = "Easy Quiz Score: ".concat(resultPercentage, "%");
        }
        var easyPercentageElement = document.getElementById("easy-percentage");
        if (easyPercentageElement) {
            easyPercentageElement.textContent = "Easy Quiz Percentage: ".concat(resultPercentage, "%");
        }
    });
}
var nextButton = document.getElementById("next-btn");
if (nextButton) {
    nextButton.addEventListener("click", function () {
        var resultElement = document.getElementById("result");
        if (resultElement) {
            resultElement.innerHTML = ""; // Clear previous result
        }
        var resultPercentage = checkAnswers(generalQuiz, "easy"); // Check answers for the general quiz
        if (resultPercentage > 50) {
            generateNewQuiz("hard"); // Generate a new quiz with harder questions
        }
        else if (resultPercentage > 20 && resultPercentage < 50) {
            generateNewQuiz("easy"); // Generate a new quiz with easy questions
        }
        else {
            alert("20% is the minimum qualification of the next quiz!!!");
        }
        // Hide the "Next" button after clicking it
        nextButton.style.display = "none";
        // Update fields with hard quiz result
        var hardScoreElement = document.getElementById("hard-score");
        if (hardScoreElement) {
            // Calculate hard quiz score and update the field
            var hardScore = checkAnswers(generalQuiz, "hard");
            hardScoreElement.textContent = "Hard Quiz Score: ".concat(hardScore);
            // Calculate hard quiz percentage and update the field
            var hardPercentageElement = document.getElementById("hard-percentage");
            if (hardPercentageElement) {
                var hardPercentage = (hardScore / generalQuiz.length) * 100;
                hardPercentageElement.textContent = "Hard Quiz Percentage: ".concat(hardPercentage, "%");
            }
        }
    });
}
