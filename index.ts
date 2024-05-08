// Define types for quiz questions
type QuizQuestion = {
  question: string;
  options: string[];
  answer: string;
};

// Function to generate a quiz with 20 general knowledge questions
function generateGeneralQuiz(): QuizQuestion[] {
  // Sample quiz questions
  const quiz: QuizQuestion[] = [
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
function displayQuiz(quiz: QuizQuestion[]) {
  const quizContainer = document.getElementById("quiz-container");
  if (!quizContainer) return;

  quizContainer.innerHTML = ""; // Clear previous quiz content

  quiz.forEach((question, index) => {
    const questionElement = document.createElement("div");
    questionElement.classList.add("question");
    questionElement.innerHTML = `
      <h3>${index + 1}. ${question.question}</h3>
      ${question.options.map(option => `
        <label>
          <input type="radio" name="question${index}" value="${option}">
          ${option}
        </label>
      `).join("")}
    `;
    quizContainer.appendChild(questionElement);
  });
}

// Function to check the submitted answers and display the result
function checkAnswers(quiz: QuizQuestion[], difficulty: string): number {
  let score = 0;
  const totalQuestions = quiz.length;

  quiz.forEach((question, index) => {
    const selectedOption = document.querySelector(`input[name="question${index}"]:checked`) as HTMLInputElement;
    if (selectedOption && selectedOption.value === question.answer) {
      score++;
    }
  });

  const percentage = (score / totalQuestions) * 100;

  const resultElement = document.getElementById("result");
  if (resultElement) {
    resultElement.innerHTML = `
      <p>Your score: ${score}</p>
      <p>Total questions: ${totalQuestions}</p>
      <p>Percentage: ${percentage}%</p>
    `;
  }

  return percentage;
}

// Function to generate a new quiz based on the difficulty level
function generateNewQuiz(difficulty: string) {
  let newQuiz: QuizQuestion[];

  if (difficulty === "easy") {
    // Generate a quiz with 10 simple math questions
    newQuiz = generateSimpleMathQuiz();
  } else if (difficulty === "hard") {
    // Generate a quiz with 10 hard computer questions
    newQuiz = generateHardComputerQuiz();
  } else {
    // Generate the initial general quiz
    newQuiz = generateGeneralQuiz();
  }

  displayQuiz(newQuiz); // Display the new quiz on the page
  checkAnswers(newQuiz, difficulty); // Check answers for the new quiz
}

// Function to generate a quiz with 10 simple math questions
function generateSimpleMathQuiz(): QuizQuestion[] {
  // Sample simple math quiz questions
  const quiz: QuizQuestion[] = [
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
function generateHardComputerQuiz(): QuizQuestion[] {
  // Sample hard computer quiz questions
  const quiz: QuizQuestion[] = [
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
    // Add more hard computer questions
  ];
  return quiz;
}

// Example usage:
const generalQuiz = generateGeneralQuiz();
displayQuiz(generalQuiz); // Display the initial general quiz

const submitButton = document.getElementById("submit-btn");
if (submitButton) {
  submitButton.addEventListener("click", () => {
    const resultPercentage = checkAnswers(generalQuiz, "easy"); // Check answers for the general quiz
  });
}

const nextButton = document.getElementById("next-btn");
if (nextButton) {
  nextButton.addEventListener("click", () => {
    const resultElement = document.getElementById("result");
    if (resultElement) {
      resultElement.innerHTML = ""; // Clear previous result
    }

    generateNewQuiz("easy"); // Generate a new quiz with easier questions
  });
}
