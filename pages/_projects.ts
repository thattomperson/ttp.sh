interface Project {
  title: string;
  link?: string;
  icon?: string;
  github: string;
}

const projects: Project[] = [
  {
    title: "Tom's Cooking",
    link: 'https://toms.cooking',
    github: 'https://github.com/thattomperson/toms.cooking',
    icon: '/projects/toms-cooking.jpg',
  },
  {
    title: 'Better Recommends for Spotify',
    link: 'https://recommend.ttp.sh/',
    github: 'https://github.com/thattomperson/spotify-recommends',
    icon: '/projects/spotify-recommends.jpg',
  },
  {
    title: 'Lizard Maze',
    link: 'https://lizard.ttp.sh',
    github: 'https://github.com/thattomperson/lizard.pictures',
  },
];

export default projects;
