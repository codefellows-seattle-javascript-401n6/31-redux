import React from 'react';
import {connect} from 'react-redux';
import {create, update, destroy} from '../actions/category-actions.jsx';
import CategoryForm from './category-form.jsx';
import CategoryList from './category-list.jsx';

class Dashboard extends React.Component {
    render() {
        return <div>
            <h1>React w/Redux Budget Tracker </h1>
            <h2>Fill in a new Name w/Alloted Budget, then hit submit:</h2>
            <CategoryForm name='create'></CategoryForm>
            <CategoryList></CategoryList>
        </div>
    }
}

const mapStateToProps = state => ({
    categories: state.categories
});

const mapDispatchToProps = (dispatch, getState) => {
    return {
        create: (value) => dispatch(create(value)),
        update: values => dispatch(update(values)),
        destroy: id => dispatch(destroy(id)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);