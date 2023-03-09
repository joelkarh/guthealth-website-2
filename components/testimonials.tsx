import React from 'react'
import Button from './button'
import TestimonialCard from './testimonialcard'
import Slider from "react-slick";
function SampleNextArrow(props : {
    className: any;
    style: any;
    onClick: any;
}) {
    const {className, style, onClick} = props;
    return (<div
        className={className}
        style={{
        ...style,
        display: "block",
        background: "#e4e2d3",
        borderRadius: '5px 5px 5px 5px'
    }}
        onClick={onClick}/>);
}

function SamplePrevArrow(props : {
    className: any;
    style: any;
    onClick: any;
}) {
    const {className, style, onClick} = props;
    return (<div
        className={className}
        style={{
        ...style,
        display: "block",
        background: "#e4e2d3",
        borderRadius: '5px 5px 5px 5px'
    }}
        onClick={onClick}/>);
}

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

    ]
}
function Testimonials() {
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
        nextArrow: <SampleNextArrow className={undefined} style={undefined} onClick={undefined}/>,
        prevArrow: <SamplePrevArrow className={undefined} style={undefined} onClick={undefined}/>,
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
    return ( <> <section id='Testimonials' className=''>
        <h1 className='my-20'>{data.title}</h1>
        <Button text={data.buttonText}/>
        <div className='lg:m-16 my-12'>
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
    </section> </>
  )
}

export default Testimonials