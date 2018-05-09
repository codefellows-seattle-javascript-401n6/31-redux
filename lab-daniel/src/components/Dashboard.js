
import React from 'react'
import {connect} from 'react-redux';
import { catCreate } from '../actions/action.js';
import CreateForm from './CreateForm.js';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return(
            <div>
                <h1> Budget </h1>
                <CreateForm create={this.props.create}></CreateForm>
            </div>
        )
    }
    const mapStateToProps = state => ({
        categories: state.categories
    });

    const mapDispatchToProps = (dispatch, getState) => {
        create: (category) => dispatch(create(category))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);