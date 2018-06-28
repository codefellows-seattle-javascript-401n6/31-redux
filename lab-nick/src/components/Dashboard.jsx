'use strict';

import React from 'react';
import { connect } from 'react-redux';
import { create, update, destroy } from '../actions/budget-actions.jsx';
import CategoryForm from './category-form.jsx';
import CategoryItem from './category-item.jsx'

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log('Dashboard is Rendering');
    return <div>
      <h3>Categories</h3>
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
    update: (category) => dispatch(create(category)),
    destroy: (category) => dispatch(create(category)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
// export default Dashboard;