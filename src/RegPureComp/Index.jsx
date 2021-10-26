import React, { Component } from 'react'
import PureComp from './PureComp'
import RegComp from './RegComp'

class Index extends Component {

    state = {
        learn: 'ReactJS'
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                learn: 'ReactJS'
            })
        }, 1000)
    }

    render() {
        return (
            <div>
                {/* <RegComp learn={'ReactJS'} />
                <PureComp learn={'ReactJS'} /> */}

                <RegComp learn={this.state.learn} />
                <PureComp learn={this.state.learn} />
            </div>
        )
    }
}

export default Index
