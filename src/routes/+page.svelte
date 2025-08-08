<script lang="ts">
  import { gymHistory } from '$lib/stores/gym-history.js';

  // $inspect(gymHistory) doesn't work use JSON.parse(localStorage.getItem('gymHistory'))

  let name = '';
  let weight = '';

  function addNewDate() {
    // get today's date
    const today = new Date();
    const formatted = `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`;
    // add a new entry to gym history array {date: 'today's date}
    gymHistory.update((record) => [
      ...record,
      { date: formatted, exercises: [] },
    ]);
  }

  function addEntry() {
    if (name.trim() && weight) {
      gymHistory.update((entry) => {
        const updated = [...entry];
        if (updated[0]) {
          updated[0] = { ...updated[0], exercise: { name, weight } };
        }
        return updated;
      });
      name = '';
      weight = '';
    }
  }

  function clearHistory() {
    if (confirm('Are you sure you want to delete all gym history?')) {
      gymHistory.set([]);
    }
  }
</script>

<button on:click={addNewDate()}>Record gym session</button>

<form on:submit|preventDefault={addEntry}>
  <input bind:value={name} placeholder="Exercise" />
  <input type="number" bind:value={weight} placeholder="Weight" />
  <button type="submit">Add</button>
</form>

<h2>Gym History</h2>
<ul>
  {#each $gymHistory as entry}
    <li>{entry.name} - {entry.weight}kg</li>
  {/each}
</ul>

<button on:click={clearHistory} class="clear-button">
  Clear All History
</button>

<a href="./progress-page">Progress page</a>
