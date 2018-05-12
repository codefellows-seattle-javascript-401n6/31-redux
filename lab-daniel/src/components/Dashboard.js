import React from 'react';
import { connect } from 'react-redux';
import { create } from '../actions/category-actions';
import CategoryForm from './CategoryForm.js';
import CategoryItem from './CategoryItem.js';
import CategoryList from './CategoryList.js';

class Dashboard extends React.Component {
    constructor(props){
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>
                <CategoryForm create={this.props.create}/>
                <CategoryList />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    categories: state.categories
});

const mapDispatchToProps = (dispatch, getState) => {
    return {
        create: (category) => dispatch(create(category))
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);