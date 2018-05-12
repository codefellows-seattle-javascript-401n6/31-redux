import React from 'react'

import uuidv4 from 'uuid/v4'

class CreateForm extends React.Component{
    constructor(props){
        super(props);
            this.state = {
                name: '',
                budget: 0,
                id: uuidv4(),
                timestamp: null
            }
    this.submit = this.submit.bind(this);
    this.onChange = this.onChange.bind(this);
    }

    submit(e) {
        e.preventDefault();
        this.props.create(this.state)
        console.log('New category: ', this.state)
    }

    onChange(e) {
        e.preventDefault();
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    render(){
        return (
            <form onSubmit={this.submit}>
                <h1>{this.state.header}</h1>
                <input type="text" onChange={this.onChange} placeholder="name" />
                <input type="number" name="budget" onChange={this.onChange} placeholder="budget" />
                <button> submit </button>
            </form> 
        )
    }
}
export default CreateForm;