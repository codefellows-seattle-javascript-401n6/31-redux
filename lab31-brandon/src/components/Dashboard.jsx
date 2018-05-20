import React from 'react'
import {connect} from 'react-redux'
import {create, update, destroy} from '../actions/category-actions';
import CategoryForm from './category-form';
import CategoryItem from './category-item';

class Dashboard extends React.Component {

    render() {
        return <div>
            <h1>Categories</h1>
            <CategoryForm create={this.props.create}></CategoryForm>
            <ul>
                {this.props.categories.map(cat => {
                    return <CategoryItem
                    key={cat.id}
                    category={cat}
                    update={this.props.update}
                    delete={this.props.destroy}
                    ></CategoryItem>
                })}
            </ul>
        </div>
    }
}

const mapStateToProps = state => ({
    categories: state.categories
});

const mapDispatchToProps = (dispatch, getState) => {
    return {
        create: (category) => dispatch(create(category)),
        update: (category) => dispatch(update(category)),
        destroy: (category) => dispatch(destroy(category)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);