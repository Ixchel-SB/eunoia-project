<script lang="ts">
  let faqs = [
    {
      question: 'What is Eunoia?',
      answer: 'Eunoia is a mindfulness and wellness platform designed to help you find balance and mental clarity.',
      open: false
    },
    {
      question: 'What is Eunoia’s mission?',
      answer: 'Our mission is to make mental wellness accessible and simple for everyone.',
      open: false
    },
    {
      question: 'How do I download the Eunoia app?',
      answer: 'You can download the Eunoia app from the App Store or Google Play.',
      open: false
    },
    {
      question: 'What is included in a Eunoia subscription?',
      answer: 'You’ll get access to guided meditations, journals, calendar syncing, and more.',
      open: false
    },
    {
      question: 'How much does Eunoia cost?',
      answer: 'We offer both free and premium plans. Premium includes full access to all features.',
      open: false
    },
    {
      question: 'Does my Eunoia subscription automatically renew?',
      answer: 'Yes, your subscription renews monthly or annually depending on your plan.',
      open: false
    },
    {
      question: 'How do I cancel my Eunoia subscription?',
      answer: 'You can cancel anytime through your account settings in the app.',
      open: false
    },
    {
      question: 'How can I support my team’s mental health at work?',
      answer: 'Eunoia offers team and enterprise plans for employee wellness. Contact us for more info.',
      open: false
    }
  ];

  function toggle(index: number) {
    faqs = faqs.map((faq, i) => i === index ? { ...faq, open: !faq.open } : faq);
  }
</script>

<div class="faq-container">
  <h1>Frequently asked questions</h1>

  {#each faqs as faq, index}
    <div
      class="faq-item"
      role="button"
      tabindex="0"
      on:click={() => toggle(index)}
      on:keydown={(e) => e.key === 'Enter' && toggle(index)}
      aria-expanded={faq.open}
    >
      <div class="faq-question">
        <span>{faq.question}</span>
        <span class="icon">{faq.open ? '−' : '+'}</span>
      </div>
      {#if faq.open}
        <div class="faq-answer">{faq.answer}</div>
      {/if}
    </div>
  {/each}
</div>

<style>
  .faq-container {
    max-width: 800px;
    margin: 40px auto;
    padding: 0 20px;
    font-family: sans-serif;
  }

  h1 {
    text-align: center;
    font-size: 28px;
    margin-bottom: 30px;
  }

  .faq-item {
    border-top: 1px solid #ddd;
    padding: 20px 0;
    cursor: pointer;
  }

  .faq-question {
    display: flex;
    justify-content: space-between;
    font-size: 18px;
    font-weight: 500;
    color: #222;
  }

  .icon {
    font-size: 24px;
    line-height: 1;
    color: #666;
  }

  .faq-answer {
    margin-top: 10px;
    color: #555;
    font-size: 16px;
    line-height: 1.5;
  }

  .faq-item:last-child {
    border-bottom: 1px solid #ddd;
  }

  .faq-item:hover .faq-question {
    color: #0031f3;
  }

  .faq-item:hover .icon {
    color: #0031f3;
  }
</style>

















<!---
<script lang="ts">
    let faqs = [
      {
        question: 'What is Eunoia?',
        answer: 'Eunoia is a mindfulness and wellness platform designed to help you find balance and mental clarity.',
        open: false
      },
      {
        question: 'What is Eunoia’s mission?',
        answer: 'Our mission is to make mental wellness accessible and simple for everyone.',
        open: false
      },
      {
        question: 'How do I download the Eunoia app?',
        answer: 'You can download the Eunoia app from the App Store or Google Play.',
        open: false
      },
      {
        question: 'What is included in a Eunoia subscription?',
        answer: 'You’ll get access to guided meditations, journals, calendar syncing, and more.',
        open: false
      },
      {
        question: 'How much does Eunoia cost?',
        answer: 'We offer both free and premium plans. Premium includes full access to all features.',
        open: false
      },
      {
        question: 'Does my Eunoia subscription automatically renew?',
        answer: 'Yes, your subscription renews monthly or annually depending on your plan.',
        open: false
      },
      {
        question: 'How do I cancel my Eunoia subscription?',
        answer: 'You can cancel anytime through your account settings in the app.',
        open: false
      },
      {
        question: 'How can I support my team’s mental health at work?',
        answer: 'Eunoia offers team and enterprise plans for employee wellness. Contact us for more info.',
        open: false
      }
    ];
  
    function toggle(index: number) {
      faqs = faqs.map((faq, i) => i === index ? { ...faq, open: !faq.open } : faq);
    }
  </script>
  
  <div class="faq-container">
    <h1>Frequently asked questions</h1>
  
    {#each faqs as faq, index}
      <div class="faq-item" on:click={() => toggle(index)}>
        <div class="faq-question">
          <span>{faq.question}</span>
          <span class="icon">{faq.open ? '−' : '+'}</span>
        </div>
        {#if faq.open}
          <div class="faq-answer">{faq.answer}</div>
        {/if}
      </div>
    {/each}
  </div>
  
  <style>
    .faq-container {
      max-width: 800px;
      margin: 40px auto;
      padding: 0 20px;
      font-family: sans-serif;
    }
  
    h1 {
      text-align: center;
      font-size: 28px;
      margin-bottom: 30px;
    }
  
    .faq-item {
      border-top: 1px solid #ddd;
      padding: 20px 0;
      cursor: pointer;
    }
  
    .faq-question {
      display: flex;
      justify-content: space-between;
      font-size: 18px;
      font-weight: 500;
      color: #222;
    }
  
    .icon {
      font-size: 24px;
      line-height: 1;
      color: #666;
    }
  
    .faq-answer {
      margin-top: 10px;
      color: #555;
      font-size: 16px;
      line-height: 1.5;
    }
  
    .faq-item:last-child {
      border-bottom: 1px solid #ddd;
    }
  
    .faq-item:hover .faq-question {
      color: #0031f3;
    }
  
    .faq-item:hover .icon {
      color: #0031f3;
    }
  </style>
-->