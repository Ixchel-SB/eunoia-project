<script lang="ts">
  let entries: string[] = [];
  let newEntry: string = '';

  function addEntry() {
    if (newEntry.trim() !== '') {
      entries = [...entries, newEntry];
      newEntry = '';
    }
  }

  function deleteEntry(index: number) {
    entries = entries.filter((entry, i) => i !== index);
  }
</script>

<!-- ... rest of the code ... -->



<h1>Interactive Journal</h1>

<div class="journal-container">
  <textarea bind:value={newEntry} placeholder="Write your thoughts here..."></textarea>
  <button on:click={addEntry}>Add Entry</button>

  <div class="entries-container">
    {#each entries as entry, index}
      <div class="entry">
        <p>{entry}</p>
        <button on:click={() => deleteEntry(index)}>Delete</button>
      </div>
    {/each}
  </div>
</div>

<style>
  .journal-container {
    width: 80%;
    margin: 40px auto;
    padding: 20px;
    background-color: #f9f9f9;
    border: 1px solid #ddd;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }

  textarea {
    width: 100%;
    height: 100px;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }

  button {
    padding: 10px 20px;
    font-size: 16px;
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

  .entries-container {
    margin-top: 20px;
  }

  .entry {
    padding: 10px;
    border-bottom: 1px solid #ccc;
  }

  .entry p {
    margin-bottom: 10px;
  }

  .entry button {
    background-color: #dc3545;
  }

  .entry button:hover {
    background-color: #c82333;
  }
</style>