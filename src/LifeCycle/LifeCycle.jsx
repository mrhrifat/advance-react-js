import React, { Component } from 'react'
import ConstructorRenderMount from './ConstructorRenderMount'

class LifeCycle extends Component {
    render() {
        return (

            <>
                <ConstructorRenderMount count='100' />
            </>
        )
    }
}

export default LifeCycle
