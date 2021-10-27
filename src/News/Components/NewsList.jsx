import React from 'react'

const dateString = dateTimeString => {
    return new Date(dateTimeString).toDateString()
}

const NewsCard = ({ item }) => {
    return (
        <div className='card mb-4'>
            {item.urlToIamge && (
                <img
                    className='card-img-top'
                    src={item.urlToIamge}
                    alt={item.title}

                />
            )}
            <div className="card-body">
                <a
                    href={item.url}
                    target='_blank'
                    rel='noopener noreferrer'
                    style={{
                        color: 'black',
                        textDecoration: 'none',
                    }}
                >
                    <h5>{item.title}</h5>
                </a>

                <a
                    href={item.url}
                    target='_blank'
                    rel='noopener noreferrer'
                    style={{
                        color: 'black',
                        textDecoration: 'none',
                    }}
                >
                    <p>{item.content}</p>
                </a>
            </div>

            <div className="card-footer d-flex align-item-center justify-content-between">
                <small>
                    {dateString(item.publishedAt)} Ago
                </small>

                <div
                    style={{
                        display: 'inline-block',
                        borderRadius: '5px',
                        background: '#198754',
                        padding: '6px',
                        borderRadius: '6px',
                        color: '#fff',
                    }}
                >
                    <small>{item.source.name}</small>
                </div>
            </div>

        </div>
    )
}



const NewsList = ({ news }) => {
    return (
        <div>
            {/* {console.log(news)} */}
            {news && news.length === 0 && <h6>'There Is No News Today'</h6>}
            {news && news.map(item =>
                <NewsCard
                    key={item.title}
                    item={item}
                />
            )}
        </div>
    )
}

export default NewsList
