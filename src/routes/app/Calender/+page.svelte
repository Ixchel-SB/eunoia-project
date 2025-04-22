<script>
  import { onMount } from "svelte";
  import ical from "ical.js";

  // Variables
  let currentDate = new Date(); // Current date
  let days = []; // Array to store the calendar days
  let month = currentDate.getMonth(); // Current month (0-based)
  let year = currentDate.getFullYear(); // Current year

  // Variables for external calendar integration
  let calendarURL = ""; // iCal URL input by the user
  let externalEvents = []; // Array to store parsed events
  let canvasInstitutionURL = "https://yourcanvasinstitution.instructure.com"; // Canvas institution URL

  // Function to calculate the number of days in a given month
  const daysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();

  // Function to find the starting day of the week
  const startDay = (year, month) => new Date(year, month, 1).getDay();

  // Function to build the calendar days
  const buildCalendar = () => {
    days = [];
    const totalDays = daysInMonth(year, month);
    const firstDay = startDay(year, month);

    for (let i = 0; i < firstDay; i++) {
      days.push({ day: null, externalEvents: [] }); // Empty slots before the first date
    }
    for (let i = 1; i <= totalDays; i++) {
      const date = `${year}-${String(month + 1).padStart(2, "0")}-${String(i).padStart(2, "0")}`;
      const dayExternalEvents = externalEvents.filter(event =>
        event.start.toISOString().startsWith(date)
      );
      days.push({ day: i, externalEvents: dayExternalEvents });
    }
  };

  // Function to fetch and parse the iCal feed
  async function addCalendar() {
    try {
      const response = await fetch(`/api/proxy?url=${encodeURIComponent(calendarURL)}`); 
      const iCalData = await response.text(); 
      const parsedData = ical.parse(iCalData); 
      const comp = new ical.Component(parsedData);
      const vevents = comp.getAllSubcomponents("vevent"); 

      externalEvents = vevents.map(event => ({
        title: event.getFirstPropertyValue("summary"),
        start: event.getFirstPropertyValue("dtstart").toJSDate(),
        end: event.getFirstPropertyValue("dtend")?.toJSDate(),
        uid: event.getFirstPropertyValue("uid"),
      }));

      console.log("External Calendar Events:", externalEvents);
      alert("Calendar successfully added! Check console for events.");
      buildCalendar(); 
    } catch (error) {
      console.error("Error fetching or parsing iCal feed:", error);
      alert("Failed to add calendar. Please check the URL and try again.");
    }
  }

  // Navigate to the previous month
  const previousMonth = () => {
    month--;
    if (month < 0) {
      month = 11;
      year--;
    }
    buildCalendar();
  };

  // Navigate to the next month
  const nextMonth = () => {
    month++;
    if (month > 11) {
      month = 0;
      year++;
    }
    buildCalendar();
  };

  // Initialize calendar on component mount
  onMount(buildCalendar);
</script>

<style>
  .add-calendar {
    max-width: 800px;
    margin: 20px auto;
    padding: 20px;
    background: #f8f9fa;
    border: 1px solid #ddd;
    border-radius: 10px;
    text-align: center;
  }

  .add-calendar input {
    width: 90%;
    padding: 10px;
    margin-bottom: 10px;
    font-size: 1rem;
  }

  .add-calendar button {
    padding: 10px 20px;
    font-size: 1rem;
    color: white;
    background-color: #007bff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  .add-calendar button:hover {
    background-color: #0056b3;
  }

  .calendar-container {
    max-width: 800px;
    margin: auto;
  }

  .header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
  }

  .calendar {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 10px;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 10px;
  }

  .day {
    height: 150px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 5px;
    overflow-y: auto;
  }

  .day::-webkit-scrollbar {
    width: 5px;
  }

  .day::-webkit-scrollbar-thumb {
    background-color: #ccc;
    border-radius: 5px;
  }

  .empty {
    background-color: #f9f9f9;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    font-size: 0.8rem;
    width: 100%;
  }

  li {
    padding: 2px;
    border-bottom: 1px solid #ccc;
  }

  li:last-child {
    border-bottom: none;
  }

  a {
    text-decoration: none;
    color: #337ab7;
  }

  a:hover {
    color: #23527c;
  }
