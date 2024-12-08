// Smooth scroll for navigation links
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').slice(1);
      const target = document.getElementById(targetId);
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    });
  });

  document.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (href.endsWith('.html')) {
        window.location.href = href; // Force navigation
      }
    });
  });
  
  // Sidebar Toggle Functionality
  function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");

    // Toggle the sidebar class to open/close
    sidebar.classList.toggle("open");
  }

  // Select elements
  const characterGrid = document.querySelector('.character-grid');
  const characters = [
    {
      name: 'Hello Kitty',
      img: 'Assets/Character Images/hellokitty.png',
      desc: 'The iconic Sanrio character known for her kindness and charm.',
      details: {
        hobbies: 'Baking cookies, making friends',
        dateOfBirth: 'November 1, 1974',
        birthPlace: 'London, England',
        sex: 'Female',
      },
    },
    {
      name: 'My Melody',
      img: 'Assets/Character Images/MyMelody.png',
      desc: 'A sweet bunny who loves helping her friends.',
      details: {
        hobbies: 'Sewing, spending time with her grandma',
        dateOfBirth: 'January 18',
        birthPlace: 'Mariland',
        sex: 'Female',
      },
    },
    {
      name: 'Kuromi',
      img: 'Assets/Character Images/Kuromi.png',
      desc: 'A mischievous and sassy rival of My Melody.',
      details: {
        hobbies: 'Writing in her diary, pulling pranks',
        dateOfBirth: 'October 31',
        birthPlace: 'Unknown',
        sex: 'Female',
      },
    },
    {
      name: 'Cinnamoroll',
      img: 'Assets/Character Images/Cinnamoroll.png',
      desc: 'A cheerful puppy who flies through the sky with his big ears.',
      details: {
        hobbies: 'Cloud-watching, flying',
        dateOfBirth: 'March 6, 2002',
        birthPlace: 'A cloud in the sky',
        sex: 'Male',
      },
    },
    {
      name: 'Pompompurin',
      img: 'Assets/Character Images/Pompompurin.png',
      desc: 'A golden retriever with a laid-back attitude and love for pudding.',
      details: {
        hobbies: 'Napping, collecting shoes',
        dateOfBirth: 'April 16',
        birthPlace: 'A house with a brown roof',
        sex: 'Male',
      },
    },
    {
      name: 'Badtz-Maru',
      img: 'Assets/Character Images/BadtzMaru.png',
      desc: 'A mischievous penguin with a rebellious streak.',
      details: {
        hobbies: 'Collecting fish bones, dreaming of ruling the world',
        dateOfBirth: 'April 1',
        birthPlace: 'Oahu, Hawaii',
        sex: 'Male',
      },
    },
    {
      name: 'Pochacco',
      img: 'Assets/Character Images/Pochacco.png',
      desc: 'A curious and playful puppy who loves adventures.',
      details: {
        hobbies: 'Playing basketball, taking long walks',
        dateOfBirth: 'February 29',
        birthPlace: 'Fuji, Japan',
        sex: 'Male',
      },
    },
    {
      name: 'Chococat',
      img: 'Assets/Character Images/Chococat.png',
      desc: 'A curious cat with a love for gadgets.',
      details: {
        hobbies: 'Inventing gadgets, solving mysteries',
        dateOfBirth: 'May 10',
        birthPlace: 'Kitty City',
        sex: 'Male',
      },
    },
    {
      name: 'Gudetama',
      img: 'Assets/Character Images/Gudetama.png',
      desc: 'A lazy egg who prefers to do nothing.',
      details: {
        hobbies: 'Sleeping, being lazy',
        dateOfBirth: 'No specific date',
        birthPlace: 'A refrigerator',
        sex: 'Unknown',
      },
    },
    {
      name: 'Keroppi',
      img: 'Assets/Character Images/Keroppi.png',
      desc: 'A cheerful frog who loves singing and swimming.',
      details: {
        hobbies: 'Playing games, singing',
        dateOfBirth: 'July 10',
        birthPlace: 'Donut Pond',
        sex: 'Male',
      },
    },
  ];
  
  let currentIndex = 0;
  
  // Function to render characters dynamically
  function renderCharacters() {
    const leftIndex = (currentIndex - 1 + characters.length) % characters.length;
    const rightIndex = (currentIndex + 1) % characters.length;
  
    // Fetch all card elements
    const cards = characterGrid.querySelectorAll('.character-card');
  
    // Update left card
    updateCard(cards[0], characters[leftIndex], 'left');
  
    // Update center card
    updateCard(cards[1], characters[currentIndex], 'center');
  
    // Update right card
    updateCard(cards[2], characters[rightIndex], 'right');
  }
  
  // Function to update a specific card
  function updateCard(card, character, position) {
    card.className = `character-card ${position}`; // Reset and set position class
    card.innerHTML = `
      <img src="${character.img}" alt="${character.name}">
      <h3>${character.name}</h3>
      <p>${character.desc}</p>
      <div class="details">
        <p><strong>Hobbies:</strong> ${character.details.hobbies}</p>
        <p><strong>Date of Birth:</strong> ${character.details.dateOfBirth}</p>
        <p><strong>Birthplace:</strong> ${character.details.birthPlace}</p>
        <p><strong>Sex:</strong> ${character.details.sex}</p>
      </div>
    `;
  }
  
  // Add transition effect and navigation logic
  function addTransition(direction) {
    characterGrid.classList.add(`transition-${direction}`);
    setTimeout(() => {
      characterGrid.classList.remove(`transition-${direction}`);
      renderCharacters(); // Update characters after transition
    }, 500); // Match the CSS animation duration
  }
  
  // Move to the left character
  function moveLeft() {
    currentIndex = (currentIndex - 1 + characters.length) % characters.length;
    addTransition('left');
  }
  
  // Move to the right character
  function moveRight() {
    currentIndex = (currentIndex + 1) % characters.length;
    addTransition('right');
  }
  
  // Add click-to-expand feature
  characterGrid.addEventListener('click', (e) => {
    const target = e.target.closest('.character-card');
  
    if (target.classList.contains('left')) moveLeft();
    if (target.classList.contains('right')) moveRight();
  
    if (target.classList.contains('center')) {
      // Toggle expansion for the center card
      target.classList.toggle('expanded');
    }
  });
  
  // Initial render
  renderCharacters();

