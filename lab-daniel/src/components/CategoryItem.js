import React from 'react';
import { connect } from 'react-redux';
import CategoryForm from './CategoryForm'
import { destroy } from '../actions/category-actions'


class CategoryItem extends React.Component {
    constructor(props) {
        super(props);

        this.handleRemove = this.handleRemove.bind(this)
    }

    handleRemove(e) {
        e.preventDefault();
        let remove = this.props.id
        console.log(this.props.destroy(this.props.id))
    }


    render() {
        return(
            <form onSubmit={this.handleRemove}>
                <h3>{this.props.name}</h3>
                <h4>{this.props.budget}</h4>
                <p>{this.props.timestamp}</p>
                <button>Delete</button>
            </form>
        )
    }
}

const mapStateToProps = state => ({
    categories: state.categories
});

const mapDispatchToProps = (dispatch, getState) => {
    return {
        destroy: (id) => dispatch(destroy(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryItem);

