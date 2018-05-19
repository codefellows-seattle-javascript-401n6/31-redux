'use strict';

import React from 'react'
import uuidv4 from 'uuid/v4';

class CategoryForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            budget: 0, 
            id: uuidv4(),
            timestamp: null
        }
        this.onChange = this.onChange.bind();
        this.onSubmit = this.onSubmit.bind();

    }

    onChange(ev) {
        this.setState({
            [ev.target.name]: ev.target.value
        })

    }

    onSubmit(ev) {
        ev.preventDefault();
        this.props.create(this.state);
    }


    render() {
        return 
    <form> 
        <input name='name' onChange={this.onChange} placeholder='name'></input>
        <input name='budget' onChange={this.onChange} placeholder='budget' type='number'></input>
        <button>create</button>
    </form>
    }
}

export default CategoryForm;