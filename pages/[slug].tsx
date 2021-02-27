import Head from "next/head"


export default function GoProject({ project }) {
  return <>
    <Head>
      <meta name="go-import" content={`${process.env.VERCEL_URL}/${project.slug} git ${project.repo}`} />
      <meta name="go-source" content={`${process.env.VERCEL_URL}/${project.slug} ${project.repo} ${project.repo}/tree/master{/dir} ${project.repo}/tree/master{/dir}/{file}#L{line}`} />
      <meta http-equiv="refresh" content={`0; url=https://pkg.go.dev/${project.repo}`} />
    </Head>
    Nothing to see here; <a href={`https://pkg.go.dev/${project.repo}`}>see the package on godoc</a>.
  </>
}

export async function getStaticProps({ params }) {
  const projects = (await import('./_go_projects')).default
  return {
    props: {
      project: projects[params.slug]
    }
  }
}

export async function getStaticPaths() {
  const projects = (await import('./_go_projects')).default

  return {
    paths: Object.keys(projects).map((slug) => ({ params: { slug }})),
    fallback: false // See the "fallback" section below
  };
}