<div id={name} class="section">
  <div class="background">
    <slot class="background" name="background"></slot>
  </div>
  <div class="section-container">
    <slot></slot>
  </div>
</div>


<script>
export let name
</script>


<style lang="postcss">
.section {
  position: relative;
}

.section-container {
  display: flex;
  margin: auto;
  min-height: 100vh;
  min-width: 320px;
  max-width: 1366px;
  flex-direction: column;
  justify-content: center;
  padding: 5em 1em;
  text-align: center;
}

</style>