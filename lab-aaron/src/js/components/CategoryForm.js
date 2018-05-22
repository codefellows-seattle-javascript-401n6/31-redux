import React from 'react';
import {connect} from 'react-redux';
import {
  categoryCreate,
  categoryUpdate,
  categoryDestroy
} from '../actions/category-actions';


class CategoryForm extends React.Component {
  constructor(props) {
    super(props);
  this.state = {
    timeStamp: new Date(),
    name: '',
    price: 0,

  };
  };

controlChange = (event, secondInputArgument) => {
  let newState = {};
  newState[secondInputArgument] = event.target.value;
  this.setState(newState);
};

controlSubmit = (event) => {
  event.preventDefault();
  if(this.props.name === 'update') {//no update yet
    console.log('Is Updating.');
  } else {
    console.log('Created Item');
  let categoryObj = {
    name: this.state.categoryName,
    price: this.state.categoryPrice
  };
  this.props.onSubmit(categoryObj);
  };
};

  render() {
    return (
    <form onSubmit={this.controlSubmit}>
      <div>
        <h1>Add Category</h1>
        <input type="text" placeholder="shoes" 
          onChange={(event) => this.controlChange(event, 'categoryName')} 
          value={this.state.categoryName}/>
        <input type="number" placeholder="290" 
          onChange={(event) => this.controlChange(event, 'categoryPrice')} 
          value={this.state.categoryPrice}/>
        <button type="submit">Submit</button>
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