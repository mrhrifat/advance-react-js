import React, { Component } from 'react'


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
        return (
            <div>
                <h4>NewsHub</h4>
                <input
                    type='search'
                    placeholder='Please Type & Press Enter To Search'
                    className='form-control my-3'
                    onChange={this.handleChange}
                    onKeyPress={this.handleKeyPress}
                    value={this.state.initialText}
                />

                <div className="my-3 d-flex">

                </div>
            </div>
        )
    }
}

export default Header
