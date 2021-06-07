import Head from 'next/head';

export default function ServiceManual() {
  return (
    <>
      <Head>
        <title>Honda VTR250 Service Manual</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1"
        />
        <link rel="stylesheet" href="/cx500/service-manual/styles.css" />
      </Head>
      <div id="container">
        <a href="/bikes/vtr250/service-manual/VTR250_Workshop_Manual.pdf">
          VTR250_Workshop_Manual
        </a>
      </div>
    </>
  );
}
