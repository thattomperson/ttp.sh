<script>
	// import Nav from '../components/Nav.svelte';

	// export let segment;
</script>

<style global>

  :root {
    --background: #FFFFFF;
    --backgroundDark: #f0e6f6;

    --darkBackground: #2d2d2d;
    --backgroundLight: #424242;

    --primary: #7c37ad;
    --primaryLight: #ae66df;
    --primaryDark: #4b007d;

    --secondary: #ff4081;
    --secondaryLight: #ff79b0;
    --secondaryDark: #c60055;
  }

  * {
    box-sizing: border-box;
    scroll-behavior: smooth;
    
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
        Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    overflow-x: hidden;
  }

  @media (prefers-color-scheme: dark) {
    body {
      background: var(--darkBackground);
    }
  }
</style>

<main>
	<slot></slot>
</main>