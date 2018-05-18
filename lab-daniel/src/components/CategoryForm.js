import React from 'react';
import { connect } from 'react-redux';
import { create, destroy, update } from '../actions/category-actions';
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
    this.toggleEdit = this.toggleEdit.bind(this);
    }

    submit(e) {
        e.preventDefault();
        this.setState({ isEditing: false })
        const category = Object.assign({}, this.state, {id: uuidv4(), timestamp: new Date()})
        this.props.create(category)
        console.log('New category: ', category)  
    }

    onChange(e) {
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    toggleEdit(e) {
        this.setState({ isEditing: !this.state.isEditing })
    }


    render(){
        return (
            <form onSubmit={this.editSubmit}>
                <input id="name" name="name" type="text" onChange={this.onChange} placeholder="name" />
                <input  id="budget" name="budget" type="number" onChange={this.onChange} placeholder="budget" />
                <button onClick={this.submit} id="submit"> SUBMIT </button>
            </form> 
        )
    }
}
const mapStateToProps = state => ({
    categories: state.categories
});

const mapDispatchToProps = (dispatch, getState) => {
    return {
        create: (category) => dispatch(create(category)),
        destroy: (id) => dispatch(destroy(id)),
        update: values => dispatch(update(values))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateForm);