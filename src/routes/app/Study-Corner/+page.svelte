<div class="background">
  <div class="button-container">
    <!-- Flashcard Generator Button -->
    <a href="/app/FlashcardGenerator" class="flashcard-button">
      Open Flashcard Generator
    </a>

    <!-- Pomodoro Timer Button -->
    <a href="/app/Pomodoro" class="pomodoro-button">
      Open Pomodoro Timer
    </a>
  </div>

  <div class="welcome-container">
    <h1>Welcome to Study Corner</h1>
  </div>
</div>

<style>
/* Base background styling */
.background {
  background-image: url(try.jpg); /* Replace with your image path */
  background-size: cover; /* Ensures the image covers the entire background */
  background-position: center; /* Centers the image */
  background-repeat: no-repeat; /* Prevents repeating the background image */
  height: 100vh; /* Full viewport height */
  width: 100vw; /* Full viewport width */
  position: relative; /* Enables positioning for other elements */
  display: flex;
  justify-content: center; /* Centers content horizontally */
  align-items: center; /* Centers content vertically */
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  overflow: hidden; /* Prevents scrolling if the image doesn't fit */
}

/* Positioning container for buttons */
.button-container {
  position: absolute;
  top: 20%; /* Adjusts the vertical position of the buttons */
  display: flex;
  justify-content: space-between; /* Places buttons on opposite sides */
  width: 60%; /* Adjusts the width of the container */
  left: 50%;
  transform: translateX(-50%); /* Centers the container horizontally */
}

