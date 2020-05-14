<div style={style} class={classes}>

</div>

<script>
export let color = "primary"
export let top = ""
export let left = ""
export let right = ""
export let bottom = ""


let style = ''
let classes = ''

const parse = (variable, values, unit) => {
  if (values.indexOf(',') > 0) {
    const [v1, v2] = values.split(',')
    return `--${variable}: ${v1}${unit};--md-${variable}: ${v2}${unit};`
  }

  return `--${variable}: ${values}${unit};--md-${variable}: ${values}${unit};`
}

style += parse('y', top || bottom, 'vh')
style += parse('x', left || right, 'vw')
style += `--color: var(--${color});`

classes += top ? 'top ' : 'bottom '
classes += left ? 'left ' : 'right '


</script>

<style lang="postcss">

  @custom-media --gt-medium (min-width: 40em);

  div {
    --bg: var(--background);
    --pale-purple: var(--backgroundDark);
    --pale-pink: var(--secondaryLight);
    --purple: var(--primaryDark);
    --pink: var(--secondary);

    position: absolute;
    width: 0;
    height: 0;
    z-index: -2;

    @media (prefers-color-scheme: dark) {
      --bg: var(--darkBackground);
      --pale-pink: var(--secondaryLight);
      --pale-purple: var(--backgroundLight);
      --purple: var(--primary);
    }

    &.left {
      border-right: var(--x) solid transparent;

      @media (--gt-medium) {
        border-right-width: var(--md-x);
      }
    }

    &.right {
      right: 0;
      border-left: var(--x) solid transparent;

      @media (--gt-medium) {
        border-left-width: var(--md-x);
      }
    }

    &.top {
      border-top: var(--y) solid var(--color);

      @media (--gt-medium) {
        border-top-width: var(--md-y);
      }
    }

    &.bottom {
      bottom: 0;
      border-bottom: var(--y) solid var(--color);

      @media (--gt-medium) {
        border-bottom-width: var(--md-y);
      }
    }
  }
</style>