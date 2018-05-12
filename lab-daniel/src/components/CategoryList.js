import React from 'react';
import { connect } from 'react-redux';
import { create } from '../actions/category-actions';
import CategoryItem from './CategoryItem.js'



class CategoryList extends React.Component {
    constructor(props) {
        super(props);
        this.catList = this.catList.bind(this);
    }

    catList() {
        return this.props.categories.map((cat, i) => {
            return <CategoryItem cat={cat} key={i} id={cat.id} name={cat.name} budget={cat.budget}></CategoryItem>
          });
    }

    render() {
        return (
            <div>
                <p id="Budget Header">Budget Item</p>
                <ul>{this.catList()}</ul>
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


export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);