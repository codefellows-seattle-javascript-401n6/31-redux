'use strict';

import React from 'react';
import uuidv4 from 'uuid/v4';

class CategoryForm extends React.Component {
    constructor(props) {
        super(props);
        this.submit = this.submit.bind(this);
        this.onChange = this.onChange.bind(this);
        this.state = {
            name: '',
            budget: 0
        }
    }

    submit(evt) {
        evt.preventDefault();
        this.props.crate({
            id: uuidv4(),
            timestamp: new Date(),
            name: this.state.name,
            budget: this.state.budget
        })
        console.log(this.props);
    };

    onChange(evt) {
        evt.preventDefault();
        this.setState({
            [evt.target.name] : evt.target.value
        })
    };

    render() {
        return <form onSubmit={this.onSubmit}>
        <input type="text"
            name="name"
            onChange={this.onChange}
            value={this.state.name}
            placeholder="name">     
        </input>
        <input type="number"
            name="budget"
            onChange={this.onChange}
            value={this.state.budget}
            placeholder="budget">
        </input>
        <button>create</button>
        </form>
    }
}

export default CategoryForm;