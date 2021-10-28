import axios from 'axios'
import React, { Component } from 'react'
import Header from './Components/Header'
import Loading from './Components/Loading'
import NewsList from './Components/NewsList'
import Paggination from './Components/Paggination'
import Result from './Components/Result'
import { newsCategory } from './Utilites'

// const fakeNews = [
//     {
//         title: 'Title',
//         content: 'Content',
//         url: 'https://facebook.com',
//         urlToImage: 'https://facebook.com',
//         publishedAt: 'published at',
//         source: {
//             name: 'Facebook'
//         }
//     },
//     {
//         title: 'Title',
//         content: 'Content',
//         url: 'https://youtube.com',
//         urlToImage: 'https://youtube.com',
//         publishedAt: 'published at',
//         source: {
//             name: 'Youtube'
//         }
//     },
// ]



class News extends Component {

    MAX_ITEM_PER_PAGE = 2

    state = {
        news: [],
        category: newsCategory.technology,
        totalResults: '',
        pageSize: this.MAX_ITEM_PER_PAGE,
        totalPage: 0,
        page: 1,
    }


    request = () => {

        let url = `${process.env.REACT_APP_URL}?country=us&apikey=${process.env.REACT_APP_API_KEY}&category=${this.state.category}&pageSize=${this.MAX_ITEM_PER_PAGE}&page${this.state.page}`

        console.log(url)


        const totalPageFunc = () => {
            return Math.ceil(this.state.totalResults / this.MAX_ITEM_PER_PAGE)
        }

        axios.get(url)
            .then(response => {
                // console.log(response)
                console.log(response.data)
                // console.log(response.data.articles)
                this.setState({
                    news: response.data.articles,
                    totalResults: response.data.totalResults,

                }
                    , () => {
                        this.setState({
                            totalPage: totalPageFunc()
                        })
                    }
                )
            })
            .catch(e => {
                throw new Error(e)
            })
    }


    componentDidMount() {
        return this.request()
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.category !== this.state.category) {
            return this.request()
        }
    }


    // componentDidUpdate(prevProps, prevState) {
    //     if (prevState.category !== this.state.category) {
    //         const url = `${process.env.REACT_APP_URL}?country=us&apikey=${process.env.REACT_APP_API_KEY}&category=${this.state.category}&pageSize=5`
    //         // console.log(url)
    //         axios.get(url)
    //             .then(response => {
    //                 //console.log(response.data)
    //                 // console.log(response.data.articles)
    //                 this.setState({
    //                     news: response.data.articles
    //                 })
    //             })
    //             .catch(e => {
    //                 throw new Error(e)
    //             })
    //     }
    // }

    changeCategory = category => {
        this.setState({
            category
        })
    }

    render() {
        return (
            <div className="w-100 border m-auto p-2 my-5">
                <Header category={this.state.category} changeCategory={this.changeCategory} />
                <Result totalResults={this.state.totalResults} totalPage={this.state.totalPage} page={this.state.page} />
                <NewsList news={this.state.news} />
                <Paggination handleNext={this.handleNext} />
                <Loading />
                {/* {console.log(this.handleNext)} */}
            </div>
        )
    }
}

export default News
