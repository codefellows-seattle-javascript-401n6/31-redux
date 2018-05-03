import React from 'react'
import {connect} from 'react-redux';
import {increment, decrement} from '../actions/counter-actions';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      incBy: 2,
      decBy: 2
    }
    this.handleChange = this.handleChange()
  }

  handleChange(ev) {
    let newState = {
      [ev.target.name]: ev.target.value
    };
    this.setState(newState);
  }

  render() {
    return <div>
      Data: {this.props.data}
      <div>
        <button onClick={this.props.increment}>increment</button>
        <button onClick={this.props.decrement}>decrement</button>
      </div>
      <div>
        <div>
          <button onClick={this.props.incrementBy}>increment by</button>
          <input type="number" value="2" />
        </div>
        <div>
          <button onClick={this.props.decrementBy}>decrement by</button>
          <input type="number" value="2" />
        </div>
      </div>
    </div>
  }
}

const mapStateToProps = state => ({
  title: 'test',
  data: state.data,
})

const mapDispatchToProps = (dispatch, getState) => ({
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement()),
  // incrementBy: () => dispatch(incrementBy()),
  // decrementBy: () => dispatch(decrementBy()),
})


export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);

