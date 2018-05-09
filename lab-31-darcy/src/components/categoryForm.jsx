import React from 'react';
import uuid from 'uuid';

class CategoryForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      budget: '',
    };
    this.submit = this.submit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  submit(event) {
    event.preventDefault();
    this.props.create({
      id: uuid(),
      timestamp: new Date(),
      name: this.state.name,
      budget: this.state.budget
    });
  }

  onChange(event) {
    event.preventDefault();
    this.setState ({
      [event.target.name]: event.target.value
    });
  }

  render() {
    return <form id="add-cat" onSubmit={this.submit}>
      <input 
        type="text" 
        name="name"
        value={this.state.name}
        placeholder="Category"
        onChange={this.onChange}
      />
      
      <input 
        type="text" 
        name="budget" 
        value={this.state.budget}
        placeholder="Budget"
        onChange={this.onChange}
      />
      
      <button type="submit"> Add Category </button>
    </form>;
  }
}


export default CategoryForm;