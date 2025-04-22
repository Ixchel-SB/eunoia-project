<script>
  import InteractiveBoxes from './components/InteractiveBoxes.svelte';
  import InfoSection from './components/InfoSection.svelte';
  import AppInfoSection from './components/AppInfoSection.svelte';
  import Questions from './components/Questions.svelte';
</script>

<div class="scrolling-website">
  <InteractiveBoxes />
  <InfoSection />
  <AppInfoSection />
  <Questions />
</div>

<style global>
  @import './style.css';
</style>
