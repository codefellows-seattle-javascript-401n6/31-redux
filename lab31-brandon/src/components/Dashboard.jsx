'use strict';

import React from 'react'
import CategoryForm from './category-form';
import CategoryItem from './category-item';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state ={};
    }
    render(){
        <CategoryForm create={this.props.create}></CategoryForm>
    }
}

export default Dashboard;