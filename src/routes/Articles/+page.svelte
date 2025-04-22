<!-- Eunoia Articles Section -->
<section class="eunoia-articles">
  <!-- About Articles Section -->
  <div class="about-articles-box">
    <h2>About Articles</h2>
    <p>Learn more about the ideas and inspiration behind Eunoia through our featured articles.</p>
  </div>

  <!-- Meditation Articles Section -->
  <div class="meditation-articles">
    <h2>Meditation Articles</h2>
    <div class="articles-grid">
      <div class="article-box">Meditation Article 1</div>
      <div class="article-box">Meditation Article 2</div>
      <div class="article-box">Meditation Article 3</div>
    </div>
  </div>

  <!-- Study Articles Section -->
  <div class="study-articles">
    <h2>Study Articles</h2>
    <div class="articles-grid">
      <div class="article-box">Study Article 1</div>
      <div class="article-box">Study Article 2</div>
      <div class="article-box">Study Article 3</div>
    </div>
  </div>
</section>

<style>
  /* Overall Section Styling */
  .eunoia-articles {
    /*margin: 20px;
    padding: 20px;*/
    border-radius: 10px;
    background-color: #f9f9f9; /* Optional background color */
    font-family: Arial, sans-serif;
  }

  /* About Articles Box Styling with Background Image */
  .about-articles-box {
    padding: 40px;
    border-radius: 0px;
    color: rgb(255, 255, 255);
    background-image: url(Articles.jpg);
    background-size: cover;
    background-position: center;
    height: 700px;
    background-repeat: no-repeat;
  }

  .about-articles-box h2 {
    margin-bottom: 20px; /* Space between title and paragraph */
    font-size: 5rem;
  }

  .about-articles-box p {
    font-size: 1.2rem;
    line-height: 7.6;
  }

  /* Meditation and Study Articles Section */
  .meditation-articles, .study-articles {
    margin-top: 40px;
  }

  .meditation-articles h2, .study-articles h2 {
    text-align: center;
    font-size: 2rem;
    color: #000000;
    margin-bottom: 20px;
  }

  /* Grid Layout for Articles */
  .articles-grid {
    display: flex; /* Enables grid layout for boxes */
    justify-content: center; /* Centers the boxes horizontally */
    gap: 20px; /* Adds space between boxes */
    flex-wrap: wrap; /* Ensures boxes wrap on smaller screens */
  }

  /* Article Box Styling */
  .article-box {
    display: flex; /* Flexbox for centering content */
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 250px; /* Width of each box */
    height: 150px; /* Height of each box */
    border: 1px solid #46afc6;
    border-radius: 10px; /* Rounded corners */
    background-color: #8ebfde; /* Light background */
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Shadow for depth */
    font-size: 1rem;
    color: #000000;
    padding: 10px;
  }

  /* Responsive Design for Smaller Screens */
  @media (max-width: 768px) {
    .article-box {
      width: 80%; /* Make boxes full width on smaller screens */
    }

    .articles-grid {
      gap: 10px; /* Reduce gap between boxes */
    }
  }
</style>