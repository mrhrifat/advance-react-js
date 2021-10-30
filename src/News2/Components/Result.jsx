import React, { Component } from 'react'

class Result extends Component {
    render() {
        const { totalResults, currentPage, totalPage } = this.props
        return (
            <div className='d-flex justify-content-between'>
                <p
                    className='text-black-50'
                >
                    About {totalResults} result found
                </p>
                <br />
                <p
                    className='text-black-50'
                >
                    {currentPage} of {totalPage}
                </p>

            </div>
        )
    }
}

export default Result
