import React from 'react';
import { connect } from 'react-redux';
import { create } from '../actions/category-actions';
import CategoryForm from './CategoryForm.js';

class Dashboard extends React.Component {
    render() {
        return (
            <div>
                <CategoryForm create={this.props.create}/>
            </div>
        )
    }
}



export default Dashboard;