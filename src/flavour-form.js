import React from 'react';

export class FlavourForm extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {value: 'coconut'}

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('Your favorite flavor is: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        // You can pass an array into the value attribute, allowing you
        // to select multiple options in a select tag:
        // <select multiple={true} value={['B', 'C']}>
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Pick your favourite flavour:
                    <select value={this.state.value} onChange={this.handleChange}>
                        <option value="grapefruit">Grapefruit</option>
                        <option value="lime">Lime</option>
                        <option value="coconut">Coconut</option>
                        <option value="mango">Mango</option>
                    </select>
                    <input type="submit" value="Submit"/>
                </label>
            </form>
        );
    }
}