import Card from '../components/Card'
import Heading from '../components/Heading'
import Page from '../components/Page'

export default function Home({ projects }) {
  return (
    <Page>
      <div className="w-full relative lg:w-1/2 flex-col flex-shrink-0 flex justify-center lg:h-screen space-y-2">
        <div className="lg:fixed p-20 w-full lg:w-1/2">
          <Heading>Hey,<br />I'm Tom</Heading>
          <p className="text-gray-300 text-2xl">
            I'm a software engineer based in<wbr />{' '}
            <a className="underline" target="_blank" href="https://www.google.com/maps/place/Adelaide+SA/@-34.9998826,138.330981">Adeliade,&nbsp;Australia</a>
          </p>
        </div>
      </div>
      <div className="w-full lg:w-1/2 flex-shrink-0 p-7 space-y-4 sm:space-y-0 lg:space-y-4 sm:space-x-4 lg:space-x-0 flex flex-col sm:flex-row lg:flex-col">
        <div className="w-full space-y-4">
          <h2 className="text-gray-300 text-2xl">Work</h2>
          <Card title="FOUR" image="/work/four.png" />
          <Card title="DPS" />
        </div>
        <div className="w-full space-y-4">
          <h2 className="text-gray-300 text-2xl">Projects</h2>
          { projects.map(project => <Card key={project.title} {...project} />)}
        </div>
      </div>
    </Page>
  )
}

export async function getStaticProps() {
  const projects = (await import('../data/_projects')).default

  return {
    props: {
      projects
    }
  }
}