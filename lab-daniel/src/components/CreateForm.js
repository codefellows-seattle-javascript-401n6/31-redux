import React from 'react';
import uuidv4 from 'uuid/v4';

class CreateForm extends React.Component {
    constructor(props){
      super(props);
      this.state= {
          name: '',
          budget: 0
      }
      this.submit = this.submit.bind(this);
      this.onChange = this.onChange.bind(this)
    }

    submit(ev) {
        ev.preventDefault();
        this.props.create({
            id: uuidv4(),
            timestamp: new Date(),
            name: this.state.name,
            budget: this.state.budget
        })
    }

    onChange(ev) {
        ev.preventDefault();
        this.setState({
            [ev.target.name] : ev.target.value
        })
    }
    render() {
        return (
            <form onSubmit={this.submit}>
                <input
                    type="text"
                    name="name"
                    onChange={this.onChange}
                    value={this.state.name}
                    placeholder="Name">
                </input>
                <input
                    type="number"
                    name="budget"
                    onChange={this.onChange}
                    value={this.state.budget}
                    placeholder="Budget">
                </input>
                <button> Submit </button>
            </form>
        )
    }
}

export default CreateForm;