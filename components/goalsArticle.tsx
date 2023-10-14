

function GoalsArticle() {

    const data = [
        {
            id: 1,
            number: 1,
            title: 'Schedule a call',
            description: 'Tijdens dit kennismakingsgesprek bespreken we je specifieke vragen en wensen, zoeken we samen uit wat ik voor jou kan betekenen en bespreek ik mijn aanbod.',
        },
        {
            id: 2,
            number: 2,
            title: 'Set your goals',
            description: 'We brengen jouw doelen & verwachtingen in kaart om zo doelgericht mogelijk te werk te gaan. We stellen samen realistische doelen op voor de duur van onze samenwerking.',
        },
        {
            id: 3,
            number: 3,
            title: 'Heal',
            description: 'Nu zijn we klaar voor het echte werk: het herstellen van jouw darmgezondheid, hormoonbalans én metabolisme.',
        },
    ]
    return (
        <div className='flex flex-col justify-center lg:flex-row'>
            {data.length > 0 ? data.map(({ id, number, title, description }) => (
                <article key={id} className='m-auto my-10 text-center __goals-box '>
                    <div className='__cirkelBox '>
                        <span className='__cirkelBox-cirkel'>{number}
                        </span>
                    </div>
                    <div data-aos="fade-up">
                        <h2 className='py-2 my-4 xl:my-8 xl:pt-4'>{title}</h2>
                        <p>{description}</p>
                    </div>
                </article>
            )) : 'nothing'}
            <div className='__cirkelBox-cirkel-lineprogress'></div>
        </div>
    )
}

export default GoalsArticle