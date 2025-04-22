<script>
  export let sections = [
    {
      title: "Get Eunoia",
      links: ["Download on the App Store", "Get it on Google Play"]
    },
    {
      title: "Our Content",
      links: [
        "Meditation app",
        "Articles & Videos",
        "Focus tools",
        "Sleep music"
      ]
    },
    {
      title: "About Us",
      links: [
        "Our Mission",
        "Our Team",
        "Careers",
        "Contact"
      ]
    },
    {
      title: "Support",
      links: [
        "Help Center",
        "FAQs",
        "Security",
        "Community Guidelines"
      ]
    }
  ];
</script>

<footer class="eunoia-footer">
  <!-- ✅ Stay in the loop section -->
  <div class="newsletter-section">
    <div class="newsletter-text">
      <h2>Stay in the loop</h2>
      <p>Be the first to get updates on our latest content, special offers, and new features.</p>
      <p class="disclaimer">
        By signing up, you’re agreeing to receive marketing emails from Eunoia.
        You can unsubscribe at any time. For more details, check out our
        <a href="#">Privacy Policy</a>.
      </p>
    </div>
  </div>

  <hr />

  <!-- ✅ Footer grid sections -->
  <div class="footer-grid">
    {#each sections as section}
      <div class="footer-column">
        <h3>{section.title}</h3>
        <ul>
          {#each section.links as link}
            <li><a href="#">{link}</a></li>
          {/each}
        </ul>
      </div>
    {/each}
  </div>
</footer>

<style>
  .eunoia-footer {
    background-color: #f9f6f3;
    padding: 50px 60px;
    font-family: sans-serif;
  }

  .newsletter-section {
    margin-bottom: 30px;
  }

  .newsletter-text h2 {
    font-size: 24px;
    margin-bottom: 10px;
    color: #222;
  }

  .newsletter-text p {
    font-size: 14px;
    max-width: 600px;
    margin: 8px 0;
    color: #444;
  }

  .newsletter-text .disclaimer a {
    color: #0031f3;
    text-decoration: underline;
  }

  hr {
    border: none;
    height: 1px;
    background: #ddd;
    margin: 30px 0;
  }

  .footer-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 40px;
  }

  .footer-column h3 {
    font-size: 18px;
    margin-bottom: 15px;
    color: #222;
  }

  .footer-column ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .footer-column li {
    margin-bottom: 10px;
  }

  .footer-column a {
    text-decoration: none;
    color: #333;
    font-size: 15px;
  }

  .footer-column a:hover {
    text-decoration: underline;
    color: #0031f3;
  }
</style>


















<!--
<script>
    export let sections = [
      { title: "Get Eunoia", content: "Download Eunoia today from the App Store or Google Play and start exploring!" },
      { title: "Our Content", content: "Eunoia offers curated content tailored to your interests, from articles to videos." },
      { title: "About Us", content: "Our team is passionate about making knowledge accessible to everyone, everywhere." },
      { title: "Support", content: "Need help? Visit our support page or reach out to us for assistance." },
    ];
  </script>
  
  <div class="app-info-section">
    <h2>About Eunoia</h2>
    <div class="info-grid">
      {#each sections as section}
        <div class="info-item">
          <h3>{section.title}</h3>
          <p>{section.content}</p>
        </div>
      {/each}
    </div>
  </div>
  
  <style>
    .app-info-section {
      height: auto;
      padding: 50px;
      background-color: #f8f9fa;
      text-align: center;
    }
  
    .app-info-section h2 {
      font-size: 2rem;
      margin-bottom: 20px;
      color: #333;
    }
  
    .info-grid {
      display: grid;
      gap: 20px;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      margin-top: 20px;
    }
  
    .info-item {
      background-color: #007bff;
      color: white;
      padding: 20px;
      border-radius: 10px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }
  
    .info-item h3 {
      margin-bottom: 10px;
      font-size: 1.25rem;
    }
  
    .info-item p {
      font-size: 1rem;
    }
  </style>
-->
