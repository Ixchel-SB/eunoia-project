<script>
  import { onMount } from "svelte";
  import { goto } from "$app/navigation";
  import { auth } from "../../config/firebaseConfig";
  import { onAuthStateChanged } from "firebase/auth";

  onMount(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        goto("/login"); // Redirect to login if the user is not authenticated
      } else {
        unsubscribe(); // User is authenticated, unsubscribe from the listener
      }
    });
  });
</script>

<h1>Welcome to the App</h1>
<p>This is the main app page after login.</p>

<!-- Flower and Navigation Buttons -->
<div class="content-wrapper">
  <main>
    <section>
      <div class="center"></div>
      <!-- Flower Petals -->
      <div class="petal-one petal-style"></div>
      <div class="petal-two petal-style"></div>
      <div class="petal-three petal-style"></div>
      <div class="petal-four petal-style"></div>
      <div class="petal-five petal-style"></div>
      <div class="petal-six petal-style"></div>
      <div class="petal-seven petal-style"></div>
      <div class="petal-eight petal-style"></div>
      <div class="petal-nine petal-style"></div>
      <!-- Leaf -->
      <div class="leaf"></div>
    </section>
  </main>

  <div class="navigation">
    <button on:click={() => goto("/app/meditation-library")}>Meditation Library</button>
    <button on:click={() => goto("/app/Study-Corner")}>Study Corner</button>
    <button on:click={() => goto("/app/interactive-journal")}>Interactive Journal</button>
    <button on:click={() => goto("/app/Calender")}>Calendar</button>
  </div>
</div>

<style>
  @import "../../components/style.css"; /* Import the external CSS file */
</style>













<!---
<script>
  import { onMount } from "svelte";
  import { goto } from "$app/navigation";
  import { auth } from "../../config/firebaseConfig";
  import { onAuthStateChanged } from "firebase/auth";

  let flowerGrowth = 0;
  let resetFlower = false;

  onMount(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        goto("/login"); // Redirect to login if the user is not authenticated
      } else {
        unsubscribe(); // User is authenticated, unsubscribe from the listener
      }
    });
  });

  // Reset the flower growth logic
  function resetFlowerGrowth() {
    flowerGrowth = 0;
    resetFlower = true;
  }
</script>

<h1>Welcome to the App</h1>
<p>This is the main app page after login.</p>

<!-- Content Wrapper --
<div class="content-wrapper">
  <!-- Flower Section --
  <main>
    <section>
      <div class="center"></div>
      <!-- Flower Petals --
      <div class="petal-one petal-style"></div>
      <div class="petal-two petal-style"></div>
      <div class="petal-three petal-style"></div>
      <div class="petal-four petal-style"></div>
      <div class="petal-five petal-style"></div>
      <div class="petal-six petal-style"></div>
      <div class="petal-seven petal-style"></div>
      <div class="petal-eight petal-style"></div>
      <div class="petal-nine petal-style"></div>
      <!-- Leaf --
      <div class="leaf"></div>
    </section>
  </main>

  <!-- Navigation Buttons --
  <div class="navigation">
    <button on:click={() => goto("/app/meditation-library")}>Meditation Library</button>
    <button on:click={() => goto("/app/Study-Corner")}>Study Corner</button>
    <button on:click={() => goto("/app/interactive-journal")}>Interactive Journal</button>
    <button on:click={() => goto("/app/Calender")}>Calendar</button>
  </div>
</div>

<style>
  /* Content Wrapper */
  .content-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 30px;
  }

  /* Flower Section */
  main {
    height: auto; /* Allows flexibility for the flower size */
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  section {
    height: 300px;
    width: 400px;
    border: 4px solid white;
    border-radius: 10px;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative; /* Position elements inside */
  }

  .center {
    border: 1px solid black;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: #ffde59; /* Yellow center */
    position: absolute;
  }

  .petal-style {
    border-radius: 100px 0px;
    height: 100px;
    background: #f0a6ca; /* Pink petal color */
    border: 1px solid #f0e6ef;
    position: absolute;
  }

  /* Petal Positions */
  .petal-one {
    transform: rotate(130deg);
    width: 120px;
    z-index: 10;
  }

  .petal-two {
    z-index: 9;
    width: 120px;
    border-radius: 130px 0;
    transform: translateX(64px) translateY(34px) rotate(187deg);
  }

  .petal-three {
    z-index: 9;
    border-radius: 130px 0;
    width: 120px;
    transform: scale(-1, 1) translateX(64px) translateY(34px) rotate(187deg);
  }

  .petal-four {
    width: 90px;
    transform: rotate(176deg) translate(-42px, 6px);
    z-index: 8;
  }

  .petal-five {
    width: 90px;
    transform: scale(-1, 1) rotate(176deg) translate(-42px, 6px);
    z-index: 8;
  }

  .petal-six {
    z-index: 7;
    width: 50px;
    height: 60px;
    transform: rotate(5deg) translate(86px, -22px);
  }

  .petal-seven {
    z-index: 7;
    width: 50px;
    height: 60px;
    transform: rotate(5deg) translate(-89px, -5px) scale(-1, 1);
  }

  .petal-eight {
    width: 100px;
    z-index: 6;
    height: 100px;
    transform: rotate(66deg) translate(10px, 101px);
  }

  .petal-nine {
    width: 100px;
    z-index: 6;
    height: 100px;
    transform: scale(-1, 1) rotate(66deg) translate(10px, 101px);
  }

  /* Leaf */
  .leaf {
    width: 300px;
    height: 50px;
    border-radius: 50%; /* Smooth round leaf */
    background: #cbe896; /* Light green leaf color */
    transform: translate(0px, 82px);
    position: absolute;
  }

  /* Navigation Section */
  .navigation {
    display: flex;
    flex-direction: row;
    gap: 10px;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 20px;
  }

  button {
    padding: 6px 12px;
    font-size: 0.9rem;
    background-color: #0070f3;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  button:hover {
    background-color: #0056b3;
  }
</style>































<!---
<script>
  import { onMount } from "svelte";
  import { goto } from "$app/navigation";
  import { auth } from "../../config/firebaseConfig";
  import { onAuthStateChanged } from "firebase/auth";
  import Flower from "../../components/Flower.svelte";

  let flowerGrowth = 0;
  let resetFlower = false;

  onMount(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        goto("/login"); // Redirect to login if the user is not authenticated
      } else {
        unsubscribe(); // User is authenticated, unsubscribe from the listener
      }
    });
  });

  // Reset the flower growth logic here
  function resetFlowerGrowth() {
    flowerGrowth = 0;
    resetFlower = true;
  }
