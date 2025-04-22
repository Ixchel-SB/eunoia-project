
<script lang="ts">
  import { auth } from '../config/firebaseConfig';
  import { signInWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth';
  import { goto } from '$app/navigation';

  import AppInfoSection from './scrolling-website/components/AppInfoSection.svelte';
  import InfoSection from './scrolling-website/components/InfoSection.svelte';
  import InteractiveBoxes from './scrolling-website/components/InteractiveBoxes.svelte';
  import Questions from './scrolling-website/components/Questions.svelte';

  let email = "";
  let password = "";
  let errorMessage = "";
  let infoMessage = "";

  async function handleLogin() {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log("User logged in successfully:", userCredential.user);
      errorMessage = "";
      infoMessage = "";
      await goto("/app");
    } catch (error) {
      console.error("Error during login:", error);
      if (error instanceof Error) {
        errorMessage = `Error: ${error.message}`;
      } else {
        errorMessage = "An unknown error occurred.";
      }
    }
  }

  async function handleForgotPassword() {
    if (!email) {
      errorMessage = "Please enter your email to reset your password.";
      infoMessage = "";
      return;
    }

    try {
      await sendPasswordResetEmail(auth, email);
      infoMessage = "Password reset email sent. Check your inbox.";
      errorMessage = "";
    } catch (error) {
      console.error("Error sending password reset email:", error);
      if (error instanceof Error) {
        errorMessage = `Error: ${error.message}`;
      } else {
        errorMessage = "Failed to send reset email.";
      }
      infoMessage = "";
    }
  }

  function togglePassword() {
    const passwordInput = document.getElementById("password") as HTMLInputElement;
    passwordInput.type = passwordInput.type === "password" ? "text" : "password";
  }
</script>

<div class="layout-container">
<!--INSTALL-->
<div class="install-sidebar">
  <a href="/Install">⬇ Download App</a>
