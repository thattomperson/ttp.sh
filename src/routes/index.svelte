
<script>
import Section from '../components/Section.svelte'
import Segment from '../components/SectionSegment.svelte'

import Home from '../components/Home.svelte'
import About from '../components/About.svelte'
import Stack from '../components/Stack.svelte'
</script>

<svelte:head>
	<title>Tom Albrighton</title>
</svelte:head>

<Stack padding=0>
  <Home></Home>
  <About></About>

  <Section name="projects">
    <div slot="background">
      <Segment color="pale-pink" top="80" right="100"></Segment>
      <Segment color="bg" top="45,20" right="49"></Segment>
      <Segment color="purple" bottom="25,40" right="75,60"></Segment>
      <Segment color="pale-purple" bottom="25,20" left="100"></Segment>
    </div>



    <a href="/projects">View All</a>
  </Section>

  <Section name="contact-me">
    <div slot="background">
      <Segment color="pale-purple" top="15,10" right="100"></Segment>
      <Segment color="pink" bottom="50,40" left="70,40"></Segment>
      <Segment color="purple" bottom="40,15" right="100"></Segment>
    </div>
  </Section>
</Stack>