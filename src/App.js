import React, {Component} from 'react'

export default class App extends Component {

    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
        .then(response => response.json())
        .then(data => data.people)
    }

    render() {
        return(
            <div></div>
        )
    }
}
