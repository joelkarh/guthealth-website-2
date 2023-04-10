import { useRouter } from 'next/router'
import {motion as m } from 'framer-motion'
import Layout from '../components/layout'
import Confetti from 'react-confetti'

function Success() {
     const router = useRouter()
     return (
          
          
       <Layout>
       <m.main initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} 
            className='flex items-center justify-center h-screen'>
            <section className='font-["Baskerville"] bg-white rounded-lg w-3/4 md:w-1/2 text-[#333] p-16'>
                 <h1 className='pb-4 text-xl md:text-2xl lg:text-3xl'>Thanks for your Email {router.query.name} 💖</h1>
                 <p className='text-lg lg:text-xl  text-[#333] font-["Baskerville"]'>I&apos;ll get back to you as soon as possible</p>
                    </section>
               </m.main>
               <Confetti gravity={.1} />
          </Layout>
              
  )
}

export default Success