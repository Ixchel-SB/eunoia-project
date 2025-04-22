<script>
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';

	let topics = [];
	let topicTitle = '';
	let flashcards = [{ q: '', a: '' }];

	onMount(() => {
		const stored = localStorage.getItem('flashcardTopics');
		if (stored) topics = JSON.parse(stored);
	});

	function saveTopic() {
		if (!topicTitle.trim()) return;
		const validCards = flashcards.filter(card => card.q && card.a);
		if (validCards.length === 0) return;

		topics = [...topics, { title: topicTitle, flashcards: validCards }];
		localStorage.setItem('flashcardTopics', JSON.stringify(topics));
		topicTitle = '';
		flashcards = [{ q: '', a: '' }];
	}

	function addCard() {
		flashcards = [...flashcards, { q: '', a: '' }];
	}

	function removeCard(index) {
		flashcards.splice(index, 1);
	}
</script>

<h1>Create Flashcard Set</h1>

<div class="creator">
	<input type="text" bind:value={topicTitle} placeholder="Enter topic title..." />

	<div class="card-list">
		{#each flashcards as card, i}
			<div class="card-row">
				<input type="text" bind:value={card.q} placeholder="Term" />
				<input type="text" bind:value={card.a} placeholder="Definition" />
				<button on:click={() => removeCard(i)}>🗑️</button>
			</div>
		{/each}
	</div>

	<button on:click={addCard}>➕ Add Card</button>
	<button on:click={saveTopic}>💾 Save Set</button>
</div>

<h2>Saved Topics</h2>
<ul>
	{#each topics as topic}
		<li>
			<a href={`/app/FlashcardGenerator/topics/${encodeURIComponent(topic.title)}`}>
				{topic.title} ({topic.flashcards.length} cards)
			</a>
		</li>
	{/each}
</ul>

<style>
	.creator {
		max-width: 700px;
		margin: 20px auto;
		display: flex;
		flex-direction: column;
		gap: 15px;
	}
	input {
		padding: 10px;
		border: 1px solid #ccc;
		border-radius: 5px;
		width: 100%;
	}
	.card-list {
		display: flex;
		flex-direction: column;
		gap: 10px;
	}
	.card-row {
		display: flex;
		gap: 10px;
		align-items: center;
	}
	.card-row input {
		flex: 1;
	}
	button {
		background-color: #0070f3;
		color: white;
		padding: 8px 12px;
		border: none;
		border-radius: 5px;
		cursor: pointer;
	}
	button:hover {
		background-color: #0056b3;
	}
	a {
		color: #0070f3;
		text-decoration: none;
	}
	a:hover {
		text-decoration: underline;
	}
</style>










<!--<script>
	import { onMount } from 'svelte';

	let topics = [];
	let topicTitle = '';
	let flashcards = [{ q: '', a: '' }];

	onMount(() => {
		const stored = localStorage.getItem('flashcardTopics');
		if (stored) topics = JSON.parse(stored);
	});

	function saveTopic() {
		if (!topicTitle.trim()) return;
		const validCards = flashcards.filter(card => card.q && card.a);
		if (validCards.length === 0) return;

		topics = [...topics, { title: topicTitle, flashcards: validCards }];
		localStorage.setItem('flashcardTopics', JSON.stringify(topics));
		topicTitle = '';
		flashcards = [{ q: '', a: '' }];
	}

	function addCard() {
		flashcards = [...flashcards, { q: '', a: '' }];
	}

	function removeCard(index) {
		flashcards.splice(index, 1);
	}
</script>

<h1>Create Flashcard Set</h1>

<div class="creator">
	<input type="text" bind:value={topicTitle} placeholder="Enter topic title..." />

	<div class="card-list">
		{#each flashcards as card, i}
			<div class="card-row">
				<input type="text" bind:value={card.q} placeholder="Term" />
				<input type="text" bind:value={card.a} placeholder="Definition" />
				<button on:click={() => removeCard(i)}>🗑️</button>
			</div>
		{/each}
	</div>

	<button on:click={addCard}>➕ Add Card</button>
	<button on:click={saveTopic}>💾 Save Set</button>
</div>

<h2>Saved Topics</h2>
<ul>
	{#each topics as topic}
		<li>{topic.title} ({topic.flashcards.length} cards)</li>
	{/each}
</ul>

<style>
	.creator {
		max-width: 700px;
		margin: 20px auto;
		display: flex;
		flex-direction: column;
		gap: 15px;
	}
	input {
		padding: 10px;
		border: 1px solid #ccc;
		border-radius: 5px;
		width: 100%;
	}
	.card-list {
		display: flex;
		flex-direction: column;
		gap: 10px;
	}
	.card-row {
		display: flex;
		gap: 10px;
		align-items: center;
	}
	.card-row input {
		flex: 1;
	}
	button {
		background-color: #0070f3;
		color: white;
		padding: 8px 12px;
		border: none;
		border-radius: 5px;
		cursor: pointer;
	}
	button:hover {
		background-color: #0056b3;
	}
</style>
-->
