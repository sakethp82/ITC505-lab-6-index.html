let playerPoints = 0;
let computerPoints = 0;

// Show selected section
function showSection(sectionId) {
    const sections = document.querySelectorAll('.main-content');
    sections.forEach(function(section) {
        section.style.display = 'none';  // Hides all sections
    });
    document.getElementById(sectionId).style.display = 'block';  // Shows selected section
}

// Rock, Paper, Scissors Game
function play(playerChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result;

    // Display choices
    document.getElementById('playerChoiceValue').textContent = playerChoice;
    document.getElementById('computerChoiceValue').textContent = computerChoice;

    // Determine the result
    if (playerChoice === computerChoice) {
        result = "It's a draw!";
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'scissors' && computerChoice === 'paper') ||
        (playerChoice === 'paper' && computerChoice === 'rock')
    ) {
        playerPoints++;
        result = "You win this round!";
    } else {
        computerPoints++;
        result = "You lose this round!";
    }

    // Update result and score
    document.getElementById('result').textContent = result;
    document.getElementById('playerScore').textContent = playerPoints;
    document.getElementById('computerScore').textContent = computerPoints;

    // Check for game winner
    if (playerPoints === 5) {
        document.getElementById('gameStatus').textContent = "Congratulations! You reached 5 points and won the game!";
        resetGame();
    } else if (computerPoints === 5) {
        document.getElementById('gameStatus').textContent = "Sorry! The computer reached 5 points and won the game!";
        resetGame();
    }
}

function resetGame() {
    playerPoints = 0;
    computerPoints = 0;
    document.getElementById('playerScore').textContent = playerPoints;
    document.getElementById('computerScore').textContent = computerPoints;
}

// Display the last modified date in the footer
document.getElementById('lastModified').textContent = document.lastModified;
