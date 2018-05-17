import React from 'react';
import { connect } from 'react-redux';
import CategoryForm from './CategoryForm'
import { create, destroy } from '../actions/category-actions'


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
        console.log('clicked')
        this.toggleEdit();
    }
    render() {
        return(
            <form>
                <h3>{this.props.name}</h3>
                <h4>{this.props.budget}</h4>
                <button onClick={this.handleRemove}>Remove</button>
                <button onClick={this.handleEdit}>Edit</button>
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
        destroy: (id) => dispatch(destroy(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryItem);

