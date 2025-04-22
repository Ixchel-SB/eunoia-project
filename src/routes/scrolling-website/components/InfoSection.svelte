<script>
    export let categories = [
      { title: "Relax", description: "Dive into a world of knowledge with our carefully curated articles." },
      { title: "Achieve Clarity", description: "Organize your life effortlessly with intuitive tools designed to help you takle." },
      { title: "Save Time", description: "Automate repetitive tasks and focus on what truly matters-whether it's personal growth or wanting to find a place to destress." },
      { title: "Stay Inspired", description: "With tailored features and regular insights, Eunoia helps you stay motivated and on track toward your goals." },
    ];
  </script>
  
  <div class="info-section">
    <h2>A place to think</h2>
    <div class="categories-grid">
      {#each categories as category}
        <div class="category-item">
          <h3>{category.title}</h3>
          <p>{category.description}</p>
        </div>
      {/each}
    </div>
  </div>
  
  <style>
    .info-section {
      height: auto;
      padding: 50px;
      text-align: center;
      background-color: #fff;
      color: #333;
    }
  
    .info-section h2 {
      font-size: 2rem;
      margin-bottom: 30px;
    }
  
    .categories-grid {
      display: grid;
      gap: 20px;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    }
  
    .category-item {
      background-color: #5192a3;
      color: white;
      padding: 20px;
      border-radius: 10px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }
  
    .category-item h3 {
      margin-bottom: 10px;
      font-size: 1.25rem;
    }
  
    .category-item p {
      font-size: 1rem;
    }
  </style>