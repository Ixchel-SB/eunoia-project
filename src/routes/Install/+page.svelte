<script lang="ts">
    let deferredPrompt: any;
  
    // Listen for the 'beforeinstallprompt' event
    if (typeof window !== 'undefined') {
      window.addEventListener('beforeinstallprompt', (event) => {
        // Prevent the default install prompt
        event.preventDefault();
        // Stash the event for later use
        deferredPrompt = event;
        // Show your "Download App" button
        document.getElementById('install-btn')?.classList.remove('hidden');
      });
    }
  
    function handleInstall() {
      // Show the install prompt when the button is clicked
      if (deferredPrompt) {
        deferredPrompt.prompt();
        // Wait for the user to respond to the prompt
        deferredPrompt.userChoice.then((choiceResult: any) => {
          if (choiceResult.outcome === 'accepted') {
            console.log('User accepted the A2HS prompt');
          } else {
            console.log('User dismissed the A2HS prompt');
          }
          deferredPrompt = null;
        });
      }
    }
  </script>
  
  <button>
    id="install-btn"
    on:click={handleInstall}
    class="install-btn hidden"
    Download App
  </button>
  
  <style>
    .install-btn {
      padding: 10px 20px;
      background-color: #0031f3;
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }
  
    .install-btn.hidden {
      display: none;
    }
  </style>
  
  
  