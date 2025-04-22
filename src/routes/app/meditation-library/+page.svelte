<script>
  import { onMount } from "svelte";
  import { goto } from "$app/navigation";
  import { db } from "../../../config/firebaseConfig";
  import { auth } from "../../../config/firebaseConfig";
  import { onAuthStateChanged } from "firebase/auth";
  import { collection, doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
  import { flowerGrowth } from "../../../stores/flowerGrowthStore";

  let meditationGoal = "";
  let meditationPlan = "";
  let planDuration = "";
  let planDays = "";
  let planGenerated = false;
  let planCompleted = false;

  onMount(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
      } else {
        // User is signed out
      }
    });
    return unsubscribe;
  });

  async function generatePlan() {
    if (meditationGoal === "sleep") {
      meditationPlan = generateSleepPlan();
    } else if (meditationGoal === "destress") {
      meditationPlan = generateDestressPlan(planDuration, planDays);
    } else if (meditationGoal === "relax") {
      meditationPlan = generateRelaxPlan(planDuration, planDays);
    }

    planGenerated = true;

    const user = auth.currentUser;
    if (user) {
      const userDocRef = doc(db, "users", user.uid);
      await setDoc(userDocRef, { meditationPlan, planDuration, planDays }, { merge: true });
    }
  }

  function generateSleepPlan() {
    return `To help you sleep tonight, try the following meditation plan:
    1. Find a quiet and comfortable place to sit or lie down.
    2. Close your eyes and take a few deep breaths.
    3. Focus on your breath, feeling the sensation of the air entering and leaving your nostrils.
    4. As you inhale, say to yourself "I am calm and relaxed."
    5. As you exhale, say to yourself "I let go of all tension and stress."
    6. Continue this process for 10-15 minutes, or until you feel relaxed and sleepy.`;
  }

  function generateDestressPlan(duration, days) {
    return `To help you destress, try the following meditation plan:
    1. Meditate for ${duration} minutes each day for ${days} days.
    2. Focus on your breath, feeling the sensation of the air entering and leaving your nostrils.
    3. When your mind wanders, gently bring your attention back to your breath.
    4. As you meditate, repeat the following phrases to yourself: "I am strong and capable," "I can handle whatever comes my way," and "I am at peace."
    5. Take a few deep breaths at the end of your meditation, and notice how you feel.`;
  }

  function generateRelaxPlan(duration, days) {
    return `To help you relax, try the following meditation plan:
    1. Meditate for ${duration} minutes each day for ${days} days.
    2. Focus on a calming phrase or mantra, such as "I am relaxed and at peace."
    3. Imagine yourself in a peaceful and relaxing environment, such as a beach or a forest.
    4. As you meditate, allow yourself to let go of all tension and stress.
    5. Take a few deep breaths at the end of your meditation, and notice how you feel.`;
  }

  async function completePlan() {
    planCompleted = true;
    const user = auth.currentUser;
    if (user) {
      const userDocRef = doc(db, "users", user.uid);
      await updateDoc(userDocRef, { planCompleted: true });
      updateFlowerGrowth();
    }
  }

  async function cancelPlan() {
    planGenerated = false;
    planCompleted = false;
    meditationPlan = "";
    planDuration = "";
    planDays = "";
    const user = auth.currentUser;
    if (user) {
      const userDocRef = doc(db, "users", user.uid);
      await updateDoc(userDocRef, { meditationPlan: "", planDuration: "", planDays: "", planCompleted: false });
      resetFlowerGrowth();
    }
  }

  function updateFlowerGrowth() {
    $flowerGrowth += 10;
    if ($flowerGrowth >= 100) {
      $flowerGrowth = 0;
    }
  }

  function resetFlowerGrowth() {
    $flowerGrowth = 0;
  }
</script>

<!-- ... -->

<!-- Rest of the code remains the same -->


<h1>Welcome to Meditation Library</h1>

<p>What do you want to meditate for?</p>
<select bind:value={meditationGoal}>
  <option value="relax">Relax</option>
  <option value="sleep">Sleep</option>
  <option value="destress">Destress</option>
