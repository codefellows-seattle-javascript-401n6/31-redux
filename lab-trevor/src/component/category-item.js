import React from 'react';
import {Link} from 'react-router-dom';

import UpdateCategory from './update-category'
class CategoryItem extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isEditing: false,
    }
    // this.remove = this.remove.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
    this.remove = this.remove.bind(this);
  }

  toggleEdit(){
     this.setState({isEditing: !this.state.isEditing});
  }

  remove(){
    console.log('removing', this.props.id)
    let data = {
      id: this.props.id
    }
    this.props.catDestroy(data);
  }

  render(){
    if(this.state.isEditing) {
      return <UpdateCategory catUpdate={this.props.catUpdate}
        id={this.props.id}
        index={this.props.index}
        toggleEdit={this.toggleEdit}
        cancel={this.toggleEdit}/>
    }
    return <div onDoubleClick={this.toggleEdit} index={this.props.index} id={this.props.id}>
      <div>Name: {this.props.name}</div>
      <div>Budget: $ {this.props.budget}</div>
      <div>Created {this.props.timestamp}</div>
       <button onClick={this.remove}>Remove</button>
      <button onClick={this.toggleEdit}>Edit</button>
      </div>
  }
}

export default CategoryItem;