</div>



  <div class="login-container">
    <div class="login-box">
      <h2>Login Here</h2>
      <form on:submit|preventDefault={handleLogin}>
        <input type="email" placeholder="Email" bind:value={email} required />

        <div class="password-container">
          <input
            type="password"
            id="password"
            placeholder="Password"
            bind:value={password}
            required
          />
        </div>

        <button type="submit">Log In</button>
      </form>

      {#if errorMessage}
        <p class="error">{errorMessage}</p>
      {/if}

      {#if infoMessage}
        <p class="info">{infoMessage}</p>
      {/if}

      <!-- Forgot Password -->
      <button on:click={handleForgotPassword} class="forgot-btn">Forgot Password?</button>

      <div class="create-account">
        <p>Don't have an account?</p>
        <a href="/signup">Create an Account</a>
      </div>
    </div>
  </div>

  <div class="scrolling-container">
    <section id="info-section">
      <InfoSection />
    </section>
    <section id="interactive-boxes">
      <InteractiveBoxes />
    </section>
    <section id="questions">
      <Questions />
    </section>
    <section id="app-info-section">
      <AppInfoSection />
    </section>
  </div>
</div>

<style>
  /*Install*/
.layout-container {
    position: relative;
  }

  .install-sidebar {
    position: absolute;
    left: 30px;
    top: 30px;
    background-color: rgba(255, 255, 255, 0.85);
    padding: 10px 15px;
    border-radius: 8px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
    z-index: 10;
  }

  .install-sidebar a {
    text-decoration: none;
    color: #0031f3;
    font-weight: bold;
  }
/*Install*/














  .login-container {
    position: relative;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-bottom: 20px;
    background-image: url(BackgroundMain.jpg);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 1000px;
  }

  .login-box {
    position: absolute;
    z-index: 1;
    padding: 30px;
    width: 400px;
    height: auto;
    background: rgba(255, 255, 255, 0.9);
    border: 1px solid #ddd;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    text-align: center;
    margin-right: 90px;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
  }

  input[type="email"],
  input[type="password"] {
    font-size: 18px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    width: 100%;
    box-sizing: border-box;
  }

  .password-container {
    position: relative;
    width: 100%;
  }

  button {
    font-size: 18px;
    padding: 10px 15px;
    width: 50%;
    background-color: #0031f3;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  button:hover {
    background-color: #0056b3;
  }

  .forgot-btn {
    background: none;
    color: #0077cc;
    text-decoration: underline;
    border: none;
    margin-top: 10px;
    font-size: 0.9rem;
    cursor: pointer;
  }

  .forgot-btn:hover {
    color: #004d99;
  }

  .create-account {
    margin-top: 20px;
  }

  .create-account p {
    margin-bottom: 10px;
  }

  a {
    text-decoration: none;
    color: blue;
  }

  a:hover {
    text-decoration: underline;
  }

  .error {
    color: red;
    margin-top: 10px;
  }

  .info {
    color: green;
    margin-top: 10px;
  }
</style>


























<!--THIS CODE WORK-->
<!--
<script lang="ts">
  import { auth } from '../config/firebaseConfig';
  import { signInWithEmailAndPassword } from 'firebase/auth';
  import { goto } from '$app/navigation';

  import AppInfoSection from './scrolling-website/components/AppInfoSection.svelte';
  import InfoSection from './scrolling-website/components/InfoSection.svelte';
  import InteractiveBoxes from './scrolling-website/components/InteractiveBoxes.svelte';
  import Questions from './scrolling-website/components/Questions.svelte';

  let email = "";
  let password = "";
  let errorMessage = "";

  async function handleLogin() {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log("User logged in successfully:", userCredential.user);
      errorMessage = "";
      await goto("/app");
    } catch (error) {
      console.error("Error during login:", error);
      if (error instanceof Error) {
        errorMessage = `Error: ${error.message}`;
      } else {
        errorMessage = "An unknown error occurred.";
      }
    }
  }

  function togglePassword() {
    const passwordInput = document.getElementById("password") as HTMLInputElement;
    passwordInput.type = passwordInput.type === "password" ? "text" : "password";
  }
</script>

<div class="layout-container">
  <div class="login-container">
    <div class="login-box">
      <h2>Login Here</h2>
      <form on:submit|preventDefault={handleLogin}>
        <!-- Email Input --
        <input type="email" placeholder="Email" bind:value={email} required />

        <div class="password-container">
          <input
            type="password"
            id="password"
            placeholder="Password"
            bind:value={password}
            required
          />
          <!--<span class="toggle-password" on:click={togglePassword}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M12 5C7 5 3.4 8.1 2 12c1.4 3.9 5 7 10 7s8.6-3.1 10-7c-1.4-3.9-5-7-10-7z"></path>
              <circle cx="12" cy="12" r="3"></circle>
            </svg>
          </span>--------------
        </div>
        
        <!-- Log In Button --
        <button type="submit">Log In</button>
      </form>
      {#if errorMessage}
        <p style="color: red;">{errorMessage}</p>
      {/if}
      <div class="create-account">
        <p>Don't have an account?</p>
        <a href="/signup">Create an Account</a>
      </div>
    </div>
  </div>

  <div class="scrolling-container">
    <!-- Info Section (Top) --
    <section id="info-section">
      <InfoSection />
    </section>

    <!-- Interactive Boxes Section (Middle) --
    <section id="interactive-boxes">
      <InteractiveBoxes />
    </section>

    <!-- Questions Section --
    <section id="questions">
      <Questions />
    </section>

    <!-- App Info Section --
    <section id="app-info-section">
      <AppInfoSection />
    </section>
  </div>
</div>

<style>
  .login-container {
    position: relative;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-bottom: 20px;

    /* Background Image */
    background-image: url(BackgroundMain.jpg);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 1000px;
  }

  .login-box {
    position: absolute;
    z-index: 1;
    padding: 30px;
    width: 400px;
    height: 500px;
    background: rgba(255, 255, 255, 0.9);
    border: 1px solid #ddd;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    text-align: center;
    margin-right: 90px;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center; /* Center all elements, including the button */
    gap: 15px; /* Add spacing between inputs and the button */
  }

  input[type="email"],
  input[type="password"] {
    font-size: 18px; /* Consistent font size */
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    width: 100%; /* Both inputs will match 100% of their container width */
    box-sizing: border-box; /* Ensures padding doesn't affect width */
  }

  .password-container {
  position: relative;
  width: 100%;
}

.password-container input {
  font-size: 18px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
  box-sizing: border-box;
}

/*.toggle-password {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  user-select: none;
  display: flex;
  align-items: center;
  justify-content: center;
}

.toggle-password svg {
  width: 20px; /* Adjust size as needed /
  height: 20px;
  stroke: #666; /* Adjust icon color /
}*/

  button {
    font-size: 18px; /* Make button consistent with inputs */
    padding: 10px 15px;
    width: 50%; /* Centered button size */
    background-color: #0031f3;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  button:hover {
    background-color: #0056b3;
  }

  .create-account {
    margin-top: 30px;
  }

  .create-account p {
    margin-bottom: 10px;
  }

  a {
    text-decoration: none;
    color: blue;
  }

  a:hover {
    text-decoration: underline;
  }
</style>





























<!--<script lang="ts">
  import { auth } from '../config/firebaseConfig';
  import { signInWithEmailAndPassword } from 'firebase/auth';
  import { goto } from '$app/navigation';

  import AppInfoSection from './scrolling-website/components/AppInfoSection.svelte';
  import InfoSection from './scrolling-website/components/InfoSection.svelte';
  import InteractiveBoxes from './scrolling-website/components/InteractiveBoxes.svelte';

  let email = "";
  let password = "";
  let errorMessage = "";

  async function handleLogin() {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log("User logged in successfully:", userCredential.user);
      errorMessage = "";
      await goto("/app");
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

<div class="layout-container">
  <div class="login-container">
    <div class="login-box">
      <h2>Login Here</h2>
      <form on:submit|preventDefault={handleLogin}>
        <input type="email" placeholder="Email" bind:value={email} required />
        <input type="password" placeholder="Password" bind:value={password} required />
        <button type="submit">Log In</button>
      </form>
      {#if errorMessage}
        <p style="color: red;">{errorMessage}</p>
      {/if}
      <div class="create-account">
        <p>Don't have an account?</p>
        <a href="/signup">Create an Account</a>
      </div>
    </div>
  </div>

  <div class="scrolling-container">
    <!-- Info Section (Top) --
    <section id="info-section">
      <InfoSection />
    </section>

    <!-- Interactive Boxes Section (Middle) --
    <section id="interactive-boxes">
      <InteractiveBoxes />
    </section>

    <!-- App Info Section (Bottom) --
    <section id="app-info-section">
      <AppInfoSection />
    </section>
  </div>
</div>

<style>
  .login-container {
    position: relative;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-bottom: 20px;

    /* Background Image */
    background-image: url(land.jpg);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 1000px;
  }

  .login-box {
    position: absolute;
    z-index: 1;
    padding: 30px;
    width: 400px;
    height: 500px;
    background: rgba(255, 255, 255, 0.9); /* Semi-transparent white for readability */
    border: 1px solid #ddd;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    text-align: center;
    margin-right: 90px; /* Gap from the right edge */
  }

  form {
    display: flex;
    flex-direction: column; /* Stack inputs vertically */
    align-items: center;
    gap: 15px; /* Add space between input fields */
  }

  input[type="email"], input[type="password"] {
    font-size: 18px; /* Increase the text size */
    padding: 10px; /* Add more space inside the input field */
    border: 1px solid #ccc; /* Styling for the border */
    border-radius: 5px; /* Rounded corners */
    width: 100%; /* Adjust the input width */
  }

  button {
    font-size: 18px; /* Increase button text size */
    padding: 10px 15px; /* Adjust padding for the button */
    width: 50%; /* Full width button */
    background-color: #0031f3;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  button:hover {
    background-color: #b35f00; /* Darker shade for hover effect */
  }

  .create-account {
    margin-top: 30px; /* Add more space above "Don't have an account?" */
  }

  .create-account p {
    margin-bottom: 10px; /* Add space between "Don't have an account?" and the link */
  }

  a {
    text-decoration: none;
    color: blue;
  }

  a:hover {
    text-decoration: underline;
  }
</style>
-->










<!--
  .layout-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
  }

  .login-container {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 20px;

    /*Background
    border-radius: 0px;
    background-image: url(land.jpg);
    background-size: cover;
    background-position: center;
    height: 900px;
    background-repeat: no-repeat;
  }

  .login-box {
    padding: 30px;
    background: white;
    border: 1px solid #ddd;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    text-align: center;
    width: 400px;
  }
-->
















<!----
<script lang="ts">
  import { goto } from '$app/navigation';

  // Import scrolling-website components
  import AppInfoSection from './scrolling-website/components/AppInfoSection.svelte';
  import InfoSection from './scrolling-website/components/InfoSection.svelte';
  import InteractiveBoxes from './scrolling-website/components/InteractiveBoxes.svelte';

  import { goto } from '$app/navigation';

  function goToLogin() {
    goto('/login'); // Redirect to the login page
  }

  function goToSignup() {
    goto('/signup'); // Redirect to the signup page
  }
</script>

<div class="layout-container">
  <div class="hero-section">
    <h1>Welcome to Eunoia Project</h1>
    <p>Discover the features and benefits of our application.</p>
    <button on:click={goToLogin}>Log In</button>
    <button on:click={goToSignup}>Sign Up</button>
  </div>
</div>

<div class="scrolling-container"> -->
  <!-- Info Section (Top) -->  <!--
  <section id="info-section">
    <InfoSection />
  </section> -->

  <!-- Interactive Boxes Section (Middle) -->  <!--
  <section id="interactive-boxes">
    <InteractiveBoxes />
  </section>  -->

  <!-- App Info Section (Bottom) -->  <!--
  <section id="app-info-section">
    <AppInfoSection />
  </section>
</div>


<style>
  /* Main layout container */
  .layout-container {
    display: flex; justify-content: flex-end;
    align-items: flex-start;
    height: 100vh; background-color: #f7f7f7;
    padding-top: 100px;
    padding-right: 100px;
  }

/* Styling for Scrolling Website Container */
.scrolling-container{
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  width: 100%;
}

  .scrolling-container section {
    width: 100%;
    padding: 20px;
    margin-bottom: 20px;
    border: 1px solid #ddd;
    border-radius: 10px;
    background-color: #f9f9f9;
  }

  /* Input fields */
  input {
    display: block;
    width: calc(100% - 20px); /* Full width */
    margin: 10px auto;
    padding: 10px; /* Uniform padding */
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 1rem;
  }

  /* Forgot Password */
  .forgot-password {
    text-align: right; /* Align link to the right */
    margin-bottom: 10px;
  }

  .forgot-password a {
    color: #007bff;
    font-size: 0.9rem;
    text-decoration: none;
  }

  .forgot-password a:hover {
    text-decoration: underline;
  }

  /* Buttons */
  button {
    background-color: #007bff;
    color: white;
    padding: 10px;
    border: none;
    border-radius: 20cm; /* Same rounded corners */
    cursor: pointer;
    width: 100%; /* Full width */
    margin-top: 10px;
    font-size: 1rem;
  }

  button:hover {
    background-color: #0056b3;
  }

  /* Create account section */
  .create-account p {
    margin-top: 20px;
    font-size: 0.9rem;
    color: #555;
  }

  .create-account a {
    display: inline-block;
    margin-top: 10px;
    color: #007bff;
    text-decoration: none;
    font-weight: bold;
  }

  .create-account a:hover {
    text-decoration: underline;
  }
</style>
-->





























