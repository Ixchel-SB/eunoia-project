<script>
  import { auth } from "../../config/firebaseConfig";
  import { createUserWithEmailAndPassword } from "firebase/auth";

  let email = "";
  let password = "";
  let confirmPassword = "";
  let errorMessage = "";
  let successMessage = "";

  async function handleSignup() {
    if (password !== confirmPassword) {
      errorMessage = "Passwords do not match.";
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log("User signed up:", user.email);
      successMessage = `Welcome, ${user.email}! Your account has been created.`;
      errorMessage = ""; // Clear previous errors
    } catch (error) {
  console.error("Error object:", error);

  if (error && typeof error === "object") {
    console.log("Error keys:", Object.keys(error)); // Only attempt if error is an object
    console.log("Error JSON:", JSON.stringify(error, null, 2)); // Safely stringify it
  } else {
    console.log("Error is not an object, it is:", typeof error, error); // For non-object errors
  }
}
}
</script>

<div class="signup-container">
  <h2>Sign Up Here</h2>
  <form on:submit|preventDefault={handleSignup}>
    <input type="email" placeholder="Email" bind:value={email} required />
    <input type="password" placeholder="Password" bind:value={password} required />
    <input type="password" placeholder="Confirm Password" bind:value={confirmPassword} required />
    <button type="submit">Sign Up</button>
  </form>

  {#if errorMessage}
    <p style="color: red;">{errorMessage}</p>
  {/if}

  {#if successMessage}
    <p style="color: green;">{successMessage}</p>
  {/if}
</div>

<style>
  .signup-container {
    padding: 30px;
    background: white;
    border: 1px solid #ddd;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    text-align: center;
  }

  input {
    display: block;
    width: 100%;
    margin: 10px 0;
    padding: 10px;
    font-size: 1rem;
  }

  button {
    padding: 10px 20px;
    font-size: 1rem;
    color: white;
    background-color: #007bff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  button:hover {
    background-color: #0056b3;
  }
</style>