</script>

<h1>Welcome to the App</h1>
<p>This is the main app page after login.</p>

<div class="content-wrapper">
  <div class="flower-container">
    <Flower growth={flowerGrowth} reset={resetFlower} />
</div>

<div class="navigation">
  <button on:click={() => goto("/app/meditation-library")}>Meditation Library</button>
  <button on:click={() => goto("/app/Study-Corner")}>Study Corner</button>
  <button on:click={() => goto("/app/interactive-journal")}>Interactive Journal</button>
  <button on:click={() => goto("/app/Calender")}>Calendar</button>
</div>
</div>

<style>
  .content-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 30px;
  }

  .flower-container {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
  }

  .navigation {
    display: flex;
    flex-direction: row;
    gap: 10px;
    flex-wrap: wrap;
    justify-content: center;
  }

  button {
    padding: 6px 12px;
    font-size: 0.9rem;
    background-color: #0070f3;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  button:hover {
    background-color: #0056b3;
  }

  /*
  .navigation {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
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
  }*/
</style>

















<!--
<script>
  import { onMount } from "svelte";
  import { goto } from "$app/navigation";
  import { auth } from "../../config/firebaseConfig";
  import { onAuthStateChanged } from "firebase/auth";
  import Flower from "../../components/Flower.svelte";

  let flowerGrowth = 0;
  let resetFlower = false;

  onMount(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        goto("/login"); // Redirect to login if the user is not authenticated
      } else {
        unsubscribe(); // User is authenticated, unsubscribe from the listener
      }
    });
  });

  let growth = 0;

  // Update the growth value here
  function updateGrowth() {
    growth += 10;
    if (growth >= 100) {
      growth = 0;
    }
  }

  // Reset the flower growth logic here
  function resetFlowerGrowth() {
    flowerGrowth = 0;
    resetFlower = true;
  }
</script>

<h1>Welcome to the App</h1>
<p>This is the main app page after login.</p>

<div class="navigation">
  <button on:click={() => goto("/app/meditation-library")}>Meditation Library</button>
  <button on:click={() => goto("/study-corner")}>Study Corner</button>
  <button on:click={() => goto("/interactive-journal")}>Interactive Journal</button>
</div>

<Flower growth={ flowerGrowth } reset={resetFlower} />

<style>
  .navigation {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
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
  import { onMount } from "svelte";
  import { goto } from "$app/navigation";
  import { auth } from "../../config/firebaseConfig";
  import { onAuthStateChanged } from "firebase/auth";

  onMount(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        goto("/login"); // Redirect to login if the user is not authenticated
      } else {
        unsubscribe(); // User is authenticated, unsubscribe from the listener
      }
    });
  });
</script>

<h1>Welcome to the App</h1>
<p>This is the main app page after login.</p>

<div class="navigation">
  <button on:click={() => goto("/meditation-library")}>Meditation Library</button>
  <button on:click={() => goto("/study-corner")}>Study Corner</button>
  <button on:click={() => goto("/interactive-journal")}>Interactive Journal</button>
</div>

<style>
  .navigation {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
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
->




















<script>
  import { onMount } from "svelte";
  import { goto } from "$app/navigation";
  import { auth } from "../../config/firebaseConfig";
  import { onAuthStateChanged } from "firebase/auth";

  onMount(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        // Redirect to login if the user is not authenticated
        goto("/login");
      } else {
        // User is authenticated, unsubscribe from the listener
        unsubscribe();
      }
    });
  });
</script>

<h1>Welcome to the App</h1>
<p>This is the main app page after login.</p>
-->
