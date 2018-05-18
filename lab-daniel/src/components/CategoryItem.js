import React from 'react';
import { connect } from 'react-redux';
import CategoryForm from './CategoryForm'
import { create, destroy, update } from '../actions/category-actions'


class CategoryItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditing: false
        }

        this.handleRemove = this.handleRemove.bind(this)
        this.handleEdit = this.handleEdit.bind(this)
        this.toggleEdit = this.toggleEdit.bind(this)
    }
    handleRemove(e) {
        e.preventDefault();
        let id = e.target.id;
        this.props.destroy(id);
    }

    toggleEdit(e) {
        console.log('clicked')
        this.setState({ isEditing: !this.state.isEditing })
    }
    
    handleEdit(e) {
        e.preventDefault();
        this.toggleEdit();
        console.log((this.state.isEditing != true))
    }
    render() {
        const categoryId = this.props.id;
        if(this.state.isEditing != false) {
            return (
                <div>
                    <CategoryForm id={this.props.id} name="update"></CategoryForm>
                    <button onClick={(event)=>this.toggleEditOff(event, categoryId)}>Cancel</button>
                </div>
            )
        }
        return(
            <form className="bills">
                <h3>Name: {this.props.name}</h3>
                <h3>Cost: ${this.props.budget}</h3>
                <div id="item-buttons">
                <button className="remove" onClick={this.handleRemove}>Remove</button>
                <button className="edit"  onClick={this.handleEdit}>Edit</button>
                </div>
                {'' + this.state.isEditing}
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

export default connect(mapStateToProps, mapDispatchToProps)(CategoryItem);

