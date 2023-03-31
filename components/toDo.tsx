import {useState, useEffect} from "react"
import Pillers from "./pillers"
import AOS from "aos";
import "aos/dist/aos.css";
const data = {
    title: 'Things we will do together',
    description: 'On our journey I will teach you different excercises and techniques so you can c' +
            'reate a life you deserve. Below are only some of them.',
    pillers: [
        {
            id: 0,
            title: "Meditation",
            description: 'Nullam dictum felis eu pede mollis pretium. Duis lobortis massa imperdiet quam. ' +
                    'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia' +
                    ' Curae.',
            qoute: "Obviously I've heard and tried meditation before. But it was only with Maria tha" +
                    "t I learned how to do it properly and notticed a positive change in me.",
            author: 'Joel Karhamba',
            src: '/bong.png'
        }, {
            id: 1,
            title: 'Journaling',
            description: 'Nullam dictum felis eu pede mollis pretium. Duis lobortis massa imperdiet quam. ' +
                    'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia' +
                    ' Curae.',
            qoute: "Obviously I've heard and tried meditation before. But it was only with Maria tha" +
                    "t I learned how to do it properly and notticed a positive change in me.",
            author: 'Romy Hugens',
            src: '/windowgirl.png'
        }, {
            id: 2,
            title: 'Manifestation',
            description: 'Nullam dictum felis eu pede mollis pretium. Duis lobortis massa imperdiet quam. ' +
                    'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia' +
                    ' Curae.',
            qoute: "Obviously I've heard and tried meditation before. But it was only with Maria tha" +
                    "t I learned how to do it properly and notticed a positive change in me.",
            author: 'Hendrik Hugens',
            src: '/dress.png'
        }
    ]
}
const TODO = () => {
    const [clicked,
        setClicked] = useState(0)  
        useEffect(() => {
            AOS.init({
                delay: 200, // values from 0 to 3000, with step 50ms
                duration: 3000, // values from 0 to 3000, with step 50ms
            });
          }, []);
    const dataList = data.pillers
    return ( 
    <> 
    <section id="Todo" className="mb-24  lg:m-24" data-aos="fade-up">
        <h1>{data.title}</h1>
        <p>
            {data.description}
        </p>
        <div className="flex items-center __Todo_btn-box">
            {dataList.map(({
                title,
            }, index) => (
                <button
                    onClick={() => setClicked(index)}
                    key={index}
                    type="button"
                    className={`${clicked == index
                    ? '__Todo-btn-clicked'
                    : ''} __Todo-btn`}>
                    {title}</button>
            ))
}
        </div>
        {data.pillers.length > 0 && data
            .pillers
            .map(({ title, description, qoute, author, src}, index) => 
            <article key={index} className={`${clicked == index ? ' __Todo_article lg:flex lg:justify-between lg:items-center lg:container lg:mx-auto': '__Todo_article-hide'}`}>
            <Pillers
                title={title}
                text={description}
                qoute={qoute}
                author={author}
                src={src}
                />
            </article>
        )}
    </section> 
    </>
)}
export default TODO