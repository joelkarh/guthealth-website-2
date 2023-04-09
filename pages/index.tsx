import Head from 'next/head'
import Layout from '../components/layout'
import Goals from '../components/goals'
import Hero from '../components/hero'
import Truths from '../components/truths'
import TODO from '../components/toDo'
import Testimonials from '../components/testimonials'
import WhatTodo from '../components/whattodo'
import Qa from '../components/qa'
import {client} from '../variables'
import { useNextSanityImage } from 'next-sanity-image'
import imageUrlBuilder from '@sanity/image-url'
import { myCustomImagebuilder } from '../imageBuilder'

type hero = {
    image_Url: string,
    heroSubtitle: string,
    heroTitle: string
}


export default function Home({ image_Url, heroSubtitle, heroTitle }: hero): JSX.Element {
    const imageProps = useNextSanityImage(client, image_Url, {
      imageBuilder:myCustomImagebuilder
  })
  console.log(image_Url)
  return (
        <Layout>
            <Head>
                <title>Guthealth</title>
                <meta name="description" content="Guthealth"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <Hero propimage={imageProps} heroImage={''} heroSubtitle={heroSubtitle} heroTitle={heroTitle}/>
            <Goals/>
            <Truths/>
            <TODO/>
            <Testimonials/>
            <WhatTodo/>
            <Qa/>
        </Layout>
    )}

export const getStaticProps = async() => {
  const data = await client.fetch(`*[_type =='home'][0]{
  hero_subtitle,
  hero_title,
  "imageUrl": hero_Image.asset
  }
  `)
    const {hero_subtitle, hero_title, imageUrl} = data
    const heroSubtitle = hero_subtitle
  const heroTitle = hero_title
  const image_Url = imageUrl
console.log(imageUrl)
    return {
        props: {
            
            image_Url,
            heroSubtitle,
            heroTitle
        }
    }
}
