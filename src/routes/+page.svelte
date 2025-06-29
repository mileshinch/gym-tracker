<script lang="ts">
  export let form;
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>

<div class="form-container">
    <form method="post">
        <label for="exercise">Exercise:</label><br>
        <input type="text" id="exercise" name="exercise"><br>
        <button type="submit">Submit form</button>
      </form>
</div>

{#if form?.value}
  <p>You submitted: {form.value}</p>
{/if}

