import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.scss'
import Layout from '../components/layout'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Guthealth" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="">
        <section className='homeIntro container mx-auto'>
          <article className='max-w-xs mt-14'>
              <h1 className='font-semibold text-4xl	'>Transform your life and unleash your potential.</h1>
              <p className='text-lg	font-normal	leading-7	mt-4'>I &apos; ve helped thousands to create more stable and sustainable life though my life coaching.</p>
          </article>
          <button className=''> Join me</button>
        </section>
      </main>
    </Layout>
  )
}
