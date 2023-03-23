/* eslint-disable @next/next/no-img-element */
import {useEffect} from 'react'
import Button from './button'
import TestimonialCard from './testimonialcard'
import Slider from "react-slick";
import AOS from "aos";
import "aos/dist/aos.css";

const data = {
    id: 0,
    title: 'Join hundreds of happy people',
    buttonText: "Let's call",
    people: [
        {
            id: 0,
            name: 'Johanna Jackson',
            job: 'Agency Owner',
            img: '/hero_image.jpg',
            text: 'Working with Maria was an absolutely life changing. I finally made a good life w' +
                    'ork balance, took my business of the ground while keeping healthy relationship w' +
                    'ith my friends and family.'
        }, {
            id: 1,
            name: 'Johanna Jackson',
            job: 'Agency Owner',
            img: '/hero_image.jpg',
            text: 'Working with Maria was an absolutely life changing. I finally made a good life w' +
                    'ork balance, took my business of the ground while keeping healthy relationship w' +
                    'ith my friends and family.'
        }, {
            id: 2,
            name: 'Johanna Jackson',
            job: 'Agency Owner',
            img: '/hero_image.jpg',
            text: 'Working with Maria was an absolutely life changing. I finally made a good life w' +
                    'ork balance, took my business of the ground while keeping healthy relationship w' +
                    'ith my friends and family.'
        }, {
            id: 3,
            name: 'Johanna Jackson',
            job: 'Agency Owner',
            img: '/hero_image.jpg',
            text: 'Working with Maria was an absolutely life changing. I finally made a good life w' +
                    'ork balance, took my business of the ground while keeping healthy relationship w' +
                    'ith my friends and family.'
        }, {
            id: 4,
            name: 'Johanna Jackson',
            job: 'Agency Owner',
            img: '/hero_image.jpg',
            text: 'Working with Maria was an absolutely life changing. I finally made a good life w' +
                    'ork balance, took my business of the ground while keeping healthy relationship w' +
                    'ith my friends and family.'
        }, {
            id: 5,
            name: 'Johanna Jackson',
            job: 'Agency Owner',
            img: '/hero_image.jpg',
            text: 'Working with Maria was an absolutely life changing. I finally made a good life w' +
                    'ork balance, took my business of the ground while keeping healthy relationship w' +
                    'ith my friends and family.'
        }
    ],
    quote:
        {
            title:'Life shoulld not only be lived ' + 'it should be celebrated',
        author:'Mark Twain : The Story of the Fox',
    }
}
function Testimonials() {
    useEffect(() => {
        AOS.init({
            delay: 200, // values from 0 to 3000, with step 50ms
            duration: 3000, // values from 0 to 3000, with step 50ms
        });
      }, []);
    const reviews = data.people
    const reviewList = data.people.length
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 600,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2.5,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            }, {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }, {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return ( <> <section id='Testimonials' className='container mx-auto' data-aos="fade-in">
        <h1 className='my-20'>{data.title}</h1>
        <Button text={data.buttonText}/>
        <div className='my-32'>
            <Slider {...settings}>
                {reviewList > 0 && reviews.map(({
                    name,
                    text,
                    img
                }, i) => (
                    <article key={i} className='__Testimonial_card-box'>
                        <TestimonialCard name={name} text={text} img={img}/>
                    </article>
                ))
}
            </Slider>
            
        </div>
        <article className='__Testimonial-qoute pr-6 pl-6 my-32' data-aos="fade-up">
            <img src="/qoutes.svg" alt="" />
            <p>{data.quote.title}</p>
            <div className='__Testimonial-qoute-author'>{data.quote.author}</div>
        </article>
    </section> 
    </>
  )
}

export default Testimonials