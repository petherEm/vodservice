import Head from 'next/head'
import Image from 'next/image'
import Headers from '../components/Headers'
import Mymodal from '../components/Mymodal'
import Navbar from '../components/Navbar'
import Results from '../components/Results'
import requests from '../utils/requests'


export default function Home({ results }) {
  
  return (
    <div>
      <Head>
        <title>VOD by PM</title>
        <meta name="description" content="Hulu Clone" />
        <link rel="shortcut icon" href="/logo.ico" />
      </Head>

      <Mymodal />

      {/* Header */}
      <Headers />

      {/* Nav */}
      <Navbar />

      {/* Results */}
      <Results results={results} />
     
    </div>
  )
}

export async function getServerSideProps(context) {
    const genre = context.query.genre;

    const request = await fetch(
      `https://api.themoviedb.org/3${requests[genre]?.url || requests.fetchTrending.url
    }`
    ).then((res) => res.json());

    return {
      props: {
        results: request.results,
      }
    }

}
