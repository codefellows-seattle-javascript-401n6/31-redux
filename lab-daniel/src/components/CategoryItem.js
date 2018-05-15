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
        let id = e.target.id;
        console.log('ID:', id)
        this.props.destroy(id)
    }


    render() {
        return(
            <React.Fragment>
                <h3>{this.props.name}</h3>
                <h4>{this.props.budget}</h4>
                <button onClick={this.handleRemove}> Delete </button>
            </React.Fragment>
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