// Quiz Functionality
const quizContainer = document.getElementById('quiz');
const questionContainer = document.getElementById('quiz-question-container');
const characterImage = document.getElementById('quiz-character-image');
const questionElement = document.getElementById('quiz-question');
const optionsElement = document.getElementById('quiz-options');
const feedbackElement = document.getElementById('quiz-feedback');
const nextButton = document.getElementById('quiz-next');
const quizData = Array.from(document.querySelectorAll('.quiz-data')); // Convert NodeList to Array

// Global variables for quiz
let currentQuestionIndex = 0;
let userScore = 0;
let shuffledQuestions = [];

// Function to shuffle an array
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Function to load the next question
function loadQuestion(index) {
  const questionData = shuffledQuestions[index];
  if (!questionData) return showResult();

  const question = questionData.getAttribute("data-question");
  const characterImage = questionData.getAttribute("data-character");
  const correctAnswer = questionData.getAttribute("data-answer");
  const options = questionData.querySelectorAll(".quiz-option");

  // Update the UI with the question and options
  document.getElementById("quiz-question").textContent = question;
  document.getElementById("quiz-character-image").src = characterImage;
  document.getElementById("quiz-options").innerHTML = "";

  // Populate options
  options.forEach((option) => {
    const button = document.createElement("button");
    button.className = "quiz-option";
    button.textContent = option.textContent;
    button.onclick = function () {
      handleAnswer(button, correctAnswer);
    };
    document.getElementById("quiz-options").appendChild(button);
  });

  // Hide feedback and next button initially
  document.getElementById("quiz-feedback").textContent = "";
  document.getElementById("quiz-next").style.display = "none";
}

// Function to handle user's answer
function handleAnswer(button, correctAnswer) {
  const userAnswer = button.textContent;
  const feedback = document.getElementById("quiz-feedback");

  // Disable all buttons after an answer is selected
  const optionButtons = document.querySelectorAll(".quiz-option");
  optionButtons.forEach((btn) => (btn.disabled = true));

  // Provide feedback
  if (userAnswer === correctAnswer) {
    feedback.textContent = "Correct!";
    feedback.style.color = "green";
    userScore++;
  } else {
    feedback.textContent = `Wrong! The correct answer was: ${correctAnswer}`;
    feedback.style.color = "red";
  }

  // Show the next button
  document.getElementById("quiz-next").style.display = "inline-block";
}

// Function to move to the next question
function nextQuestion() {
  currentQuestionIndex++;
  loadQuestion(currentQuestionIndex);
}

// Function to display the quiz result
function showResult() {
  const resultContainer = document.getElementById("quiz-result");
  const quizContainer = document.getElementById("quiz-container");
  const resultMessage = document.getElementById("quiz-result-message");

  // Hide quiz and show results
  quizContainer.style.display = "none";
  resultContainer.style.display = "block";

  // Display result message with the score
  resultMessage.textContent = `You scored ${userScore} out of ${shuffledQuestions.length}! ${
    userScore === shuffledQuestions.length
      ? "Congratulations! You are a true Sanrio fan!"
      : userScore >= shuffledQuestions.length / 2
      ? "Good job! You know a lot about Sanrio characters!"
      : "Keep trying! You can learn more about Sanrio!"
  }`;
}

// Function to restart the quiz
function restartQuiz() {
  currentQuestionIndex = 0;
  userScore = 0;

  // Shuffle questions again
  shuffledQuestions = shuffleArray([...quizData]);

  // Reset quiz display
  document.getElementById("quiz-container").style.display = "flex";
  document.getElementById("quiz-result").style.display = "none";

  // Load the first question
  loadQuestion(currentQuestionIndex);
}

// Shuffle questions on page load
shuffledQuestions = shuffleArray([...quizData]);

// Initial quiz load
loadQuestion(currentQuestionIndex);

