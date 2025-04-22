<!-- About Eunoia Section -->
<section class="about-eunoia">
  <h2>About Eunoia</h2>
  <p>
    Eunoia's mission is to create a haven where individuals can access reliable tools 
    that support and empower them in managing tasks with confidence. As your personalized 
    self-care companion, Eunoia is designed to nurture your mind, body, and spirit. With 
    tailored resources and thoughtful features, it guides you toward a healthier, more balanced 
    life, helping you thrive every day.
  </p>
</section>

<!-- Information Section -->
<section class="information-eunoia">
  <div class="info-content">
    <!--Image on the left-->
    <div class="info-box image-box"></div>

    <!-- Text Content -->
    <div class="info-box text-box">
      <h2 class="title">Eunoia</h2>
      <p class="description">We dedicated to empowering students with tools for balance and focus in 
        their everyday lives. Our app combines guided meditation practices with a dedicated study corner, 
        offering a supportive environment to engance productivity and well-being. By integrating mindfulness 
        exercises and student-centered features, and create sustainable habits for success. Together, we aim 
        to cultivate a calmer, more focused journey through academic and personal growth.
      </p>
    </div>
  </div>
</section>

<!-- Boxes Section -->
<section class="eunoia-boxes">
  <h3>Meditation</h3>
  <div class="box">A calming space designed to help students cultivate mindfulness and reduce stress. With 
    guided meditations, breathing exercises, and relaxation techniques, this feature supports mental clarity 
    and emotional balance, empowering students to tackle their daily challenges with a sense of calm and focus.
  </div>
  
  <h3>Study Corner</h3>
  <div class="box">A dedicated area tailored to boost productivity and focus during study sessions. With features 
    like customizable timers, concentration-enhancing soundscapes, and organizational tools, the Study Corner creates 
    an environment that encourages efficient learning and academic success.
  </div>
  
  <h3>Journaling</h3>
  <div class="box">A thoughtful tool for reflection and self-expression. Students can capture their thoughts, 
    set goals, track their progress, and process their emotions in a structured yet personal way. Journaling 
    promotes emotional well-being and encourages a deeper connection with oneself
  </div>
</section>

<style>
/*---About Eunoia---*/
.about-eunoia { 
    padding: 10px; /* Add padding to give space inside the section */
    /*border-radius: 10px;*/
    color: rgb(255, 255, 255);
    background-image: url(dayskyAbout.jpg); /* Replace with your image path */
    background-size: center; /* Make sure the image covers the entire section */
    background-position: center; /* Center the image */
    height: 800px;
    background-repeat: no-repeat; /* Prevent repeating the image */
  }

  .about-eunoia h2 {
    margin-bottom: 100px;
    font-size: 5rem;
  }

  .about-eunoia p {
    font-size: 1.2rem;
    line-height: 1.6;
  }

/*--Information--*/
  .information-eunoia {
    margin-bottom: 20px 0;
    padding: 20px;
    border: 1px solid #ffffff; /* Optional border color */
    border-radius: 10px;
    background-color: #ffffff; /* Optional background color */
  }

  .information-eunoia h2 {
    margin-bottom: 20px;
    color: #4f4f4f;
    font-size: 1.8rem;
    text-align: center;
  }

  .info-content {
    display: flex;
    gap: 20px;
    align-items: center;
  }

  /*Image Box Styling*/
  .image-box {
    flex: 0 0 400px;
    margin-left: 100px;
    height: 500px;
    background-image: url(tree.jpg);
    background-size: cover;
    background-position: center;
    /*border: 1px solid #ffffff;*/
    border-radius: 10px;
    /*box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);*/
  }

/*Text Box Styling*/
  .text-box {
    width: 500px;
    height: 460px;
    background-color: #ffffff;
    border: 1px solid #ffffff;
    border-radius: 10px; /*Border curve*/
    /*box-shadow: 0 4px 6px rgba(255, 255, 255, 0.696);*/
    font-size: 1rem;
    line-height: 1.5;
    color: #ffffff;
    padding: 20px;
    margin-left: 100px; /*Text left or right*/
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .title {
    margin: 0 0 10px 0;
    font-size: 2rem;
    font-weight: bold;
    color: #333;
  }

  .description {
    margin: 0;
    font-size: 1.5rem;
    line-height: 1.5;
    color: #c7ae4a;
  }

  @media (max-width: 768px) {
    .info-content {
      flex-direction: column;
    }

    .image-box {
      width: 100%;
    }

    .text-box {
      width: 100%;
      text-align: center;
    }
  }

  /* Boxes Section Styling */
  .eunoia-boxes {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .eunoia-boxes h3 {
    text-align: center; /* Centers the heading for each box */
    margin-bottom: 10px; /* Adds some spacing below the heading */
    font-size: 1.5rem;
    color: #333;
  }

  .box {
  display: flex; /* Enables flexbox for text centering */
  justify-content: center; /* Centers content horizontally */
  align-items: center; /* Centers content vertically */
  text-align: center; /* Ensures multi-line text is centered */
  margin-bottom: 20px;
  padding: 20px;
  width: 550px; /*width of the box*/
  height: 150px; /* Keep height proportional */
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: #F0E3AB; /* Optional: Light background color */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Optional: Adds shadow for depth */
  font-size: 1rem;
  color: #555;
}

  /* Adjustments for Smaller Screens */
  @media (max-width: 768px) {
    .box {
      height: auto;
      padding: 15px; /* Reduces padding on smaller screens */
    }
  }
</style>