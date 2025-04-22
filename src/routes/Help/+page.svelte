<script>
  import { onMount } from 'svelte';

  // Help categories
  let categories = [
      { id: "faq", title: "Top FAQ", description: "Get quick answers to frequently asked questions about our products, services, and policies.", link: "/help/faq" },
      { id: "getting-started", title: "Getting Started", description: "Explore basic info and guidance for new members or returning users.", link: "/help/getting-started" },
      { id: "subscriptions", title: "Subscriptions & Billing", description: "Manage subscriptions, update payment details, and handle billing.", link: "/help/subscriptions" },
      { id: "account", title: "Account Management", description: "Manage your account and profile settings.", link: "/help/account" },
      { id: "troubleshooting", title: "Troubleshooting", description: "Fix issues with the app or website and report technical problems.", link: "/help/troubleshooting" },
      { id: "scheduling", title: "Scheduling Care", description: "Find essential info, troubleshooting, and instructions for booking.", link: "/help/scheduling" }
  ];
</script>

<style>
  body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 0;
      background-color: #f5f5f5;
      text-align: center;
  }

  header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem 2rem;
      background-color: #fff;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  h1 {
      font-size: 1.8rem;
      color: #333;
  }

  .help-section {
      max-width: 900px;
      margin: auto;
      padding: 2rem;
      background: white;
      border-radius: 8px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  .category-container {
      display: grid;
      grid-template-columns: repeat(3, 1fr); /* Two rows of three boxes */
      gap: 1rem;
      padding-top: 2rem;
      justify-items: center;
  }

  .category {
      background: white;
      padding: 1.5rem;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      text-decoration: none;
      color: #333;
      display: block;
      width: 250px;
      height: 150px;
      transition: transform 0.2s ease, background-color 0.2s ease;
      text-align: center;
  }

  .category:hover {
      background: #eef;
      transform: translateY(-5px);
  }
</style>

<header>
  <h1>Eunoia Help Center</h1>
</header>

<main>
  <section class="help-section">
      <h2>How Can We Assist You?</h2>
      <p>Browse through different topics to find solutions and resources.</p>

      <div class="category-container">
          {#each categories as category}
              <a class="category" href="{category.link}">
                  <h3>{category.title}</h3>
                  <p>{category.description}</p>
              </a>
          {/each}
      </div>
  </section>
</main>








<!---
<script>
    // Any specific JavaScript logic for the Help page can go here
  </script>
  
  <header>
    <h1>Eunoia</h1>
    <nav>
      <a href="/">Home</a>
      <a href="/About">About</a>
      <a href="/Articles">Articles</a>
      <a href="/Wellness">Wellness</a>
    </nav>
  </header>
  
  <main>
    <section class="help-section">
      <section class="section background-image">
      </section>
      <h2>Need Help?</h2>
      <p>Welcome to the Help page. Here, you can find answers to common questions and resources to assist you.</p>
      <ul>
        <li><a href="#faq">Frequently Asked Questions</a></li>
        <li><a href="#contact">Contact Support</a></li>
        <li><a href="#resources">Useful Resources</a></li>
      </ul>
    </section>
  </main>


  <style>
  .background-image {
      padding: 10px;
      color: rgb(255, 255, 255);
      background-image: url(lotusHelp.jpg); /* Replace with your image path */
      background-size: cover; /* Make sure the image covers the entire section */
      background-position: center; /* Center the image */
      height: 700px;
      background-repeat: no-repeat;
    }

    header {
      display: flex;
      align-items: center;
      padding: 1rem 2rem;
      background-color: #f8f8f8;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
  
    h1 {
      font-size: 1.5rem;
      margin: 0;
      margin-right: 4rem; /* Increased spacing for separation */
    }
  
    nav {
      display: flex;
      gap: 2rem; /* Increased spacing between navigation links */
    }
  
    nav a {
      text-decoration: none;
      color: #333;
      font-weight: bold;
      transition: color 0.2s ease;
    }
  
    nav a:hover {
      color: #0070f3;
    }
  
    main {
      padding: 2rem;
      font-family: Arial, sans-serif;
    }
  
    .help-section {
      max-width: 800px;
      margin: 0 auto;
      text-align: center;
    }
  
    .help-section h2 {
      font-size: 2rem;
      margin-bottom: 1rem;
    }
  
    .help-section p {
      font-size: 1.2rem;
      margin-bottom: 1.5rem;
    }
  
    .help-section ul {
      list-style: none;
      padding: 0;
    }
  
    .help-section ul li {
      margin-bottom: 0.5rem;
    }
  
    .help-section ul li a {
      text-decoration: none;
      color: #0070f3;
      transition: color 0.2s ease;
    }
  
    .help-section ul li a:hover {
      color: #0056b3;
    }
  </style>
-->