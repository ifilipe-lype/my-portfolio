import { ThemeProvider } from 'next-themes'
import Head from 'next/head'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider defaultTheme="light" attribute="class">
        <Head>
          <meta name="description" content="An image uploader app" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@500;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp
