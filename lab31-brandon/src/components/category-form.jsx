import React from 'react'
import uuidv4 from 'uuid/v4';

class CategoryForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            budget: 0, 
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(ev) {
        ev.preventDefault();
        this.setState({
            [ev.target.name]: ev.target.value
        })

    }

    onSubmit(ev) {
        ev.preventDefault();
        this.props.create({
            id: uuidv4(),
            timestamp: new Date(),
            name:this.state.name,
            budget: this.state.budget
        })
    }

    render() {
        return <form onSubmit={this.submit}> 
        <input type='text' 
               name='name' 
               onChange={this.onChange}
               value={this.state.name}
               placeholder='name'></input>
        <input type='number'
               name='budget' 
               onChange={this.onChange}
               value={this.state.budget}
               placeholder='budget'></input>
        <button>Submit</button>
    </form>
    }
}

export default CategoryForm;