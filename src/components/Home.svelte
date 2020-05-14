<Section name="home">
  <div slot="background">
    <Segment color="pale-purple" top="35,70" left="95,60"></Segment>
    <Segment color="pink" top="38,80" left="50,35"></Segment>
    <Segment color="purple" top="25,35" right="75,60"></Segment>
    <Segment color="pale-purple" bottom="20" right="100"></Segment>
  </div>
  <div>
    <h1>Hey, I'm Tom</h1>

    <div class="social">
      <a href="https://github.com/thattomperson/" target="_blank">
        <Icon icon={faGithub} />
      </a>
      <a href="https://github.com/thattomperson/" target="_blank">
        <Icon icon={faEnvelope} />
      </a>
      <a href="https://github.com/thattomperson/" target="_blank">
        <Icon icon={faTwitter} />
      </a>
    </div>
  </div>


  <div class="scroll">
    <a href="#about">
      <svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 76 130">
        <g fill="none">
          <rect class="mouse" stroke-width="3" width="70" height="118" x="1.5" y="1.5" rx="36"></rect>
          <circle class="scroll_wheel" cx="36.5" cy="31.5" r="4.5"></circle>
        </g>
      </svg>
    </a>
  </div>

</Section>

<script>
import Icon from './Icon.svelte'
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub'
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope'
import Section from './Section.svelte'
import Segment from './SectionSegment.svelte'

import Stack from './Stack.svelte'
import Cover from './Stack.svelte'
</script>

<style>
h1 {
  font-size: 72px;
  color: var(--primary);
}

a {
  text-decoration: none;
  color: var(--primary);
  font-size: 48px;
  margin: 1rem;
}

@media (prefers-color-scheme: dark) {
  h1, a {
    color: var(--primaryLight);
  }
}

@keyframes scroll {
  0% {
    transform: translateY(0) scaleY(1);
  }
  100% {
    transform: translateY(36px) scaleY(2);
    opacity: 0;
  }
}

@keyframes scrollSlow {
  0%, 10.1% {
    transform: translateY(0) scaleY(1);
    opacity: 1;
  }
  10% {
    transform: translateY(36px) scaleY(2);
    opacity: 0;
  }
}

.mouse {
  stroke: var(--primary);
  @media (prefers-color-scheme: dark) {
    stroke: var(--primaryLight);
  }
}
.scroll {
  position: absolute;
  bottom: 1rem;
  left: 50%;
  margin: auto;
  margin-left: -25px;
  cursor: pointer;
  width: 50px; 
  
}
.scroll a {
  margin: 0;
}

.scroll_wheel {
  animation: scroll 1.5s cubic-bezier(0.65,-0.55,0.25,1.5) infinite;
  fill: var(--primary);
  @media (prefers-color-scheme: dark) {
    fill: var(--primaryLight);
  }

  @media (prefers-reduced-motion: reduced) {
    animation-name: scrollSlow;
    animation-duration: 10s;
  }
}
</style>