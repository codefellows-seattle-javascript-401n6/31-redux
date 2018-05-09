import React from 'react';
import { connect } from 'react-redux';
import {
  create,
  update,
  remove
} from '../actions/actions.jsx';

import CategoryForm from './categoryForm.jsx';
import CategoryList from './categoryList.jsx';

class CategoryPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      appName: 'Budget Tracker',
      category: [{}]
    };
  }

  render() {
    return <div>
      <h1>{this.state.appName}</h1>
      <div>
        <CategoryForm create={this.props.create}/>
        <ul>
          {this.props.categories.map(cat => {
            return <CategoryList
              key={cat.id}
              category={cat}
              update={this.props.update}
              delete={this.props.remove} />;
          })}
          {/* <Category??? /> */}
        </ul>
      </div>
    </div>;
  }
}

const mapStateToProps = (state) => ({
  categories: state.categories,
});

const mapDispatchToProps = (dispatch, getState) => {
  return {
    create: (category) => dispatch(create(category)),
    update: (category) => dispatch(update(category)),
    remove: (category) => dispatch(remove(category)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryPage);