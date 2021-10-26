import React, { Component } from "react";

const data = [
    'HTML',
    'HTML5',
    'CSS',
    'CSS3',
    'Bootstrap',
    'Bootstrap4',
    'SASS',
    'Git',
    'GitHub',
    'JavaScript',
    'Funcational Programming',
    'Funcational Programmi',
    'ReactJS'
]

class Smart extends Component {

    state = {
        msg: data[0]
    }

    componentDidMount() {
        setInterval(() => {
            const indexGenerator = Math.floor(Math.random() * data.length)
            this.setState({
                msg: data[indexGenerator]
            })
        }, 2 * 1000);
    }

    render() {
        return (
            <div className='border p-2 w-50 m-auto'>
                <p>{this.state.msg}</p>
            </div>
        )
    }
}
export default Smart

// const url = 'https://type.fit/api/quotes'
// fetch(url)
//     .then(response => response.json())
//     .then(quote => console.log(quote))