import React from 'react';
import { connect } from 'react-redux';
import uuidv4 from 'uuid/v4';
import CategoryForm from './CategoryForm';
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
        this.cancelEdit = this.cancelEdit.bind(this)
    }
    handleRemove(e) {
        e.preventDefault();
        let id = e.target.id;
        this.props.destroy(id);
    }

    toggleEdit(e) {
        this.setState({ isEditing: !this.state.isEditing })
    }
    cancelEdit(e) {
        e.preventDefault();
        this.setState({ isEditing: false});
        console.log('Cancel isEditing')
    }
    handleEdit(e) {
        e.preventDefault();
        this.toggleEdit();
    }

    render() {
        const categoryId = this.props.id;
        if (this.state.isEditing != false) {
            return (
                <div onSubmit={this.handleEdit}>
                    <CategoryForm name="update"></CategoryForm>
                    <button onClick={this.cancelEdit}>Cancel</button>
                </div>
            )
        }
        else {
            return (
                <form className="bills">
                    <h3>Name: {this.props.name}</h3>
                    <h3>Cost: ${this.props.budget}</h3>
                    <div id="item-buttons">
                        <button className="remove" onClick={this.handleRemove}>Remove</button>
                        <button className="edit" onClick={this.handleEdit}>Edit</button>
                    </div>
                </form>
            )
        }
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

