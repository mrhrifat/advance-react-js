import React, { Component } from 'react'

class Paggination extends Component {
    state = {
        isEditable: false
    }
    render() {
        const { isEditable } = this.state
        const { currentPage, totalPage, next, prev, isNext, isPrev, handlePageChange, goToPage } = this.props
        return (
            <div className='my-4 d-flex align-items-center justify-content-between'>
                <button
                    className="btn btn-success"
                    disabled={!isPrev}
                    onClick={() => {
                        prev()
                    }}
                >
                    Prev
                </button>

                <div className="flex-grow-1 text-center">
                    {isEditable ? (
                        <input
                            type="number"
                            value={currentPage}
                            onChange={e => {
                                handlePageChange(e.target.value)
                            }}
                            onKeyPress={e => {
                                if (e.key === 'Enter') {
                                    goToPage()
                                    this.setState({
                                        isEditable: !this.state.isEditable
                                    })
                                }
                            }}
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
                                    isEditable: !isEditable,
                                })
                            }}
                        >
                            {currentPage} of {totalPage}
                        </p>
                    )}
                </div>
                <button
                    className="btn btn-success"
                    disabled={!isNext}
                    onClick={() => {
                        next()
                    }}
                >
                    Next
                </button>
            </div >
        )
    }
}
export default Paggination