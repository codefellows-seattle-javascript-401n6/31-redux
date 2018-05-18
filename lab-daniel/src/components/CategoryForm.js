import React from 'react'
import uuidv4 from 'uuid/v4'

class CreateForm extends React.Component{
    constructor(props){
        super(props);
            this.state = {
                name: '',
                budget: 0,
                isEditing: false
            }
    this.submit = this.submit.bind(this);
    this.onChange = this.onChange.bind(this);
    }

    submit(e) {
        e.preventDefault();
        const category = Object.assign({}, this.state, {id: uuidv4(), timestamp: new Date()})
        this.props.create(category)
        console.log('New category: ', category)
    }

    onChange(e) {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    render(){
        return (
            <form onSubmit={this.submit}>
                <input id="name" name="name" type="text" onChange={this.onChange} placeholder="name" />
                <input  id="budget" name="budget" type="number" onChange={this.onChange} placeholder="budget" />
                <button id="submit"> SUBMIT </button>
            </form> 
        )
    }
}
export default CreateForm;