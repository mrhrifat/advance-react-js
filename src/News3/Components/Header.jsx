import React, { Component } from 'react'
import { newsCategory } from '../Utilities/Index' //No need to provide index.js because of index.js

class Header extends Component {

    state = {
        initialText: ''
    }

    handleChange = event => {
        this.setState({
            initialText: event.target.value
        })
    }

    handleKeyPress = event => {
        if (event.key === 'Enter') {
            this.props.handleSearch(this.state.initialText)
        }
    }

    render() {
        const { changeCategory, category } = this.props

        return (
            <div>
                <h4 className='text-center'>Top News</h4>

                <input
                    type='search'
                    placeholder='Please Type & Press Enter To Search'
                    className='form-control my-3'
                    onChange={this.handleChange}
                    onKeyPress={this.handleKeyPress}
                    value={this.state.initialText}
                />

                <div className="my-3">
                    {newsCategory && Object.keys(newsCategory).map(item => {
                        if (category === newsCategory[item]) {
                            return (
                                <button
                                    className='btn btn-sm btn-success mb-2'
                                    style={{ marginRight: '5px' }}
                                    onClick={() => changeCategory(newsCategory[item])}

                                >
                                    {`#${newsCategory[item]}`}
                                </button>
                            )
                        }
                        else {
                            return (
                                <button
                                    className='btn btn-sm btn-secondary mb-2'
                                    style={{ marginRight: '5px' }}
                                    onClick={() => changeCategory(newsCategory[item])}
                                >
                                    {`#${newsCategory[item]}`}
                                </button>
                            )
                        }

                        // (tags === newsCategory[item] && (
                        //     <button
                        //         className='btn btn-sm btn-info mb-2'
                        //         key={id}
                        //         style={{ marginRight: '5px' }}
                        //     >
                        //         {`#${newsCategory[item]}`}
                        //     </button>
                        // )
                        //     && (
                        //         <button
                        //             className='btn btn-sm btn-secondary mb-2'
                        //             style={{ marginRight: '5px' }}
                        //         >
                        //             {`#${newsCategory[item]}`}
                        //         </button>
                        //     )
                        // )
                    })}
                </div>
            </div>
        )
    }
}

export default Header
