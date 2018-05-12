import React from 'react';

class CategoryList extends React.Component {
    constructor(props){
        super(props);
    }

    list() {
        return this.props.categories.map(category => {
            return <Category category />
        })
    }
}