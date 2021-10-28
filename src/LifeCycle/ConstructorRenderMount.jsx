import React, { Component } from 'react'


class UnmmountChildren extends Component {
    componentWillUnmount() {
        console.log('Child: Will Unmount Called')
    }
    componentDidMount() {
        console.log('Child: Did Mount Called')
    }
    render() {
        return (
            <p>I will remove soon...</p>
        )
    }
}


class ConstructorRenderMount extends Component {

    constructor() {
        super()
        this.state = {
            count: 0
        }
        this.handleCount = () => {
            this.setState({
                count: this.state.count + 1
            })
        }
        this.divReference = React.createRef()
        this.btnReferecne = React.createRef()
        console.log('Constructor Called')
    }

    componentDidMount() {
        console.log('Component Did Mount Called')
        // console.dir(this.divReference.current)
        // console.log('Reference in Did Mount: ' + this.divReference.current)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('Component Did Update Called')
        console.log(snapshot)
    }

    // static getDerivedStateFromProps(state, props) {
    //     console.log('Get Derived State From Props')
    //     if (props.count !== state.count) {
    //         return {
    //             count: state.count
    //         }
    //     }
    //     return null
    // }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('Should Component Update')
        // return nextState.count <= 5
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('Get SnapShot Before Update')
        const btn = this.btnReferecne.current
        console.log(btn)
        return btn.offsetTop || null
    }

    render() {
        console.log('Render Called')
        // console.log('Reference: ' + this.divReference.current)
        return (
            <>
                <div
                    className='w-50 my-5 d-flex align-items-center justify-content-between'
                    ref={this.divReference}
                >
                    <p
                        className="lead m-0"
                    >
                        {this.state.count}
                    </p>
                    <button
                        className="btn btn-success btn-sm"
                        onClick={this.handleCount}
                        ref={this.btnReferecne}
                    >
                        Increment
                    </button>

                </div>
                <div>
                    <p>{this.state.count % 2 == 0 && <UnmmountChildren />}</p>
                </div>
            </>
        )
    }
}

export default ConstructorRenderMount
