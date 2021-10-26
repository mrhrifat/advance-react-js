import React, { Component, Fragment } from 'react'

const Wrapper = ({ children }) => children

class FragComp extends Component {
    render() {
        return (
            // <div>
            //     <h5>This is title</h5>
            //     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
            // </div>


            // <Wrapper>
            //     <h5>This is title</h5>
            //     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
            // </Wrapper>

            // <React.Fragment>
            //     <h5>This is title</h5>
            //     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
            // </React.Fragment>

            // <Fragment>
            //     <h5>This is title</h5>
            //     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
            // </Fragment>

            <>
                <h5>This is title</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
            </>
        )
    }
}

export default FragComp
