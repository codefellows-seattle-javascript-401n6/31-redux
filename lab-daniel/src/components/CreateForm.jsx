import React from 'react';


class CreateForm extends React.Component {
    constructor(props){
        super(props);
        this.updateGoal = this.updateGoal.bind(this);
        this.updateDetail = this.updateDetail.bind(this);
        this.handleSubmit =  this.handleSubmit.bind(this);
    }
    updateGoal(ev) {
        let setTitle = ev.target.value;
        this.setState({title: setTitle});

    }

    updateDetail(ev) {
        let setDetail = ev.target.value;
        this.setState({content: setDetail});
    }

    handleSubmit(ev) {
        ev.preventDefault();
        let data = {
            name: ev.target.title.value,
            budget: ev.target.budget.value
        }
        return this.props.catCreate(data)
    }

      
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input name="title" type="text" placeholder="Type category here"/>
                    <input name="budget" type="text" placeholder="Type budget"/>
                    <button type="submit" value="Add"></button>
                </form>
            </div>
        )
    }
}

export default CreateForm;