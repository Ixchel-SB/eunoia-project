<script>
    import { onDestroy } from 'svelte';
  
    let minutes = 25;
    let seconds = 0;
    let isRunning = false;
    let intervalId;
  
    let mode = 'study'; // 'study', 'shortBreak', 'longBreak'
  
    const durations = {
      study: 25,
      shortBreak: 5,
      longBreak: 15
    };
  
    function startTimer() {
      if (isRunning) return;
      isRunning = true;
  
      intervalId = setInterval(() => {
        if (seconds === 0) {
          if (minutes === 0) {
            switchMode(mode === 'study' ? 'shortBreak' : 'study');
          }
          else
          {
            minutes--;
            seconds = 59;
          }
        } else {
          seconds--;
        }
      }, 1000);
    }
  
    function stopTimer() {
      isRunning = false;
      clearInterval(intervalId);
    }
  
    function resetTimer() {
      stopTimer();
      minutes = durations[mode];
      seconds = 0;
    }
  
    function switchMode(newMode) {
      stopTimer();
      mode = newMode;
      minutes = durations[mode];
      seconds = 0;
    }
  
    // Cleanup interval when component is destroyed
    onDestroy(() => {
      clearInterval(intervalId);
    });
  </script>
  
  <h1>Pomodoro Study Timer</h1>
  <div class="timer-container">
    <div class="mode-buttons">
      <button on:click={() => switchMode('study')} class:selected={mode === 'study'}>Study</button>
      <button on:click={() => switchMode('shortBreak')} class:selected={mode === 'shortBreak'}>Short Break</button>
      <button on:click={() => switchMode('longBreak')} class:selected={mode === 'longBreak'}>Long Break</button>
    </div>
  
    <p class="mode-label">
      {mode === 'study' ? 'Study Time' : mode === 'shortBreak' ? 'Short Break' : 'Long Break'}
    </p>
    <p class="time-display">
      {minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}
    </p>
  
    <div class="button-container">
      <button on:click={startTimer}>Start</button>
      <button on:click={stopTimer}>Stop</button>
      <button on:click={resetTimer}>Reset</button>
    </div>
  </div>
  
  <style>
    .timer-container {
      text-align: center;
      background-color: rgba(255, 255, 255, 0.85);
      padding: 30px;
      border-radius: 12px;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
      max-width: 400px;
      width: 100%;
      margin: 50px auto;
    }
  
    .mode-buttons {
      display: flex;
      justify-content: center;
      margin-bottom: 20px;
      gap: 10px;
    }
  
    .mode-buttons button {
      padding: 8px 15px;
      border: none;
      background-color: #ccc;
      color: black;
      border-radius: 5px;
      cursor: pointer;
      transition: background-color 0.2s ease;
    }
  
    .mode-buttons button.selected,
    .mode-buttons button:hover {
      background-color: #0070f3;
      color: white;
    }
  
    .mode-label {
      font-size: 1.2rem;
      margin-bottom: 10px;
    }
  
    .time-display {
      font-size: 3rem;
      font-weight: bold;
      margin-bottom: 20px;
    }
  
    .button-container {
      display: flex;
      justify-content: center;
      gap: 15px;
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
    }
  
    button:hover {
      background-color: #0056b3;
    }
  </style>
  













<!---<script>
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
      background-color: rgba(255, 255, 255, 0.8); /* Semi-transparent white */
      padding: 20px;
      border-radius: 10px; /* Rounded corners */
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2); /* Shadow effect */
      max-width: 400px;
      width: 100%;
      margin: 50px auto; /* Centers the container */
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