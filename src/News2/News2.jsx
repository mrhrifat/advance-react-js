import React, { Component } from 'react'
import serverNews, { newsCategory, country } from './Utilities/Index'
import Header from './Components/Header'
import Loading from './Components/Loading'
import NewsList from './Components/NewsList'
import Paggination from './Components/Paggination'
import Result from './Components/Result'

const news = new serverNews(newsCategory.technology, country.us)

// news.getNews()
//     .then(data => console.log(data))
// console.log(news)

class News2 extends Component {

    state = {
        data: {},
        isLoading: true
    }

    componentDidMount() {
        news.getNews()
            .then(res => {
                console.log(res)
            })
            .catch(e => {
                console.log(e)
                this.setState({})
            })
    }

    render() {
        return (
            <div className="w-100 border m-auto p-2 my-5">
                <Header
                    category={this.state.category}
                    changeCategory={this.changeCategory}
                />

                <Result
                // totalResults={ }
                // totalPage={ }
                // page={ }
                />

                <NewsList
                // news={ }
                />

                <Paggination

                />

                <Loading />

            </div>
        )
    }
}

export default News2
