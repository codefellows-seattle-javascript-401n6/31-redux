'use strict';
import React from 'react';
import {connect} from 'react-redux';
import {increase, decrease} from '../action/category-actions.js';

class Dashboard extends React.Component{
  render(){
    return <div>
      Data: {this.props.data}
      <button onClick={() => this.props.increase(this.state.in)}>
          increment by
        </button>
        <input onChange={this.handleChange}
               name="in" type="number"
               value={this.state.in} />
  
        <button onClick={() => this.props.decrease(this.state.de)}>
          decrement by
        </button>
        <input onChange={this.handleChange}
               name="de" type="number"
               value={this.state.de} />

    </div>
  }
}

const mapStateToProps = sate => ({
  data: state.data,
})

const mapDispatchToProps = (dispatch, getState) => ({
  increase: category => dispatch(increase()),
  decrease: category => dispatch(decrease()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
