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

class News3 extends Component {

    state = {
        data: {},
        isLoading: true
    }

    componentDidMount() {
        news.getNews()
            .then(data => {
                this.setState({
                    data,
                    isLoading: false
                })
            })
            .catch(e => {
                console.log(e)
                // alert('Something Went Wrong')
                this.setState({ isLoading: false })
            })
    }

    next = () => {
        if (this.state.data.isNext) {
            this.setState({
                isLoading: true
            })
        }

        news.next()
            .then(data => {
                this.setState({
                    data,
                    isLoading: false
                })
            })
            .catch(e => {
                console.log(e)
                // alert('Something Went Wrong')
                this.setState({ isLoading: false })
            })
    }

    prev = () => {
        if (this.state.data.isPrev) {
            this.setState({
                isLoading: true
            })
        }
        news.prev()
            .then(data => {
                this.setState({
                    data,
                    isLoading: false
                })
            })
            .catch(e => {
                console.log(e)
                // alert('Something Went Wrong')
                this.setState({ isLoading: false })
            })
    }

    goToPage = () => {
        this.setState({ isLoading: true })
        news.setCurrentPage(this.state.data.currentPage)
            .then(data => {
                this.setState({ data, isLoading: false })
            })
            .catch(e => {
                console.log(e)
                // alert('Something Went Wrong')
                this.setState({ isLoading: false })
            })
    }


    handlePageChange = value => {
        this.setState({
            data: {
                ...this.state.data,
                currentPage: Number.parseInt(value)
            }
        })
    }

    changeCategory = category => {
        this.setState({ isLoading: true })
        news.changeCategory(category)
            .then(data => {
                this.setState({
                    data,
                    isLoading: false
                })
            })
            .catch(e => {
                console.log(e)
                // alert('Something Went Wrong')
                this.setState({ isLoading: false })
            })
    }


    handleSearch = initialText => {
        this.setState({ isLoading: true })
        news.search(initialText)
            .then(data => {
                this.setState({
                    data,
                    isLoading: false
                })
            })
            .catch(e => {
                console.log(e)
                // alert('Something Went Wrong')
                this.setState({ isLoading: false })
            })
    }

    render() {
        const { articles, category, totalResults, currentPage, totalPage, isNext, isPrev } = this.state.data
        return (
            <div className="w-50 border m-auto p-2 my-5">
                <Header
                    category={category}
                    changeCategory={this.changeCategory}
                    handleSearch={this.handleSearch}
                />





                {this.state.isLoading ? (
                    <Loading />
                ) : (
                    <div>

                        <Result
                            totalResults={totalResults}
                            currentPage={currentPage}
                            totalPage={totalPage}
                        />

                        <NewsList
                            news={articles}
                        />

                        <Paggination
                            next={this.next}
                            prev={this.prev}
                            isNext={isNext}
                            isPrev={isPrev}
                            totalPage={totalPage}
                            currentPage={currentPage}
                            handlePageChange={this.handlePageChange}
                            goToPage={this.goToPage}
                        />
                    </div>
                )
                }
                {/* {console.log(this.state.data.articles)} */}



            </div>
        )
    }
}

export default News3
