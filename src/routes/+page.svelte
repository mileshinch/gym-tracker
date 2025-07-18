<script lang="ts">
  const { form } = $props();

  let exercise = '';
</script>

<div class="form-container">
  <form method="post">
    <label for="exercise">Exercise:</label><br />
    <input
      type="text"
      id="exercise"
      name="exercise"
      placeholder="Exercise"
      required
    /><br />
    <label for="exercise">Weight:</label><br />
    <input
      type="number"
      id="weight"
      name="weight"
      placeholder="Weight (kg)"
      required
    /><br />
    <button type="submit">Submit form</button>
  </form>
</div>

<a href="./progress-page">Progress page</a>
