import React from 'react';
import {connect} from 'react-redux';

import {
  create,
  update,
  remove,
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
        <CategoryForm name="create"/>
        <CategoryList />
      </div>
    </div>;
  }
}

const mapStateToProps = state => ({
  category: state.category,
});

const mapDispatchToProps = (dispatch) => {
  return {
    create: () => dispatch(create()),
    update: category => dispatch(update(category)),
    remove: id => dispatch(remove(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryPage);