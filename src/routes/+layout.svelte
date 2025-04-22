<!-- src/routes/+layout.svelte -->
<script>
  import { page } from '$app/stores';

  //Track the route path
  $: currentRoute = $page.url.pathname;

</script>

<!--import { goto} from '$app/navigation';-->
  
  <!--Conditionally render navigation only if the user is NOT in /app routes-->
  {#if !currentRoute.startsWith("/app")}
  <header>
    <h1>Eunoia</h1>
    <nav>
      <!-- Ensure the hrefs match your folder names (case-sensitive) -->
      <a href="/">Home</a>
      <a href="/About">About</a>
      <a href="/Articles">Articles</a>
      <a href="/Wellness">Wellness</a>
      <a href="/Help">Help</a>
    </nav>
  </header>
  {/if}
  
  <!-- This slot will render the content of the current route -->
  <slot />

  <style>
    /*header {
      display: flex;
      align-items: center;
      padding: 1rem 2rem;
      background-color: #f8f8f8;
      /* Optional: add a box-shadow, border-bottom, etc. /
    }
    
    h1 {
      font-size: 1.5rem;
      margin: 0;
      margin-right: 2rem; /* Spacing between the title and nav /
    }
    
    nav {
      display: flex;
      gap: 1rem;
    }
    
    nav a {
      text-decoration: none;
      color: #333;
      font-weight: bold;
      transition: color 0.2s ease;
    }
    
    nav a:hover {
      color: #0070f3;
    }*/


    header {
  display: flex;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #f8f8f8;
  /* Optional: add a box-shadow, border-bottom, etc. */
}

h1 {
  font-size: 1.5rem;
  margin: 0;
  margin-right: 4rem; /* Increase spacing between the logo and nav */
}

nav {
  display: flex;
  gap: 2rem; /* Increase spacing between menu items */
}

nav a {
  text-decoration: none;
  color: #333;
  font-weight: bold;
  transition: color 0.2s ease;
}

nav a:hover {
  color: #0070f3; /* Add hover effect */
}
  </style>
  