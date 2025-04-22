<script>
	import { goto } from '$app/navigation';
</script>

<div class="app-layout">
	<!-- Sidebar -->
	<nav class="sidebar">
		<h2>Flashcard Generator</h2>
		<button on:click={() => goto('/app/FlashcardGenerator')}>🏠 Home</button>
		<button on:click={() => goto('/app/FlashcardGenerator/create')}>🧠 Generate a Study Guide</button>
	</nav>

	<!-- Page content -->
	<main class="content">
		<slot />
	</main>
</div>

<style>
	.app-layout {
		display: flex;
		height: 100vh;
	}

	.sidebar {
		width: 220px;
		background-color: #f5f5f5;
		padding: 20px;
		display: flex;
		flex-direction: column;
		gap: 15px;
		box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
	}

	.sidebar button {
		background: none;
		border: none;
		cursor: pointer;
		text-align: left;
		padding: 10px;
		font-size: 1rem;
		border-radius: 5px;
		transition: background 0.3s;
	}

	.sidebar button:hover {
		background-color: #e0e0e0;
	}

	.content {
		flex: 1;
		padding: 2rem;
		overflow-y: auto;
	}
</style>

  



  
  
  
  
  
  