</style>

<div class="add-calendar">
  <h3>Add Canvas Calendar via URL</h3>
  <p>To get the Canvas Calendar URL:</p>
  <ol>
    <li>Log in to your Canvas account.</li>
    <li>Navigate to the Calendar.</li>
    <li>Click on "Calendar Feed" at the bottom right.</li>
    <li>Copy the iCal URL.</li>
    <li>Paste the URL below.</li>
  </ol>
  <form on:submit|preventDefault={addCalendar}>
    <input type="url" placeholder="Paste iCal URL here" bind:value={calendarURL} required />
    <button type="submit">Add Calendar</button>
  </form>
</div>

<div class="calendar-container">
  <div class="header">
    <button on:click={previousMonth}>Previous</button>
    <h2>{year}-{String(month + 1).padStart(2, "0")}</h2>
    <button on:click={nextMonth}>Next</button>
  </div>

  <div class="calendar">
    {#each days as day}
      <div class="day {day.day === null ? 'empty' : ''}">
        {day.day !== null ? day.day : ''}
        {#if day.externalEvents.length > 0}
          <ul>
            {#each day.externalEvents as event}
              <li>
                <a href={`${canvasInstitutionURL}/calendar?event_id=${event.uid.replace(/@.*/, '')}`}>
                  {event.title}
                </a>
              </li>
            {/each}
          </ul>
        {/if}
      </div>
    {/each}
  </div>
</div>


















<!--- Code...IDK stoped counting
<script>
  import { onMount } from "svelte";
  import ical from "ical.js";

  // Variables
  let currentDate = new Date(); // Current date
  let days = []; // Array to store the calendar days
  let month = currentDate.getMonth(); // Current month (0-based)
  let year = currentDate.getFullYear(); // Current year

  // Variables for external calendar integration
  let calendarURL = ""; // iCal URL input by the user
  let externalEvents = []; // Array to store parsed events

  // Function to calculate the number of days in a given month
  const daysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();

  // Function to find the starting day of the week
  const startDay = (year, month) => new Date(year, month, 1).getDay();

  // Function to build the calendar days
  const buildCalendar = () => {
    days = [];
    const totalDays = daysInMonth(year, month);
    const firstDay = startDay(year, month);

    for (let i = 0; i < firstDay; i++) {
      days.push({ day: null, externalEvents: [] }); // Empty slots before the first date
    }
    for (let i = 1; i <= totalDays; i++) {
      const date = `${year}-${String(month + 1).padStart(2, "0")}-${String(i).padStart(2, "0")}`;
      const dayExternalEvents = externalEvents.filter(event =>
        event.start.toISOString().startsWith(date)
      );
      days.push({ day: i, externalEvents: dayExternalEvents });
    }
  };

  // Function to fetch and parse the iCal feed
  async function addCalendar() {
    try {
      const response = await fetch(`/api/proxy?url=${encodeURIComponent(calendarURL)}`); 
      const iCalData = await response.text(); 
      const parsedData = ical.parse(iCalData); 
      const comp = new ical.Component(parsedData);
      const vevents = comp.getAllSubcomponents("vevent"); 

      externalEvents = vevents.map(event => ({
        title: event.getFirstPropertyValue("summary"),
        start: event.getFirstPropertyValue("dtstart").toJSDate(),
        end: event.getFirstPropertyValue("dtend")?.toJSDate(),
      }));

      console.log("External Calendar Events:", externalEvents);
      alert("Calendar successfully added! Check console for events.");
      buildCalendar(); 
    } catch (error) {
      console.error("Error fetching or parsing iCal feed:", error);
      alert("Failed to add calendar. Please check the URL and try again.");
    }
  }

  // Navigate to the previous month
  const previousMonth = () => {
    month--;
    if (month < 0) {
      month = 11;
      year--;
    }
    buildCalendar();
  };

  // Navigate to the next month
  const nextMonth = () => {
    month++;
    if (month > 11) {
      month = 0;
      year++;
    }
    buildCalendar();
  };

  // Initialize calendar on component mount
  onMount(buildCalendar);
</script>


<style>
  .add-calendar {
    max-width: 800px;
    margin: 20px auto;
    padding: 20px;
    background: #f8f9fa;
    border: 1px solid #ddd;
    border-radius: 10px;
    text-align: center;
  }

  .add-calendar input {
    width: 90%;
    padding: 10px;
    margin-bottom: 10px;
    font-size: 1rem;
  }

  .add-calendar button {
    padding: 10px 20px;
    font-size: 1rem;
    color: white;
    background-color: #007bff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  .add-calendar button:hover {
    background-color: #0056b3;
  }

  .calendar-container {
    max-width: 800px;
    margin: auto;
  }

  .header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
  }

  .calendar {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 10px;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 10px;
  }

  .day {
    height: 150px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 5px;
    overflow-y: auto;
  }

  .day::-webkit-scrollbar {
    width: 5px;
  }

  .day::-webkit-scrollbar-thumb {
    background-color: #ccc;
    border-radius: 5px;
  }

  .empty {
    background-color: #f9f9f9;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    font-size: 0.8rem;
    width: 100%;
  }

  li {
    padding: 2px;
    border-bottom: 1px solid #ccc;
  }

  li:last-child {
    border-bottom: none;
  }
</style>

<!-- Update the HTML to include the .calendar-container wrapper --
<div class="add-calendar">
  <!-- ... --
</div>

<div class="calendar-container">
  <div class="header">
    <button on:click={previousMonth}>Previous</button>
    <h2>{year}-{String(month + 1).padStart(2, "0")}</h2>
    <button on:click={nextMonth}>Next</button>
  </div>

  <div class="calendar">
    {#each days as day}
      <div class="day {day.day === null ? 'empty' : ''}">
        {day.day !== null ? day.day : ''}
        {#if day.externalEvents.length > 0}
          <ul>
            {#each day.externalEvents as event}
              <li>{event.title}</li>
            {/each}
          </ul>
        {/if}
      </div>
    {/each}
  </div>
</div>
-->









<!-- CODE 1
<script>
    import { onMount } from "svelte";
  

  let currentDate = new Date(); // Correct variable naming
  let days = []; // Correctly initialize empty array
  let month = currentDate.getMonth(); // 0-based month (Jan = 0, Dec = 11)
  let year = currentDate.getFullYear(); // Fetch current year

  // Function to calculate days in a given month
  const daysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();

  // Function to find the starting day of the week
  const startDay = (year, month) => new Date(year, month, 1).getDay();

  console.log("Days Array:", days); // Debugging purpose
  console.log("Year:", year); // Debugging purpose
  console.log("Month:", month); // Debugging purpose
  console.log("Days in Month:", daysInMonth(year, month)); // Should work fine
  console.log("Start Day:", startDay(year, month)); // Should also work fine

  
    const buildCalendar = () => {
      days = [];
      const totalDays = daysInMonth(year, month);
      const firstDay = startDay(year, month);
      for (let i = 0; i < firstDay; i++) {
        days.push(null); // Empty days before the first date
      }
      for (let i = 1; i <= totalDays; i++) {
        days.push(i); // Actual days of the month
      }
    };
  
    onMount(buildCalendar);
  
    const previousMonth = () => {
      month--;
      if (month < 0) {
        month = 11;
        year--;
      }
      buildCalendar();
    };
  
    const nextMonth = () => {
      month++;
      if (month > 11) {
        month = 0;
        year++;
      }
      buildCalendar();
    };
  </script>
  
  <style>
    .calendar {
      display: grid;
      grid-template-columns: repeat(7, 1fr);
      gap: 10px;
      padding: 20px;
      max-width: 400px;
      margin: auto;
    }
    .day {
      width: 50px;
      height: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px solid #ccc;
      border-radius: 5px;
    }
    .empty {
      background-color: #f9f9f9;
    }
    .header {
      display: flex;
      justify-content: space-between;
      margin-bottom: 10px;
    }
  </style>
  
  <div class="header">
    <button on:click={previousMonth}>Previous</button>
    <h2>{year}-{String(month + 1).padStart(2, "0")}</h2>
    <button on:click={nextMonth}>Next</button>
  </div>
  
  <div class="calendar">
    {#each days as day}
      <div class="day {day === null ? 'empty' : ''}">
        {day !== null ? day : ''}
      </div>
    {/each}
  </div>
-->
  