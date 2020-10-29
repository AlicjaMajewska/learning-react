import React from 'react';

export class Clock extends React.Component {

    constructor(props) {
        super(props);
        this.state = {date: new Date()}
    }

    render() {
        return (<div>
            <h1>Hello, world!</h1>
            <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        </div>);
    }

    componentDidMount() {
        this.timerId = setInterval(() => this.tick(), 1000); // not part of state, simply a field in a class
    }

    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    tick() {
        this.setState({date: new Date()});
    }


}