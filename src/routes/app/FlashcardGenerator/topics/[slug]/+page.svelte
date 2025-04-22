<script>
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';

	let topic;
	let index;
	let allTopics = [];

	onMount(() => {
		const slug = $page.params.slug;
		const stored = localStorage.getItem('flashcardTopics');
		if (stored) {
			allTopics = JSON.parse(stored);
			index = allTopics.findIndex(t => t.title === slug);
			if (index !== -1) {
				topic = { ...allTopics[index] };
			}
		}
	});

	function updateFlashcard(i, field, value) {
		topic.flashcards[i][field] = value;
		saveChanges();
	}

	function deleteCard(i) {
		topic.flashcards.splice(i, 1);
		saveChanges();
	}

	function saveChanges() {
		allTopics[index] = topic;
		localStorage.setItem('flashcardTopics', JSON.stringify(allTopics));
	}
</script>

{#if topic}
	<h1>{topic.title}</h1>

	{#each topic.flashcards as card, i}
		<div class="card-row">
			<input type="text" bind:value={card.q} on:input={(e) => updateFlashcard(i, 'q', e.target.value)} />
			<input type="text" bind:value={card.a} on:input={(e) => updateFlashcard(i, 'a', e.target.value)} />
			<button on:click={() => deleteCard(i)}>🗑️</button>
		</div>
	{/each}
{:else}
	<p>Topic not found.</p>
{/if}

<style>
	.card-row {
		display: flex;
		gap: 10px;
		margin-bottom: 10px;
		align-items: center;
	}
	input {
		flex: 1;
		padding: 8px;
		border: 1px solid #ccc;
		border-radius: 5px;
	}
	button {
		background-color: #e74c3c;
		color: white;
		border: none;
		padding: 6px 10px;
		border-radius: 5px;
		cursor: pointer;
	}
	button:hover {
		background-color: #c0392b;
	}
</style>
