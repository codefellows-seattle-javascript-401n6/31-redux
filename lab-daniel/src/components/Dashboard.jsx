
import React from 'react'
import {connect} from 'react-redux';
import { catCreate } from '../actions/action.js';
import CreateForm from './CreateForm.jsx';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div>
                <h1>{this.props.appHeader}</h1>
                <CreateForm catCreate={this.props.categories}/>
            </div>
        )
    }
}

export default Dashboard;