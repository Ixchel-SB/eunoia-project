
<!---
<script>
  export let growth = 0;
  export let reset = false;

  $: scale = growth === 0 ? 0.9 : growth / 100;
  $: if (reset) growth = 0;
</script>

<div class="scene">
  <div class="gradient">
    <svg>
      <defs>
        <radialGradient id="gradient" cx="50%" cy="5%" fx="50%" fy="5%" r="110%">
          <stop offset="0%" stop-color="#FCFDF2"></stop>
          <stop offset="100%" stop-color="#E9BABA"></stop>
        </radialGradient>
      </defs>
    </svg>
  </div>

  <div class="lotus">
    <!-- Outer Petals --
    <ul>
      {#each Array(8) as _, i}
        <li>
          <svg viewBox="0 0 72 200">
            <path d="M0,100 C0,66.6666667 12,33.3333333 36,0 C60,33.3333333 72,66.6666667 72,100 C72,133.333333 60,166.666667 36,200 C12,166.666667 0,133.333333 0,100 Z" />
          </svg>
        </li>
      {/each}
    </ul>

    <!-- Middle Petals --
    <ul>
      {#each Array(6) as _, i}
        <li>
          <svg viewBox="0 0 72 200">
            <path d="M0,100 C0,66.6666667 12,33.3333333 36,0 C60,33.3333333 72,66.6666667 72,100 C72,133.333333 60,166.666667 36,200 C12,166.666667 0,133.333333 0,100 Z" />
          </svg>
        </li>
      {/each}
    </ul>

    <!-- Inner Petals --
    <ul>
      {#each Array(3) as _, i}
        <li>
          <svg viewBox="0 0 72 200">
            <path d="M0,100 C0,66.6666667 12,33.3333333 36,0 C60,33.3333333 72,66.6666667 72,100 C72,133.333333 60,166.666667 36,200 C12,166.666667 0,133.333333 0,100 Z" />
          </svg>
        </li>
      {/each}
    </ul>
  </div>
</div>

<style>
  body,
  html {
    height: 100%;
  }

  body {
    perspective: 1000px;
    background: #363A3F;
  }

  body,
  div,
  ul,
  li {
    backface-visibility: hidden;
  }

  div,
  ul,
  li,
  svg {
    will-change: transform;
    transform-style: preserve-3d;
  }

  li,
  svg {
    transform-origin: center top;
  }

  .gradient {
    opacity: 0;
    height: 0;
    width: 0;
  }

  .scene {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .lotus {
    transform-origin: center center;
    transform: rotateX(70deg);
    animation: rotate 20000ms linear infinite forwards;
    position: absolute;
    top: calc(50% - 18px);
    left: calc(50% - 18px);
    width: 36px;
    height: 36px;
  }

  .lotus ul {
    position: relative;
    width: 36px;
    height: 36px;
  }

  .lotus li {
    position: absolute;
  }

  .lotus li svg {
    display: block;
    height: auto;
  }

  .lotus li svg path {
    fill: url(#gradient);
  }

  .lotus:nth-child(1) li {
    top: 18px;
    left: calc(50% - 18px);
  }

  .lotus:nth-child(1) li:nth-child(n) {
    transform: rotateZ(calc(45deg * n)) rotateX(15deg) rotateY(5deg);
  }

  .lotus:nth-child(1) li svg {
    width: 72px;
    transform: rotateX(75deg);
    animation: bloom 1000ms cubic-bezier(0, 0.75, 0.25, 1) forwards;
  }

  .lotus:nth-child(2) li {
    top: 15px;
    left: calc(50% - 15px);
  }

  .lotus:nth-child(2) li:nth-child(n) {
    transform: rotateZ(calc(60deg * n)) rotateX(30deg) rotateY(5deg);
  }

  .lotus:nth-child(2) li svg {
    width: 60px;
    transform: rotateX(60deg);
    animation: bloom 1100ms cubic-bezier(0, 0.75, 0.25, 1) 150ms forwards;
  }

  .lotus:nth-child(3) li {
    top: 12px;
    left: calc(50% - 12px);
  }

  .lotus:nth-child(3) li:nth-child(n) {
    transform: rotateZ(calc(120deg * n)) rotateX(60deg) rotateY(5deg);
  }

  .lotus:nth-child(3) li svg {
    width: 48px;
    transform: rotateX(30deg);
    animation: bloom 1200ms cubic-bezier(0, 0.75, 0.25, 1) 300ms forwards;
  }

  @keyframes rotate {
    from {
      transform: rotateX(70deg) rotateZ(0deg);
    }
    to {
      transform: rotateX(70deg) rotateZ(360deg);
    }
  }

  @keyframes bloom {
    to {
      transform: none;
    }
  }
</style>



















<!---
<script>
  export let growth = 0;
  export let reset = false;

  $: scale = growth === 0 ? 0.9 : growth / 100;
  $: if (reset) growth = 0;
</script>

<div class="scene">
  <div class="gradient">
    <svg>
      <defs>
        <radialGradient id="gradient" cx="50%" cy="5%" fx="50%" fy="5%" r="110%">
          <stop offset="0%" stop-color="#FCFDF2"></stop>
          <stop offset="100%" stop-color="#E9BABA"></stop>
        </radialGradient>
      </defs>
    </svg>
  </div>

  <div class="lotus">
    <!-- Outer Petals --
    <ul>
      {#each Array(8) as _, i}
        <li>
          <svg viewBox="0 0 72 200">
            <path d="M0,100 C0,66.6666667 12,33.3333333 36,0 C60,33.3333333 72,66.6666667 72,100 C72,133.333333 60,166.666667 36,200 C12,166.666667 0,133.333333 0,100 Z" />
          </svg>
        </li>
      {/each}
    </ul>

    <!-- Middle Petals --
    <ul>
      {#each Array(6) as _, i}
        <li>
          <svg viewBox="0 0 72 200">
            <path d="M0,100 C0,66.6666667 12,33.3333333 36,0 C60,33.3333333 72,66.6666667 72,100 C72,133.333333 60,166.666667 36,200 C12,166.666667 0,133.333333 0,100 Z" />
          </svg>
        </li>
      {/each}
    </ul>

    <!-- Inner Petals --
    <ul>
      {#each Array(3) as _, i}
        <li>
          <svg viewBox="0 0 72 200">
            <path d="M0,100 C0,66.6666667 12,33.3333333 36,0 C60,33.3333333 72,66.6666667 72,100 C72,133.333333 60,166.666667 36,200 C12,166.666667 0,133.333333 0,100 Z" />
          </svg>
        </li>
      {/each}
    </ul>
  </div>
</div>

<style>
  body,
  html {
    height: 100%;
  }

  body {
    perspective: 1000px;
    background: #363A3F;
  }

  body,
  div,
  ul,
  li {
    backface-visibility: hidden;
  }

  div,
  ul,
  li,
  svg {
    will-change: transform;
    transform-style: preserve-3d;
  }

  li,
  svg {
    transform-origin: center top;
  }

  .gradient {
    opacity: 0;
    height: 0;
    width: 0;
  }

  .scene {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .lotus {
    transform-origin: center center;
    transform: rotateX(70deg);
    animation: rotate 20000ms linear infinite forwards;
    position: absolute;
    top: calc(50% - 18px);
    left: calc(50% - 18px);
    width: 36px;
    height: 36px;
  }

  .lotus ul {
    position: relative;
    width: 36px;
    height: 36px;
  }

  .lotus li {
    position: absolute;
  }

  .lotus li svg {
    display: block;
    height: auto;
  }

  .lotus li svg path {
    fill: url(#gradient);
  }

  .lotus:nth-child(1) li {
    top: 18px;
    left: calc(50% - 18px);
  }

  .lotus:nth-child(1) li:nth-child(n) {
    transform: rotateZ(calc(45deg * n)) rotateX(15deg) rotateY(5deg);
  }

  .lotus:nth-child(1) li svg {
    width: 72px;
    transform: rotateX(75deg);
    animation: bloom 1000ms cubic-bezier(0, 0.75, 0.25, 1) forwards;
  }

  .lotus:nth-child(2) li {
    top: 15px;
    left: calc(50% - 15px);
  }

  .lotus:nth-child(2) li:nth-child(n) {
    transform: rotateZ(calc(60deg * n)) rotateX(30deg) rotateY(5deg);
  }

  .lotus:nth-child(2) li svg {
    width: 60px;
    transform: rotateX(60deg);
    animation: bloom 1100ms cubic-bezier(0, 0.75, 0.25, 1) 150ms forwards;
  }

  .lotus:nth-child(3) li {
    top: 12px;
    left: calc(50% - 12px);
  }

  .lotus:nth-child(3) li:nth-child(n) {
    transform: rotateZ(calc(120deg * n)) rotateX(60deg) rotateY(5deg);
  }

  .lotus:nth-child(3) li svg {
    width: 48px;
    transform: rotateX(30deg);
    animation: bloom 1200ms cubic-bezier(0, 0.75, 0.25, 1) 300ms forwards;
  }

  @keyframes rotate {
    from {
      transform: rotateX(70deg) rotateZ(0deg);
    }
    to {
      transform: rotateX(70deg) rotateZ(360deg);
    }
  }

  @keyframes bloom {
    to {
      transform: none;
    }
  }
</style>

















<!---
<script>
  export let growth = 0;
  export let reset = false;

  $: scale = growth === 0 ? 0.9 : growth / 100;
  $: if (reset) growth = 0;
</script>

<div class="scene">
  <div class="lily-pad">
    <div class="lotus" style={`transform: scale(${scale})`}>
      <!-- Outer Petals --
      {#each Array(6) as _, i}
        <div
          class="petal outer"
          style={`transform: rotate(${i * 60}deg) rotateX(50deg) translateZ(10px)`}
        ></div>
      {/each}

      <!-- Middle Petals --
      {#each Array(6) as _, i}
        <div
          class="petal middle"
          style={`transform: rotate(${i * 60 + 30}deg) rotateX(40deg) translateZ(15px)`}
        ></div>
      {/each}

      <!-- Inner Petals --
      {#each Array(5) as _, i}
        <div
          class="petal inner"
          style={`transform: rotate(${i * 72}deg) rotateX(30deg) translateZ(20px)`}
        ></div>
      {/each}

      <!-- Center Pod --
      <div class="center-pod"></div>
    </div>
  </div>
</div>

<style>
  .scene {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(to top, #a2d4d6, #e0f7fa);
    perspective: 1000px;
  }

  .lily-pad {
    width: 400px;
    height: 400px;
    background: radial-gradient(ellipse at center, #4caf50 40%, #2e7d32 100%);
    border-radius: 50%;
    transform: rotateX(45deg);
    position: relative;
    box-shadow: inset -10px -10px 20px rgba(0, 0, 0, 0.2),
                0 30px 50px rgba(0, 0, 0, 0.3);
  }

  .lotus {
    width: 300px;
    height: 300px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -55%);
    transform-style: preserve-3d;
    transition: transform 0.5s ease-in-out;
  }

  .petal {
    position: absolute;
    width: 60px;
    height: 140px;
    background: radial-gradient(circle at top, #f8b4d9 0%, #c2185b 100%);
    border-radius: 50% 50% 0 0;
    transform-origin: center bottom;
    bottom: 0;
    left: 50%;
    transform-style: preserve-3d;
    opacity: 0.95;
    margin-left: -30px;
  }

  .outer {
    z-index: 1;
    opacity: 0.85;
  }

  .middle {
    z-index: 2;
    opacity: 0.9;
  }

  .inner {
    z-index: 3;
    opacity: 1;
    height: 120px;
    width: 50px;
    margin-left: -25px;
  }

  .center-pod {
    position: absolute;
    width: 60px;
    height: 60px;
    background: radial-gradient(circle, #ffe066, #fab005);
    border-radius: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) translateZ(25px);
    z-index: 4;
    box-shadow: 0 0 10px rgba(255, 193, 7, 0.6);
  }
</style>

























<!---
<script>
  export let growth = 0;
  export let reset = false;

  $: scale = growth === 0 ? 0.9 : growth / 100;
  $: if (reset) growth = 0;
</script>

<div class="lotus-container">
  <div class="lotus" style={`transform: scale(${scale})`}>
    <!-- Outer Petal Layer --
    {#each Array(8) as _, i}
      <div class="petal outer" style={`transform: rotate(${i * 45}deg) translateY(-70px)`}></div>
    {/each}

    <!-- Middle Petal Layer --
    {#each Array(8) as _, i}
      <div class="petal middle" style={`transform: rotate(${i * 45 + 22.5}deg) translateY(-55px)`}></div>
    {/each}

    <!-- Inner Petal Layer --
    {#each Array(6) as _, i}
      <div class="petal inner" style={`transform: rotate(${i * 60}deg) translateY(-40px)`}></div>
    {/each}

    <!-- Stamens --
    <div class="stamens">
      {#each Array(16) as _, i}
        <div class="stamen" style={`transform: rotate(${i * 22.5}deg) translateY(-20px)`}></div>
      {/each}
    </div>

    <!-- Center Pod --
    <div class="center-pod"></div>
  </div>
</div>

<style>
  .lotus-container {
    width: 320px;
    height: 320px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: radial-gradient(circle, #c1e5d9 30%, #9ed2b9 100%);
    border-radius: 50%;
    margin: 0 auto;
    position: relative;
  }

  .lotus {
    position: absolute;
    top: 20%;
    left: 35%;
    width: 240px;
    height: 240px;
    transform: translate(-10%, -10%);
    transition: transform 0.5s ease-in-out;
  }

  .petal {
    position: absolute;
    width: 70px;
    height: 100px;
    background: radial-gradient(circle at top, #e8a3d3 0%, #ce7bb0 90%);
    border-radius: 50% 50% 0 0;
    transform-origin: bottom center;
    opacity: 0.95;
  }

  .outer {
    width: 75px;
    height: 110px;
    opacity: 0.8;
    z-index: 0;
  }

  .middle {
    width: 65px;
    height: 95px;
    opacity: 0.9;
    z-index: 1;
  }

  .inner {
    width: 55px;
    height: 80px;
    opacity: 1;
    z-index: 2;
  }

  .stamens {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 3;
    left: 0;
    top: 0;
  }

  .stamen {
    position: absolute;
    width: 8px;
    height: 8px;
    background: #f9c74f;
    border-radius: 50%;
    top: 30%;
    left: 10%;
    transform-origin: center bottom;
  }

  .center-pod {
    position: absolute;
    width: 60px;
    height: 60px;
    background: radial-gradient(circle, #ffc300, #ff9e00);
    border-radius: 50%;
    top: 30%;
    left: 10%;
    transform: translate(-50%, -50%);
    z-index: 4;
    box-shadow: 0 0 10px rgba(255, 185, 0, 0.6);
  }
</style>
























<!--
<script>
  export let growth = 0;
  export let reset = false;

  $: scale = growth === 0 ? 0.9 : growth / 100;
  $: if (reset) growth = 0;
</script>

<div class="lotus-container">
  <div class="lotus" style={`transform: scale(${scale})`}>
    <!-- Outer Petal Layer --
    {#each Array(8) as _, i}
      <div class="petal outer" style={`transform: rotate(${i * 45}deg) translateY(-70px)`}></div>
    {/each}

    <!-- Middle Petal Layer --
    {#each Array(8) as _, i}
      <div class="petal middle" style={`transform: rotate(${i * 45 + 22.5}deg) translateY(-55px)`}></div>
    {/each}

    <!-- Inner Petal Layer --
    {#each Array(6) as _, i}
      <div class="petal inner" style={`transform: rotate(${i * 60}deg) translateY(-40px)`}></div>
    {/each}

    <!-- Stamens --
    <div class="stamens">
      {#each Array(16) as _, i}
        <div class="stamen" style={`transform: rotate(${i * 22.5}deg) translateY(-20px)`}></div>
      {/each}
    </div>

    <!-- Center Pod --
    <div class="center-pod"></div>
  </div>
</div>

<style>
  .lotus-container {
    width: 320px;
    height: 320px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: radial-gradient(circle, #c1e5d9 30%, #9ed2b9 100%);
    border-radius: 50%;
    margin: 0 auto;
  }

  .lotus {
    position: relative;
    width: 240px;
    height: 240px;
    transition: transform 0.5s ease-in-out;
  }

  .petal {
    position: absolute;
    width: 70px;
    height: 100px;
    background: radial-gradient(circle at top, #e8a3d3 0%, #ce7bb0 90%);
    border-radius: 50% 50% 0 0;
    transform-origin: bottom center;
    opacity: 0.95;
  }

  .outer {
    width: 75px;
    height: 110px;
    opacity: 0.8;
    z-index: 0;
  }

  .middle {
    width: 65px;
    height: 95px;
    opacity: 0.9;
    z-index: 1;
  }

  .inner {
    width: 55px;
    height: 80px;
    opacity: 1;
    z-index: 2;
  }

  .stamens {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 3;
    left: 0;
    top: 0;
  }

  .stamen {
    position: absolute;
    width: 8px;
    height: 8px;
    background: #f9c74f;
    border-radius: 50%;
    top: 50%;
    left: 50%;
    transform-origin: center bottom;
  }

  .center-pod {
    position: absolute;
    width: 60px;
    height: 60px;
    background: radial-gradient(circle, #ffc300, #ff9e00);
    border-radius: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 4;
    box-shadow: 0 0 10px rgba(255, 185, 0, 0.6);
  }
</style>

















<!--
<script>
  export let growth = 0;
  export let reset = false;

  $: scale = growth === 0 ? 0.9 : growth / 100;
  $: if (reset) growth = 0;
</script>

<div class="lotus-container">
  <div class="lotus" style={`transform: scale(${scale})`}>
    <!-- Outer Petal Layer --
    {#each Array(8) as _, i}
      <div class="petal outer" style={`transform: rotate(${i * 45}deg) translateY(-70px)`}></div>
    {/each}

    <!-- Middle Petal Layer --
    {#each Array(8) as _, i}
      <div class="petal middle" style={`transform: rotate(${i * 45 + 22.5}deg) translateY(-55px)`}></div>
    {/each}

    <!-- Inner Petal Layer --
    {#each Array(6) as _, i}
      <div class="petal inner" style={`transform: rotate(${i * 60}deg) translateY(-35px)`}></div>
    {/each}

    <!-- Stamens --
    <div class="stamens">
      {#each Array(16) as _, i}
        <div class="stamen" style={`transform: rotate(${i * 22.5}deg) translateY(-18px)`}></div>
      {/each}
    </div>

    <!-- Center Pod --
    <div class="center-pod"></div>
  </div>
</div>

<style>
  .lotus-container {
    width: 320px;
    height: 320px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: radial-gradient(circle, #e0f7fa 30%, #b2ebf2 100%);
    border-radius: 50%;
    margin: 0 auto;
  }

  .lotus {
    position: relative;
    width: 240px;
    height: 240px;
    transition: transform 0.5s ease-in-out;
  }

  .petal {
    position: absolute;
    width: 60px;
    height: 90px;
    background: radial-gradient(circle at top, #fff1f5 0%, #f48fb1 90%);
    border-radius: 50% 50% 0 0;
    transform-origin: bottom center;
    opacity: 0.9;
  }

  .outer {
    width: 65px;
    height: 100px;
    opacity: 0.7;
    z-index: 0;
  }

  .middle {
    width: 55px;
    height: 85px;
    opacity: 0.85;
    z-index: 1;
  }

  .inner {
    width: 45px;
    height: 65px;
    opacity: 0.95;
    z-index: 2;
  }

  .stamens {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 3;
    left: 0;
    top: 0;
  }

  .stamen {
    position: absolute;
    width: 6px;
    height: 6px;
    background: #fbc02d;
    border-radius: 50%;
    top: 50%;
    left: 50%;
    transform-origin: center bottom;
  }

  .center-pod {
    position: absolute;
    width: 50px;
    height: 50px;
    background: radial-gradient(circle, #fff176, #fdd835);
    border-radius: 50%;
    bottom: 50%;
    left: 50%;
    transform: translate(-50%, 50%);
    z-index: 4;
    box-shadow: 0 0 8px rgba(255, 223, 0, 0.5);
  }
</style>



















<!--
<script>
  export let growth = 0;
  export let reset = false;

  $: scale = growth === 0 ? 0.9 : growth / 100; // Set a minimum scale

  $: if (reset) {
    growth = 0;
  }
</script>

<div class="lotus-flower-container">
  <div class="lotus-flower" style={`transform: scale(${scale})`}>
    <div class="petal petal1"></div>
    <div class="petal petal2"></div>
    <div class="petal petal3"></div>
    <div class="petal petal4"></div>
    <div class="petal petal5"></div>
    <div class="center"></div>
  </div>
</div>


<style>
  .lotus-flower-container {
    width: 200px;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f0f0f0; /* Light gray background */
    border: 1px solid #ccc; /* Gray border */
  }

  .lotus-flower {
    position: relative;
    width: 100px;
    height: 100px;
    transition: transform 0.5s ease-in-out;
  }

  .petal {
    position: absolute;
    width: 40px;
    height: 60px;
    background-color: #ff99cc; /* Pink color */
    border-radius: 50% 50% 0 0;
    transform-origin: bottom center;
  }

  .petal1 {
    transform: rotate(0deg);
  }

  .petal2 {
    transform: rotate(72deg);
  }

  .petal3 {
    transform: rotate(144deg);
  }

  .petal4 {
    transform: rotate(216deg);
  }

  .petal5 {
    transform: rotate(288deg);
  }

  .center {
    position: absolute;
    width: 20px;
    height: 20px;
    background-color: #3841c2; /* Yellow color */
    border-radius: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
</style>
-->









<!--
// src/components/Flower.svelte
<script>
  import { flowerGrowth } from "../stores/flowerGrowthStore";

  $: growth = $flowerGrowth;
</script>

<div class="lotus-flower-container">
  <div class="lotus-flower" style={`transform: scale(${growth / 100})`}>
    <div class="petal petal1"></div>
    <div class="petal petal2"></div>
    <div class="petal petal3"></div>
    <div class="petal petal4"></div>
    <div class="petal petal5"></div>
    <div class="center"></div>
  </div>
</div>-->