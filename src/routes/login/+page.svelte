<script>
  import { auth } from "../../config/firebaseConfig";
  import { signInWithEmailAndPassword } from "firebase/auth";
  import { goto } from "$app/navigation";

  let email = "";
  let password = "";
  let errorMessage = "";

  async function handleLogin() {
    console.log("Login button clicked");
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log("User logged in successfully:", userCredential.user);
      alert(`Welcome back, ${userCredential.user.email}`);
      errorMessage = "";
      console.log("Redirecting to /app...");
      await goto("/app", { replaceState: true }); // Try using replaceState: true
    } catch (error) {
      console.error("Error during login:", error);
      if (error instanceof Error) {
        errorMessage = `Error: ${error.message}`;
      } else {
        errorMessage = "An unknown error occurred.";
      }
    }
  }
</script>

<div class="login-box">
  <h2>Login Here</h2>
  <form on:submit|preventDefault={handleLogin}>
    <input type="email" placeholder="Gmail" bind:value={email} required />
    <input type="password" placeholder="Password" bind:value={password} required />
    <button type="submit">Log In</button>
  </form>
  {#if errorMessage}
    <p style="color: red;">{errorMessage}</p>
    <p style="color: red;">Check the console for more details.</p>
  {/if}
</div>

<style>
  .login-box {
    max-width: 400px;
    margin: 50px auto;
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
    background-color: #00ff2a;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    width: 100%;
  }

  button:hover {
    background-color: #16589e;
  }
</style>

















<!-- Rest of your code remains the same -->

<!--
<style>
  .login-box {
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
    background-color: #00ff2a;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  button:hover {
    background-color: #16589e;
  }
</style>
-->