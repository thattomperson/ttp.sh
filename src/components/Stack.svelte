<div class="stack {_classes}" style="--space: {space};">
  <slot></slot>
</div>

<style>
  .stack {
    --space: 1.5rem;
  }

  .stack > :global(* + *) {
    margin-top: var(--space);
  }

  .flex, .flexColumn { 
    display: flex;
  }
  .flex-column { 
    flex-direction: column;
  }
  .full-height {
    height: 100%;
  }
</style>

<script>
export let padding = 1;

let classes = {
  'flex': $$props['flex'] || false,
  'flex-column': $$props['flex-column'] || false,
  'full-height': $$props['full-height'] || false,
}

let _classes = Object.keys(classes).filter(c => {
  return classes[c]
}).join(' ')


let space = `${1.5 * padding}rem`
</script>