import React, { Component } from 'react'

class Result extends Component {
    render() {
        const { totalResults, totalPage, page } = this.props
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
                    {page} of {totalPage}
                </p>
                {console.log(totalPage)}
            </div>
        )
    }
}

export default Result
