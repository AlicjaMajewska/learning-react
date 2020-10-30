import React from 'react';

export class EssayForm extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {value: 'Please write an essay about your favorite DOM element.'};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('An essay was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className="input-form">
                <label className="textarea-label">
                    Essay:
                    <textarea cols="50" rows="10" value={this.state.value} onChange={this.handleChange}/>
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}
