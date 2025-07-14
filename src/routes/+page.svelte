<script lang="ts">
  // none svelte rune way of doing things
  // export let form;

  let gymHistory = $state([]);

  const { form } = $props();

  let exercise = "";

function addExercise() {
  if (exercise.trim()) {
    gymHistory.push(exercise.trim());
    exercise = ""; // clear input
    }
  }

</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>

<div class="form-container">
    <form method="post" on:submit|preventDefault={addExercise}>
        <label for="exercise">Exercise:</label><br>
        <input type="text" id="exercise" name="exercise" placeholder="Exercise" required><br>
        <!-- <label for="exercise">Weight:</label><br>
        <input type="number" id="weight" name="weight" placeholder="Weight (kg)" required><br> -->
        <button type="submit">Submit form</button>
      </form>
</div>

{#if form?.value}
  <p>You submitted: {form.value}</p>
{/if}


<ul>
{#each gymHistory as item}
<li>{item}</li>
{/each}
  </ul>
  