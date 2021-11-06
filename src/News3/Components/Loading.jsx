import React, { Component } from 'react'

class Loading extends Component {
    render() {
        return (
            <div className='my-4 d-flex align-item-center justify-content-between'>
                <p>
                    <strong>Loading...</strong>
                </p>
                <div
                    className='spinner-border text-success'
                    role='status'
                    aria-hidden='true'
                >

                </div>
            </div>
        )
    }
}

export default Loading
