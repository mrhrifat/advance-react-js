import React, { Component } from 'react'

class Paggination extends Component {
    state = {
        isEditable: false
    }
    render() {
        const { isEditable } = this.state
        return (
            <div className='my-4 d-flex align-items-center justify-content-between'>
                <button className="btn btn-success">Prev</button>
                <div className="flex-grow-1 text-center">
                    {isEditable ? (
                        <input
                            type="number"
                            value={1}
                        />
                    ) : (
                        <p
                            style={{
                                userSelect: 'none',
                                lineHeight: '1.1'
                            }}
                            title='Double tap to jump page'
                            onDoubleClick={() => {
                                this.setState({
                                    isEditable: !isEditable
                                })
                            }}
                        >
                            {1} of {100}
                        </p>
                    )}
                </div>
                <button className="btn btn-success">Next</button>
            </div>
        )
    }
}
export default Paggination