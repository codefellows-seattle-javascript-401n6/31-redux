'use strict';

import React from 'react';

class CategoryForm extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      title: props.category ? props.category.title : ''
    }
    this.handelChange = this.handelChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handelChange(ev) {
    this.setState({ title: ev.target.value})
  }

  handleSubmit(ev) {
    ev.preventDefault();
    this.props.onComplete(Object.assign({}, this.state))
  }

  render(){
    return (
      <form className='category-form' onSubmit={this.handleSubmit}>
      <input 
      name='title'
      type='text'
      placeholder='title'
      value={this.state.title}
      onChange={this.handelChange}/>
      <button type='submit'>{this.props.buttonText}</button>
      </form>    
    )
  }
}

export default CategoryForm;