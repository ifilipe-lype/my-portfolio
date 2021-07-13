import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta
            name="description"
            content="I'm Filipe André (Lype), a software developer with
                  experience in building websites, web apps and Rest APIs."
          />
          <meta
            name="keywords"
            content="Filipe André, Lype, Software Developer, Web Developer, Angola, Luanda, Remote, Freelancer, Programmer, Self-taught, Javascript Developer, JS Dev, Nodejs, React"
          />
          <meta
            property="og:title"
            content="Filipe André - Software Developer"
          />
          <meta property="og:url" content="https://filipeandre.vercel.app" />
          <meta property="og:type" content="website" />
          <meta
            property="og:description"
            content="I'm Filipe André (Lype), a software developer with
                  experience in building websites, web apps and Rest APIs."
          />
          <meta property="og:image" content="https://res.cloudinary.com/dvjnagd3i/image/upload/v1625650294/portfolio_assets/avatar_vabox3.jpg" />
          <meta property="og:image:alt" content="Filipe André profile picture" />

          <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@500;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