</select>

{#if meditationGoal === "sleep"}
  <p>You will be given a plan to help you sleep tonight</p>
{/if}

{#if meditationGoal === "destress" || meditationGoal === "relax"}
  <p>How long do you want to meditate each day?</p>
  <select bind:value={planDuration}>
    <option value="5">5 minutes</option>
    <option value="10">10 minutes</option>
    <option value="15">15 minutes</option>
    <option value="20">20 minutes</option>
  </select>

  <p>For how many days do you want to meditate?</p>
  <select bind:value={planDays}>
    <option value="3">3 days</option>
    <option value="5">5 days</option>
    <option value="7">7 days</option>
    <option value="10">10 days</option>
  </select>
{/if}

<button on:click={generatePlan}>Generate Plan</button>

{#if planGenerated}
  <p>Your meditation plan: {meditationPlan}</p>
  <button on:click={completePlan}>Complete Plan</button>
  <button on:click={cancelPlan}>Cancel Plan</button>
{/if}

<style>
  /* Add some basic styling here */
</style>





<!--- Code IDK
<script>
  import { onMount } from "svelte";
  import { goto } from "$app/navigation";
  import { db } from "../../../config/firebaseConfig";
  import { auth } from "../../../config/firebaseConfig";
  import { onAuthStateChanged } from "firebase/auth";
  import { collection, doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
  import { flowerGrowth } from "../../../stores/flowerGrowthStore";


  let meditationGoal = "";
  let meditationPlan = "";
  let planDuration = "";
  let planGenerated = false;
  let planCompleted = false;

onMount(() => {
  const unsubscribe = onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in
    } else {
      // User is signed out
    }
  });
  return unsubscribe;
});


  // src/routes/app/meditation-library/+page.svelte
async function generatePlan() {
  // AI-generated plan logic goes here
  // For demonstration purposes, I'll use a simple plan
  meditationPlan = `Meditate for 10 minutes every day to ${meditationGoal}`;
  planGenerated = true;

  const user = auth.currentUser;
  if (user) {
    const userDocRef = doc(db, "users", user.uid);
    await setDoc(userDocRef, { meditationPlan, planDuration }, { merge: true });
  }
}

async function completePlan() {
  planCompleted = true;
  const user = auth.currentUser;
  if (user) {
    const userDocRef = doc(db, "users", user.uid);
    await updateDoc(userDocRef, { planCompleted: true });
    updateFlowerGrowth();
  }
}

async function cancelPlan() {
  planGenerated = false;
  planCompleted = false;
  meditationPlan = "";
  planDuration = "";
  const user = auth.currentUser;
  if (user) {
    const userDocRef = doc(db, "users", user.uid);
    await updateDoc(userDocRef, { meditationPlan: "", planDuration: "", planCompleted: false });
    resetFlowerGrowth();
  }
}


function updateFlowerGrowth() {
    $flowerGrowth += 10;
    if ($flowerGrowth >= 100) {
      $flowerGrowth = 0;
    }
  }

  function resetFlowerGrowth() {
    $flowerGrowth = 0;
  }
/*
  function getFlowerGrowth() {
    return 0;
  }

  function setFlowerGrowth(growth) {
    console.log(`Flower growth: ${growth}%`);
  }*/
</script>

<h1>Welcome to Meditation Library</h1>

<p>What do you want to meditate for?</p>
<select bind:value={meditationGoal}>
  <option value="relax">Relax</option>
  <option value="sleep">Sleep</option>
  <option value="destress">Destress</option>
</select>

<p>How long do you want your plan to last?</p>
<select bind:value={planDuration}>
  <option value="day">One day</option>
  <option value="week">One week</option>
</select>

<button on:click={generatePlan}>Generate Plan</button>

{#if planGenerated}
  <p>Your meditation plan: {meditationPlan}</p>
  <button on:click={completePlan}>Complete Plan</button>
  <button on:click={cancelPlan}>Cancel Plan</button>
{/if}

<style>
  /* Add some basic styling here */
</style>
-->