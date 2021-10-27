import React, { Component } from 'react'
import Header from './Components/Header'
import Loading from './Components/Loading'
import NewsList from './Components/NewsList'
import Paggination from './Components/Paggination'
import Result from './Components/Result'
import { newsTags } from './Utilites'

const fakeNews = [
    {
        title: 'Title',
        content: 'Content',
        url: 'https://facebook.com',
        urlToImage: 'https://facebook.com',
        publishedAt: 'published at',
        source: {
            name: 'Facebook'
        }
    },
    {
        title: 'Title',
        content: 'Content',
        url: 'https://youtube.com',
        urlToImage: 'https://youtube.com',
        publishedAt: 'published at',
        source: {
            name: 'Youtube'
        }
    },
]

class News extends Component {
    render() {
        return (
            <div className="w-100 border m-auto p-2 my-5">
                <Header tags={newsTags.technology} />
                <Result />
                <NewsList news={fakeNews} />
                <Paggination />
                <Loading />
            </div>
        )
    }
}

export default News
