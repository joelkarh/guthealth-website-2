import Head from 'next/head'
import Layout from '../components/layout'
import Goals from '../components/goals'
import Hero from '../components/hero'
import Truths from '../components/truths'
import TODO from '../components/toDo'


export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Guthealth</title>
        <meta name="description" content="Guthealth" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Hero/>
        <Goals/>
        <Truths/>
        <TODO/>

    </Layout>
  )
}