/* Flashcard button styling */
.flashcard-button {
  padding: 15px 20px;
  font-size: 1rem;
  background-color: #28a745;
  color: white;
  text-decoration: none; /* Removes underline */
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.flashcard-button:hover {
  background-color: #218838;
}

/* Pomodoro button styling */
.pomodoro-button {
  padding: 15px 20px;
  font-size: 1rem;
  background-color: #0070f3;
  color: white;
  text-decoration: none; /* Removes underline */
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.pomodoro-button:hover {
  background-color: #0056b3;
}

/* Welcome text styling */
.welcome-container {
  text-align: center;
  position: absolute;
  bottom: 10%; /* Adjusts the vertical position of the welcome text */
  width: 100%;
}

.welcome-container h1 {
  font-size: 2rem;
  color: white;
  margin: 0;
  text-align: center;
}

/* Media Queries for Responsive Design */
@media (max-width: 900px) {
  .button-container {
    width: 80%; /* Decreases the button container width for smaller screens */
  }
}

@media (max-width: 480px) {
  .button-container {
    width: 90%; /* Decreases the button container width further */
  }
}
</style>














<!--
<div class="background">
  <div class="welcome-container">
    <h1>Welcome to Study Corner</h1>
  </div>

  <!-- Container for buttons --
  <div class="buttons-container">
    <!-- Flashcard Generator Button (left side) --
    <a href="/app/FlashcardGenerator" class="flashcard-button">
      Open Flashcard Generator
    </a>

    <!-- Pomodoro Timer Button (right side) --
    <a href="/app/Pomodoro" class="pomodoro-button">
      Open Pomodoro Timer
    </a>
  </div>
</div>


<style>
  /*
  /* Base background styling 
  .background {
    background-image: url('try.jpg'); /* Your updated background image 
    background-size: cover; /* Make the background image cover the entire viewport 
    background-position: center; /* Center the image 
    background-repeat: no-repeat; /* Prevent the background from repeating 
    height: 1000px; /* Full viewport height 
    width: 100%; /* Full viewport width 
    display: flex;
    justify-content: center; /* Center the content horizontally 
    align-items: center; /* Center the content vertically 
    flex-direction: column; /* Arrange elements vertically 
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
  }*/
  /* Base background styling */
.background {
  background-image: url(try.jpg); /* Replace with your image path */
  background-size: cover; /* Makes sure the background image covers the whole area */
  background-position: center; /* Centers the image */
  background-repeat: no-repeat; /* Prevents repeating the background image */
  height: 100vh; /* Full viewport height */
  width: 100vw; /* Full viewport width */
  position: relative; /* Enables positioning for other elements */
  display: flex;
  justify-content: center; /* Centers content horizontally */
  align-items: center; /* Centers content vertically */
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
}

  /* Container to hold both buttons */
.buttons-container {
  width: 100%;
  display: flex;
  justify-content: center; /* Center the buttons horizontally */
  position: absolute;
  bottom: 230px; /* Adjusted to make the buttons higher */
  left: 0;
  padding: 0 20px; /* Optional padding to the sides */
}

/* Flashcard button styling (left side) */
.flashcard-button {
  padding: 15px 20px;
  font-size: 1rem;
  background-color: #28a745;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-right: 952px; /* Space between buttons */
}

.flashcard-button:hover {
  background-color: #218838;
}

/* Pomodoro button styling (right side) */
.pomodoro-button {
  padding: 15px 20px;
  font-size: 1rem;
  background-color: #0070f3;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.pomodoro-button:hover {
  background-color: #0056b3;
}

  /* Welcome text styling */
  .welcome-container {
    text-align: center;
    margin-bottom: 50px; /* Add some space below the welcome message */
  }

  .welcome-container h1 {
    font-size: 2rem;
    color: white;
    margin: 0;
  }
</style>
-->





















<!--
<div class="background">
  <div class="vertical-bar left-bar">
    <!-- Image for the left bar --
    <!--<img src="left.jpg" alt="Left Icon" class="bar-image">-->

    <!-- Flashcard Generator Button --
    <a href="/app/FlashcardGenerator" class="flashcard-button">
      Open Flashcard Generator
    </a>
  </div>

  <div class="vertical-bar right-bar">
    <!-- Image for the right bar --
    <!--<img src="right-image.jpg" alt="Right Icon" class="bar-image">-->

    <!-- Pomodoro Timer Button --
    <a href="/app/Pomodoro" class="pomodoro-button">
      Open Pomodoro Timer
    </a>
  </div>

  <div class="welcome-container">
    <h1>Welcome to Study Corner</h1>
  </div>
</div>


<style>
/* Base background styling (for normal size screens) */
.background {
  background-image: url(Study.jpg); /* Replace with your image path */
  background-size: contain; /* Keep the original size proportional */
  background-position: center; /* Centers the image */
  background-repeat: no-repeat; /* Prevents repetition */
  height: 100vh; /* Full viewport height */
  width: 100vw; /* Full viewport width */
  position: relative; /* Enables positioning for the vertical bars */
  display: flex;
  justify-content: space-between; /* Keeps vertical bars on the edges */
  align-items: center; /* Centers content vertically */
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
}

/* Media query for screens smaller than 900px */
@media (max-width: 900px) {
  .background {
    background-size: cover; /* Adjusts background to fill the space */
    height: 100vh; /* Keeps it fully stretched vertically */
    width: 100vw; /* Keeps it fully stretched horizontally */
  }

  .vertical-bar {
    width: 20vw; /* Adjusts bar width proportionally */
  }
}

/* Media query for screens smaller than 480px */
@media (max-width: 480px) {
  .background {
    background-size: cover; /* Ensures the image fills the container */
    height: 100vh; /* Keeps the full height */
    width: 100vw; /* Ensures the width remains proportional */
  }

  .vertical-bar {
    width: 15vw; /* Further reduce bar width for tiny screens */
  }
}
  /*Vertical bar styling */
  .vertical-bar {
  position: absolute;
  top: 0; /* Aligns the bar with the top edge of the image */
  height: 100%;
  width: 25vw;
  background-color: #90757D;
}

/*left-Image*/
.left-bar {
  background-image: url(left.jpg);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

/*right-Image*/
.right-bar {
  background-image: url(right.jpg);
  background-size: cover; /* Makes image fill the bar */
  background-position: center;
  background-repeat: no-repeat;

  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

  /* Media Queries for Better Responsiveness */
@media (max-width: 900px) {
  .vertical-bar {
    width: 20%; /* Increase bar width for smaller screens */
  }
}

@media (max-width: 480px) {
  .vertical-bar {
    width: 12%; /* Further increase bar width for very small screens */
  }
}

  /* Flashcard button styling */
  .flashcard-button {
    padding: 15px 20px;
    font-size: 1rem;
    background-color: #28a745;
    color: white;
    text-decoration: none; /* Removes underline */
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .flashcard-button:hover {
    background-color: #218838;
  }

  /* Pomodoro button styling */
  .pomodoro-button {
    padding: 15px 20px;
    font-size: 1rem;
    background-color: #0070f3;
    color: white;
    text-decoration: none; /* Removes underline */
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .pomodoro-button:hover {
    background-color: #0056b3;
  }

  /* Welcome text styling */
  .welcome-container {
    text-align: center;
  }

  .welcome-container h1 {
    font-size: 2rem;
    color: white;
    margin: 0;
    padding-bottom: 50px; /* Positions text lower */
    text-align: center; /* Ensures the text stays horizontally centered */
  }
</style>
-->




























<!--
<script>
  let showTimer = false; // Determines if the timer should be displayed
  let minutes = 25;
  let seconds = 0;
  let isRunning = false;
  let isBreak = false;

  function startTimer() {
    isRunning = true;
    const intervalId = setInterval(() => {
      if (seconds === 0) {
        if (minutes === 0) {
          if (isBreak) {
            minutes = 25; // Reset to study time
            isBreak = false;
          } else {
            minutes = 5; // Set to break time
            isBreak = true;
          }
        } else {
          minutes--;
          seconds = 59;
        }
      } else {
        seconds--;
      }

      if (!isRunning) {
        clearInterval(intervalId);
      }
    }, 1000);
  }

  function stopTimer() {
    isRunning = false;
  }

  function resetTimer() {
    isRunning = false;
    isBreak = false;
    minutes = 25;
    seconds = 0;
  }

  function showPomodoroTimer() {
    showTimer = true; // Shows the Pomodoro timer when the button is clicked
  }
</script>

<div class="background">
  {#if !showTimer}
    <!-- Landing Page Content --
    <div class="welcome-container">
      <h1>Welcome to Study Corner</h1>
      <button on:click={showPomodoroTimer} class="start-button">Open Pomodoro Timer</button>
    </div>
  {:else}
    <!-- Pomodoro Timer Content --
    <h1>Pomodoro Study Timer</h1>
    <div class="timer-container">
      <p>{isBreak ? 'Break Time' : 'Study Time'}</p>
      <p>{minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}</p>
      <div class="button-container">
        <button on:click={startTimer}>Start</button>
        <button on:click={stopTimer}>Stop</button>
        <button on:click={resetTimer}>Reset</button>
      </div>
    </div>
  {/if}
</div>

<style>
  /* Full-page background styling for both states */
  .background {
  background-image: url(Study.jpg); /* Replace with your image path */
  background-size: contain; /* Ensures the image stretches to fully cover the screen */
  background-position: center; /* Centers the image */
  background-repeat: no-repeat; /* Prevents the image from repeating */
  background-attachment: fixed; /* Keeps the image fixed while scrolling (optional) */
  height: 100vh; /* Full viewport height */
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
}

  /* Landing Page Styles */
  .welcome-container {
    text-align: center;
  }

  .welcome-container h1 {
    font-size: 2rem;
    color: white;
    margin-bottom: 20px;
  }

  .start-button {
    padding: 15px 30px;
    font-size: 1.2rem;
    background-color: #0070f3;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .start-button:hover {
    background-color: #0056b3;
  }

  /* Timer Styles */
  .timer-container {
    text-align: center;
    background-color: rgba(255, 255, 255, 0.8); /* Semi-transparent white for readability */
    padding: 20px;
    border-radius: 10px; /* Rounded corners */
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2); /* Shadow effect */
    max-width: 400px;
    width: 100%;
  }

  .button-container {
    margin-top: 20px;
  }

  button {
    padding: 10px 20px;
    font-size: 1rem;
    background-color: #0070f3;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    margin: 0 10px;
  }

  button:hover {
    background-color: #0056b3;
  }
</style>























<!--
<script>
  let minutes = 25;
  let seconds = 0;
  let isRunning = false;
  let isBreak = false;

  function startTimer() {
    isRunning = true;
    const intervalId = setInterval(() => {
      if (seconds === 0) {
        if (minutes === 0) {
          if (isBreak) {
            minutes = 25;
            isBreak = false;
          } else {
            minutes = 5;
            isBreak = true;
          }
        } else {
          minutes--;
          seconds = 59;
        }
      } else {
        seconds--;
      }

      if (!isRunning) {
        clearInterval(intervalId);
      }
    }, 1000);
  }

  function stopTimer() {
    isRunning = false;
  }

  function resetTimer() {
    isRunning = false;
    isBreak = false;
    minutes = 25;
    seconds = 0;
  }
</script>

<h1>Pomodoro Study Timer</h1>

<div class="timer-container">
  <p>{isBreak ? 'Break Time' : 'Study Time'}</p>
  <p>{minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}</p>
  <div class="button-container">
    <button on:click={startTimer}>Start</button>
    <button on:click={stopTimer}>Stop</button>
    <button on:click={resetTimer}>Reset</button>
  </div>
</div>

<style>
  .timer-container {
    text-align: center;
  }

  .button-container {
    margin-top: 20px;
  }

  button {
    padding: 10px 20px;
    font-size: 1rem;
    background-color: #0070f3;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    margin: 0 10px;
  }

  button:hover {
    background-color: #0056b3;
  }
</style>
-->