import React, { PureComponent } from 'react'

class PureComp extends PureComponent {
    render() {
        return (
            <div>
                <p>I am leanring {this.props.learn}</p>
            </div>
        )
    }
}

export default PureComp
