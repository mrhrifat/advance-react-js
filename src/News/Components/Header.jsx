import React, { Component } from 'react'
import { newsTags } from '../Utilites' //No need to provide index.js because of index.js

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
        //TODO: Implement Later
    }

    render() {
        const { tags } = this.props

        return (
            <div>
                <h4 className='text-center'>NewsHub</h4>

                <input
                    type='search'
                    placeholder='Please Type & Press Enter To Search'
                    className='form-control my-3'
                    onChange={this.handleChange}
                    onKeyPress={this.handleKeyPress}
                    value={this.state.initialText}
                />

                <div className="my-3">
                    {newsTags && Object.keys(newsTags).map(item => {
                        if (tags === newsTags[item]) {
                            return (
                                <button
                                    className='btn btn-sm btn-success mb-2'
                                    style={{ marginRight: '5px' }}
                                >
                                    {`#${newsTags[item]}`}
                                </button>
                            )
                        }
                        else {
                            return (
                                <button
                                    className='btn btn-sm btn-secondary mb-2'
                                    style={{ marginRight: '5px' }}
                                >
                                    {`#${newsTags[item]}`}
                                </button>
                            )
                        }

                        // (tags === newsTags[item] && (
                        //     <button
                        //         className='btn btn-sm btn-info mb-2'
                        //         key={id}
                        //         style={{ marginRight: '5px' }}
                        //     >
                        //         {`#${newsTags[item]}`}
                        //     </button>
                        // )
                        //     && (
                        //         <button
                        //             className='btn btn-sm btn-secondary mb-2'
                        //             style={{ marginRight: '5px' }}
                        //         >
                        //             {`#${newsTags[item]}`}
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
