import React, { Component } from 'react'

class Result extends Component {
    render() {
        // const { totalResults } = this.props
        return (
            <div className='d-flex justify-content-between'>
                <p
                    className='text-black-50'
                >
                    About {1} result found
                </p>
                <br />
                <p
                    className='text-black-50'
                >
                    {1} of {100}
                </p>

            </div>
        )
    }
}

export default Result
