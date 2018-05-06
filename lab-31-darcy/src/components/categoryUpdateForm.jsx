import React from 'react';

import {connect} from 'react-redux';
import { Link } from 'react-router-dom';

import {
  create,
  update,
  // remove,
} from '../actions/actions.jsx';

class CategoryUpdateForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      catName: this.props.catName,
      budget: this.props.budget,
    };
    this.update = this.update.bind(this);
    this.save = this.save.bind(this);
    this.cancel = this.cancel.bind(this);
  }

  update(event) {
    let updatedCategory = {};
    updatedCategory[event.target.catName] = event.target.value;
    this.setState(updatedCategory);
  }

  save(event) {
    event.preventDefault();
    this.props.finishUpdate(this.state);
  }

  cancel() {
    this.props.finishUpdate({});
  }

  render() {
    return <form id="update-item" onSubmit={this.save}>
      <input type="text" name="catName" value={this.state.catName} onChange={this.update}/>
      <input type="text" name="budget" value={this.state.budget} onChange={this.update}/>
      <button type="submit" onClick={this.save}> Update </button>
    </form>;
  }
}

const mapStateToProps = state => ({
  category: state.category
});

const mapDispatchToProps = (dispatch) => {
  return {
    create: category => dispatch(create(category)),
    update: category => dispatch(update(category)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryUpdateForm);