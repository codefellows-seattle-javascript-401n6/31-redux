import React from 'react';
import { connect } from 'react-redux';
import {
  categoryCreate,
  categoryUpdate,
  categoryDestroy
} from '../actions/category-actions';


class CategoryForm extends React.Component {
  constructor(props) {
    super(props);
    if (props.category) {
      this.state = {
        ...props.category,
      };
    } else {
      this.state = {
        name: '',
        price: 0,
      };
    };
  };

  controlChange = (event, secondInputArgument) => {
    let newState = {};
    newState[secondInputArgument] = event.target.value;
    this.setState(newState);
  };

  controlSubmit = (event) => {
    event.preventDefault();
    if (this.props.name === 'update') {//no update yet
      console.log('categoryObj: ', this.props.category)
      const category = Object.assign({}, this.props.category, this.state);
      this.props.onSubmit(category);
      console.log('Is Updating.');
    } else {
      console.log('Created Item');
      let categoryObj = {
        name: this.state.name,
        price: this.state.price
      };
      this.props.onSubmit(categoryObj);
      this.setState({
        name: '',
        price: 0,
      });
    };
  };

  render() {
    let buttonName = 'Submit'
    if(this.props.name === 'update') {
      buttonName = 'Update';
    };
    return (
      <form onSubmit={this.controlSubmit}>
        <div>
          <input type="text" placeholder="shoes"
            onChange={(event) => this.controlChange(event, 'name')}
            value={this.state.name} />
          <input type="number" placeholder="290"
            onChange={(event) => this.controlChange(event, 'price')}
            value={this.state.price} />
          <button type="submit">{buttonName}</button>
        </div>
      </form>
    )
  }
}

const mapStateToProps = state => ({
  categories: state.categories
});

const mapDispatchToProps = (dispatch) => {
  return {
    formCategoryCreate: (category) => dispatch(categoryCreate(category)),
    formCategoryDestroy: (uuidv4) => dispatch(categoryDestroy(uuidv4)),
    formCategoryUpdate: (category) => dispatch(categoryUpdate(category))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryForm);