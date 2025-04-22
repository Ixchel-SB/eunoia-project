<script lang="ts">
  let boxesContainer: HTMLDivElement | null = null;

  function scrollLeft() {
    if (boxesContainer) {
      boxesContainer.scrollBy({
        left: -boxesContainer.clientWidth,
        behavior: 'smooth',
      });
    }
  }

  function scrollRight() {
    if (boxesContainer) {
      boxesContainer.scrollBy({
        left: boxesContainer.clientWidth,
        behavior: 'smooth',
      });
    }
  }
</script>

<div class="interactive-boxes">
  <div class="boxes-container" bind:this={boxesContainer}>
    <div class="box">
      <h2>Meditation</h2>
      <p>Calm your mind with guided meditation sessions.</p>
    </div>
    <div class="box">
      <h2>Study Corner</h2>
      <p>Tools and ambiance to help you focus while studying.</p>
    </div>
    <div class="box">
      <h2>Calendar Syncing</h2>
      <p>Integrate your wellness with your daily schedule.</p>
    </div>
    <div class="box">
      <h2>Journal</h2>
      <p>Keep track of your thoughts and reflections every day.</p>
    </div>
  </div>

  <div class="arrow-controls">
    <button class="arrow" on:click={scrollLeft}>←</button>
    <button class="arrow" on:click={scrollRight}>→</button>
  </div>
</div>

<style>
  .interactive-boxes {
    position: relative;
    width: 100%;
    margin: 40px auto;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .boxes-container {
    display: flex;
    overflow-x: hidden;
    scroll-behavior: smooth;
    scroll-snap-type: x mandatory;
    width: 90%;
    max-width: 1000px;
    height: 500px; /* Increased height */
  }

  .box {
    flex: 0 0 100%;
    scroll-snap-align: center;
    background: white;
    border-radius: 24px;
    padding: 60px;
    margin: 0 10px;
    box-shadow: 0 6px 14px rgba(0, 0, 0, 0.1);
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .box h2 {
    font-size: 36px;
    margin-bottom: 20px;
  }

  .box p {
    font-size: 20px;
    color: #444;
  }

  .arrow-controls {
    display: flex;
    justify-content: flex-end;
    width: 90%;
    max-width: 1000px;
    margin-top: 20px;
  }

  .arrow {
    background-color: #0031f3;
    color: white;
    font-size: 28px;
    padding: 12px 18px;
    border: none;
    border-radius: 8px;
    margin-left: 10px;
    cursor: pointer;
    transition: background-color 0.3s;
  }

  .arrow:hover {
    background-color: #0056b3;
  }

  @media (max-width: 768px) {
    .boxes-container {
      width: 100%;
    }

    .box {
      padding: 40px 20px;
    }

    .arrow-controls {
      justify-content: center;
    }
  }
</style>

















<!--
<script lang="ts">
  let boxesContainer: HTMLDivElement | null = null; // Explicitly define the type

  function scrollLeft() {
    if (boxesContainer) {
      boxesContainer.scrollBy({
        left: -300,
        behavior: 'smooth',
      });
    }
  }

  function scrollRight() {
    if (boxesContainer) {
      boxesContainer.scrollBy({
        left: 300,
        behavior: 'smooth',
      });
    }
  }
</script>

<div class="interactive-boxes">
  <button class="arrow left" on:click={scrollLeft}>←</button>
  <div class="boxes-container" bind:this={boxesContainer}>
    <div class="box">Box 1</div>
    <div class="box">Box 2</div>
    <div class="box">Box 3</div>
  </div>
  <button class="arrow right" on:click={scrollRight}>→</button>
</div>
-->