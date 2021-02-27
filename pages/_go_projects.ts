interface GoProject {
  slug: string;
  title: string;
  subtitle?: string;
  date: string;
  tags?: string[];
  repo: string;
}

const projects: GoProject[] = [
  {
    slug: 'dev-server',
    title: 'dev-server',
    date: '2018-01-25 00:00:00 +0000',
    repo: 'github.com/thattomperson/dev-server',
  },
  {
    slug: 'frost',
    title: 'frost',
    date: '2018-01-25 00:00:00 +0000',
    repo: 'github.com/thattomperson/frost',
  },
  {
    slug: 'protoc-gen-vue',
    title: 'protoc-gen-vue',
    date: '2018-01-25 00:00:00 +0000',
    repo: 'gitlab.com/dps-pub/open-source/protoc-gen-vue',
  },
  {
    slug: 'remote',
    title: 'remote',
    date: '2018-01-25 00:00:00 +0000',
    repo: 'github.com/thattomperson/remote',
  },
  {
    slug: 'spotigo',
    title: 'spotigo',
    date: '2018-01-25 00:00:00 +0000',
    repo: 'github.com/thattomperson/spotigo',
  },
  {
    slug: 'vm',
    title: 'vm',
    date: '2018-01-25 00:00:00 +0000',
    repo: 'github.com/thattomperson/vm',
  },
];

let _projects: { [key: string]: GoProject } = {};
projects.forEach((project) => {
  _projects[project.slug] = project;
});

export default _projects;
