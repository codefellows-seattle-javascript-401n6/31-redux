import React from 'react';
import CategoryForm from './CategoryForm'


class CategoryItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <h3>{this.props.name}</h3>
                <h4>{this.props.budget}</h4>
                <p>{this.props.timestamp}</p>
            </div>
        )
    }
}

export default CategoryItem
