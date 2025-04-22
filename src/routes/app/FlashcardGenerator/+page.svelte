<h1>Welcome! Are you here to study?</h1>
<p>Select "Generate a Study Guide" on the left to get started!</p>


















<!--<script>
    let question = '';
    let answer = '';
    let flashcards = [];
  
  // Load flashcards from localStorage on component mount
    import { onMount } from 'svelte';
  
    onMount(() => {
      const storedFlashcards = localStorage.getItem('flashcards');
      if (storedFlashcards) {
        flashcards = JSON.parse(storedFlashcards);
      }
    });
  
    // Function to add flashcards
    function addFlashcard() {
      if (question && answer) {
        flashcards = [...flashcards, { q: question, a: answer }];
        question = '';
        answer = '';
        localStorage.setItem('flashcards', JSON.stringify(flashcards)); // Save flashcards to localStorage
      }
    }
  </script>
  
  <h1>Flashcard Generator</h1>
  <div class="flashcard-container">
    <form on:submit|preventDefault={addFlashcard}>
      <label>
        Question:
        <input type="text" bind:value={question} required />
      </label>
      <label>
        Answer:
        <input type="text" bind:value={answer} required />
      </label>
      <button type="submit">Create Flashcard</button>
    </form>
  
    <div class="flashcards">
      {#each flashcards as { q, a }}
        <div class="flashcard">
          <p><strong>Q:</strong> {q}</p>
          <p><strong>A:</strong> {a}</p>
        </div>
      {/each}
    </div>
  </div>
  
  <style>
    .flashcard-container {
      margin: 20px auto;
      text-align: center;
      max-width: 600px;
    }
  
    form {
      margin-bottom: 20px;
    }
  
    form label {
      display: block;
      margin-bottom: 10px;
    }
  
    form input {
      width: 100%;
      padding: 10px;
      margin-top: 5px;
      margin-bottom: 15px;
      border: 1px solid #ccc;
      border-radius: 5px;
    }
  
    form button {
      padding: 10px 20px;
      background-color: #0070f3;
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }
  
    form button:hover {
      background-color: #0056b3;
    }
  
    .flashcards {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }
  
    .flashcard {
      padding: 15px;
      border: 1px solid #ccc;
      border-radius: 5px;
      background-color: #f9f9f9;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
  </style>
  

















<!---<script>
    let question = '';
    let answer = '';
    let flashcards = [];
  
    function addFlashcard() {
      if (question && answer) {
        flashcards = [...flashcards, { q: question, a: answer }];
        question = '';
        answer = '';
      }
    }
  </script>
  
  <h1>Flashcard Generator</h1>
  <div class="flashcard-container">
    <form on:submit|preventDefault={addFlashcard}>
      <label>
        Question:
        <input type="text" bind:value={question} required />
      </label>
      <label>
        Answer:
        <input type="text" bind:value={answer} required />
      </label>
      <button type="submit">Create Flashcard</button>
    </form>
    <div class="flashcards">
      {#each flashcards as { q, a }}
        <div class="flashcard">
          <p><strong>Q:</strong> {q}</p>
          <p><strong>A:</strong> {a}</p>
        </div>
      {/each}
    </div>
  </div>
  
  <style>
    .flashcard-container {
      margin: 20px auto;
      text-align: center;
      max-width: 600px;
    }
  
    form {
      margin-bottom: 20px;
    }
  
    form label {
      display: block;
      margin-bottom: 10px;
    }
  
    form input {
      width: 100%;
      padding: 10px;
      margin-top: 5px;
      margin-bottom: 15px;
      border: 1px solid #ccc;
      border-radius: 5px;
    }
  
    form button {
      padding: 10px 20px;
      background-color: #0070f3;
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }
  
    form button:hover {
      background-color: #0056b3;
    }
  
    .flashcards {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }
  
    .flashcard {
      padding: 15px;
      border: 1px solid #ccc;
      border-radius: 5px;
      background-color: #f9f9f9;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
  </style>
-->