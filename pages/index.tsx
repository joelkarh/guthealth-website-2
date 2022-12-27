import Head from 'next/head'
import Image from 'next/image'
// @ts-ignore
import hero_image from '../public/hero_image.JPG'
import styles from '../styles/Home.module.scss'
import Layout from '../components/layout'
import ts from 'typescript'


export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Guthealth</title>
        <meta name="description" content="Guthealth" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <section id='hero' className=' flex flex-col md:flex-row'>
          <article className='max-w-screen-medium my-14'>
              <h1 className='font-semibold text-4xl	'>Transform your life and unleash your potential.</h1>
              <p className='text-lg	font-normal	leading-7	mt-4'>I &apos; ve helped thousands to create more stable and sustainable life though my life coaching.</p>
              <button className='flex items-center justify-between px-4 mt-8'>
            <span className='__btn-text-1'>Join me</span>
            {/*  eslint-disable-next-line @next/next/no-img-element */}
            <span className='relative'>
              {/*eslint-disable-next-line @next/next/no-img-element */}
              <img src="/arrow_up.svg" alt="" className='--arrow-up'/>
              {/*eslint-disable-next-line @next/next/no-img-element */}
              <img src="/CTX_line.svg" alt="" />
              {/*eslint-disable-next-line @next/next/no-img-element */}
              <img src="/arrow_down.svg" alt="" className='--arrow-down'/>
            </span>
          </button>
          </article>
          <div className='__image relative'>
            <Image src={hero_image} fill sizes="(max-width:768px)100vw" alt=''/>
          </div>
        </section>
    </Layout>
  )
}
