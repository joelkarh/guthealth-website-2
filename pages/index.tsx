import Head from 'next/head'
import Layout from '../components/layout'
import Goals from '../components/goals'
import Hero from '../components/hero'
import Truths from '../components/truths'
import TODO from '../components/toDo'
import Testimonials from '../components/testimonials'
import WhatTodo from '../components/whattodo'
import Qa from '../components/qa'
import { client } from '../variables'
import { useNextSanityImage } from 'next-sanity-image'

import { myCustomImagebuilder } from '../imageBuilder'

type home = {
    image_Url: String,
    heroSubtitle: String,
    heroTitle: String,
    sectionGoals: Object,
    section_subtitle: String,
    section_title: String,

}


export default function Home({ image_Url, heroSubtitle, heroTitle, sectionGoals }: home): JSX.Element {
    const imageProps = useNextSanityImage(client, image_Url, {
        imageBuilder: myCustomImagebuilder
    })
    const { section_subtitle, section_title } = sectionGoals
    console.log(typeof (sectionGoals))
    return (
        <Layout>
            <Head>
                <title>Thelocalholistic</title>
                <meta name="description" content="Thelocalholistic" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Hero propimage={imageProps} heroImage={''} heroSubtitle={heroSubtitle} heroTitle={heroTitle} />
            <Goals goalsSubtitle={section_subtitle} goalsTitle={section_title} />
            <Truths />
            <TODO />
            <Testimonials />
            <WhatTodo />
            <Qa />
        </Layout>
    )
}

export const getStaticProps = async () => {
    const data = await client.fetch(`*[_type =='home'][0]{
  hero_subtitle,
  hero_title,
  "imageUrl": hero_Image.asset,
  section,
  }
  `)
    const dataReview = await client.fetch(`*[_type =='Review'][0]{
    
}`)
    const { hero_subtitle, hero_title, imageUrl, section } = data
    const heroSubtitle = hero_subtitle
    const heroTitle = hero_title
    const image_Url = imageUrl
    const sectionGoals = section

    return {
        props: {
            sectionGoals,
            image_Url,
            heroSubtitle,
            heroTitle
        }
    }
}
