import React from 'react';

class CategoryForm extends React.Component {
  constructor(props) {
    super(props);
  this.state = {};
  };

controlChange = (event, secondInputArgument) => {
  let newState = {};
  newState[secondInputArgument] = event.target.value;
  this.setState(newState);
};

controlSubmit = (event) => {
  event.preventDefault();
  let categoryObj = {
    name: this.state.categoryName,
    price: this.state.categoryPrice
  };
  this.props.onSubmit(categoryObj);
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

export default CategoryForm;